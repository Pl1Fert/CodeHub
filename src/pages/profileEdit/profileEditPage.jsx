import React from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { profileEditSchema } from "../../validators";

import styles from "./profileEditPage.module.scss";

export const ProfileEditPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { user } = useLoaderData();
    const navigate = useNavigate();

    const [sectionStyles, formInputStyles, formStyles] = [
        [styles.section],
        [styles.formInput],
        [styles.form],
    ];

    const stylesArray = [sectionStyles, formStyles];

    if (darkMode === true) {
        stylesArray.map((item) => item.push(styles.darkTheme));
        formInputStyles.push(styles.darkInput);
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "onBlur", resolver: yupResolver(profileEditSchema) });

    return (
        <section className={sectionStyles.join(" ")}>
            <Form method="post" className={formStyles.join(" ")} onSubmit={handleSubmit}>
                <input type="hidden" defaultValue={user.id} {...register("id")} />
                <input
                    type="text"
                    defaultValue={user.username}
                    placeholder="Username"
                    {...register("username")}
                    className={formInputStyles.join(" ")}
                />
                <div className={styles.error}>
                    {errors?.username && <p>{errors?.username?.message || "Error!"}</p>}
                </div>
                <input
                    type="email"
                    defaultValue={user.email}
                    placeholder="Email"
                    {...register("email")}
                    className={formInputStyles.join(" ")}
                />
                <div className={styles.error}>
                    {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                </div>
                <div className={styles.formButtons}>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className={styles.formButton}
                        id={styles.formBackButton}>
                        Back
                    </button>
                    <button
                        type="submit"
                        className={styles.formButton}
                        id={styles.formSubmitButton}
                        disabled={!isValid}>
                        Save
                    </button>
                </div>
            </Form>
        </section>
    );
};
