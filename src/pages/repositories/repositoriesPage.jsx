import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, useLoaderData, useNavigation } from "react-router-dom";

import { MyButton, MyInput, RepositoryFilter, RepositoryList } from "../../components";
import { useRepositories } from "../../hooks";

import styles from "./repositoriesPage.module.scss";

export const RepositoriesPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories, user } = useLoaderData();
    const navigation = useNavigation();
    const [filter, setFilter] = useState("");

    const sectionStyles = [styles.section];
    const asideStyles = [styles.aside];
    const repositoryItemStyles = [styles.repositoryItem];
    const mainStyles = [styles.main];

    if (darkMode === true) {
        sectionStyles.push(styles.darkTheme);
        asideStyles.push(styles.darkTheme);
        mainStyles.push(styles.darkTheme);
        repositoryItemStyles.push(styles.darkTheme);
    }

    const filteredRepositories = useRepositories(repositories, filter);

    return (
        <section className={sectionStyles.join(" ")}>
            <aside className={asideStyles.join(" ")}>
                <Form method="post" className={styles.form}>
                    <MyInput
                        type="text"
                        name="repositoryName"
                        placeholder="Repository"
                        className={styles.formInput}
                        required={true}
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
                    <MyButton
                        type="submit"
                        className={styles.formButton}
                        disabled={navigation.state === "submitting"}>
                        Add New
                    </MyButton>
                </Form>
            </aside>
            <main className={mainStyles.join(" ")}>
                <RepositoryFilter
                    filter={filter}
                    setFilter={setFilter}
                    className={styles.filterInput}
                />
                <RepositoryList
                    classNameList={styles.repositoryList}
                    classNameItem={repositoryItemStyles.join(" ")}
                    repositories={filteredRepositories}
                    page={"repositories"}
                />
            </main>
        </section>
    );
};
