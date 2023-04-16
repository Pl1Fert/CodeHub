import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

import { RepositoryFilter, RepositoryList } from "../../components";
import { useRepositories } from "../../hooks";

import styles from "./homePage.module.scss";

export const HomePage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories } = useLoaderData();
    const [filter, setFilter] = useState("");

    const sectionStyles = [styles.section];
    const asideStyles = [styles.aside];

    if (darkMode === true) {
        sectionStyles.push(styles.darkTheme);
        asideStyles.push(styles.darkTheme);
    }

    const filteredRepositories = useRepositories(repositories, filter);

    return (
        <section className={sectionStyles.join(" ")}>
            <aside className={asideStyles.join(" ")}>
                <h4 className={styles.asideTitle}>Top Repositories</h4>
                <RepositoryFilter
                    filter={filter}
                    setFilter={setFilter}
                    className={styles.filterInput}
                />
                <RepositoryList
                    classNameList={styles.repositoryList}
                    repositories={filteredRepositories}
                />
            </aside>
            <main className={styles.main}>HomePage</main>
        </section>
    );
};
