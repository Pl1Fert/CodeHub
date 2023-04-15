import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, useLoaderData, useNavigation } from "react-router-dom";

import { MyInput, RepositoryFilter, RepositoryList } from "../../components";
import { useRepositories } from "../../hooks";

import styles from "./repositoriesPage.module.scss";

export const RepositoriesPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories, user } = useLoaderData();
    const navigation = useNavigation();
    const [filter, setFilter] = useState("");

    const sectionStyles = [styles.section];
    darkMode ? sectionStyles.push(styles.section_dark) : null;

    const filteredRepositories = useRepositories(repositories, filter);

    return (
        <section className={sectionStyles.join(" ")}>
            <aside className={styles.aside}>
                <Form method="post" className={styles.form}>
                    <MyInput
                        type="text"
                        name="repositoryName"
                        placeholder="Repository"
                        className={styles.formInput}
                    />
                    <label htmlFor="repositoryType">
                        Private:
                        <MyInput
                            type="checkbox"
                            name="repositoryType"
                            className={styles.formCheckbox}
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
            <main className={styles.main}>
                <RepositoryFilter
                    filter={filter}
                    setFilter={setFilter}
                    className={styles.filterInput}
                />
                <RepositoryList
                    classNameList={styles.repositoryList}
                    classNameItem={styles.repositoryItem}
                    repositories={filteredRepositories}
                />
            </main>
        </section>
    );
};
