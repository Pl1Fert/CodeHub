import React from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./profileEditPage.module.scss";

export const ProfileEditPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { user } = useLoaderData();
    const navigate = useNavigate();
    const formInputStyles = [styles.formInput];
    const sectionStyles = [styles.section];
    const formStyles = [styles.form];

    if (darkMode === true) {
        formInputStyles.push(styles.darkInput);
        sectionStyles.push(styles.darkTheme);
        formStyles.push(styles.darkTheme);
    }

    return (
        <section className={sectionStyles.join(" ")}>
            <Form method="post" className={formStyles.join(" ")}>
                <input type="hidden" defaultValue={user.id} name="id" />
                <input type="hidden" defaultValue="a" name="password" />
                <input
                    type="text"
                    defaultValue={user.username}
                    placeholder="Username"
                    name="username"
                    className={formInputStyles.join(" ")}
                    required
                    maxLength={100}
                    minLength={1}
                />
                <input
                    type="email"
                    defaultValue={user.email}
                    placeholder="Email"
                    name="email"
                    className={formInputStyles.join(" ")}
                    required
                />
                <div className={styles.formButtons}>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className={styles.formButton}
                        id={styles.formButton1}>
                        Back
                    </button>
                    <button type="submit" className={styles.formButton} id={styles.formButton2}>
                        Save
                    </button>
                </div>
            </Form>
        </section>
    );
};
