import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, useLoaderData, useNavigation } from "react-router-dom";

import { RepositoryFilter, RepositoryList, RepositorySort } from "../../components";
import { useRepositories } from "../../hooks";
import { PAGES, SORT_TYPES } from "../../constants";

import styles from "./repositoriesPage.module.scss";

export const RepositoriesPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories } = useLoaderData();
    const navigation = useNavigation();
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState({
        alphabet: SORT_TYPES.ALPHABET.ASC,
        privacy: SORT_TYPES.PRIVACY.ALL,
    });

    const [
        sectionStyles,
        asideStyles,
        repositoryItemStyles,
        mainStyles,
        filterInputStyles,
        formInputStyles,
    ] = [
        [styles.section],
        [styles.aside],
        [styles.repositoryItem],
        [styles.main],
        [styles.filterInput],
        [styles.formInput],
    ];

    const stylesArray = [sectionStyles, asideStyles, repositoryItemStyles, mainStyles];

    if (darkMode === true) {
        stylesArray.map((item) => item.push(styles.darkTheme));
        filterInputStyles.push(styles.darkInput);
        formInputStyles.push(styles.darkInput);
    }

    const filteredRepositories = useRepositories(repositories, filter, sort);

    return (
        <section className={sectionStyles.join(" ")}>
            <aside className={asideStyles.join(" ")}>
                <Form method="post" className={styles.form}>
                    <input
                        type="text"
                        name="repositoryName"
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
                        />
                    </label>
                    <button
                        type="submit"
                        className={styles.formButton}
                        disabled={navigation.state === "submitting"}>
                        Add New
                    </button>
                </Form>
            </aside>
            <main className={mainStyles.join(" ")}>
                <RepositoryFilter
                    filter={filter}
                    setFilter={setFilter}
                    className={filterInputStyles.join(" ")}
                />
                <RepositorySort sort={sort} setSort={setSort} />
                <RepositoryList
                    classNameList={styles.repositoryList}
                    classNameItem={repositoryItemStyles.join(" ")}
                    repositories={filteredRepositories}
                    page={PAGES.REPOSITORIES}
                />
            </main>
        </section>
    );
};
