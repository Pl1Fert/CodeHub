import React from "react";
import { useSelector } from "react-redux";
import { Form, useLoaderData, useNavigation } from "react-router-dom";

import { MyInput, RepositoryList } from "../../components";

import styles from "./repositoriesPage.module.scss";

export const RepositoriesPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories, user } = useLoaderData();
    const navigation = useNavigation();

    const sectionStyles = [styles.section];
    darkMode ? sectionStyles.push(styles.section_dark) : null;

    return (
        <section className={sectionStyles.join(" ")}>
            <aside className={styles.aside}>
                <Form method="post">
                    <MyInput
                        type="text"
                        name="repositoryName"
                        placeholder="Repository"
                        className={styles.input}
                    />
                    <label htmlFor="repositoryType">
                        Private:
                        <MyInput
                            type="checkbox"
                            name="repositoryType"
                            className={styles.checkbox}
                        />
                    </label>
                    <MyInput type="hidden" name="repositoryOwner" value={user.id} />
                    <button
                        type="submit"
                        className={styles.formButton}
                        disabled={navigation.state === "submitting"}>
                        Add New
                    </button>
                </Form>
            </aside>
            <RepositoryList
                classNameList={styles.repositoryList}
                classNameItem={styles.repositoryItem}
                repositories={repositories}
            />
        </section>
    );
};
