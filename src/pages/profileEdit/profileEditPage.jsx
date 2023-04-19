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

    if (darkMode === true) {
        formInputStyles.push(styles.darkInput);
        sectionStyles.push(styles.darkTheme);
    }

    return (
        <section className={sectionStyles.join(" ")}>
            <Form method="post" className={styles.form}>
                <input type="hidden" defaultValue={user.id} name="userId" />
                <input
                    type="text"
                    defaultValue={user.username}
                    placeholder="Username"
                    name="userName"
                    className={formInputStyles.join(" ")}
                    required
                />
                <input
                    type="email"
                    defaultValue={user.email}
                    placeholder="Email"
                    name="userEmail"
                    className={formInputStyles.join(" ")}
                    required
                />
                <input
                    type="password"
                    defaultValue={user.password}
                    placeholder="Password"
                    name="userPassword"
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
