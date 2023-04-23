import React from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

    return (
        <section className={sectionStyles.join(" ")}>
            <Form method="post" className={formStyles.join(" ")}>
                <input type="hidden" defaultValue={repository.id} name="repositoryId" />
                <input type="hidden" defaultValue={repository.owner} name="repositoryOwner" />
                <input
                    type="text"
                    name="repositoryName"
                    defaultValue={repository.repo_name}
                    placeholder="Repository"
                    className={formInputStyles.join(" ")}
                    required={true}
                    minLength={1}
                    maxLength={50}
                />
                <label htmlFor="repositoryType">
                    Private:
                    <input
                        type="checkbox"
                        name="repositoryType"
                        className={styles.formCheckbox}
                        defaultChecked={repository.is_private}
                    />
                </label>
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
