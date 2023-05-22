import React from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { repositoryEditSchema } from "../../validators";

import styles from "./repositoryEditPage.module.scss";

export const RepositoryEditPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repository } = useLoaderData();
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
    } = useForm({ mode: "onBlur", resolver: yupResolver(repositoryEditSchema) });

    return (
        <section className={sectionStyles.join(" ")}>
            <Form method="post" className={formStyles.join(" ")} onSubmit={handleSubmit}>
                <input type="hidden" defaultValue={repository.id} {...register("repositoryId")} />
                <input
                    type="hidden"
                    defaultValue={repository.owner}
                    {...register("repositoryOwner")}
                />
                <input
                    type="text"
                    {...register("repositoryName")}
                    defaultValue={repository.repo_name}
                    placeholder="Repository"
                    className={formInputStyles.join(" ")}
                />
                <div className={styles.error}>
                    {errors?.repositoryName && <p>{errors?.repositoryName?.message || "Error!"}</p>}
                </div>
                <label htmlFor="repositoryType">
                    Private:
                    <input
                        type="checkbox"
                        {...register("repositoryType")}
                        className={styles.formCheckbox}
                        defaultChecked={repository.is_private}
                    />
                </label>
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
