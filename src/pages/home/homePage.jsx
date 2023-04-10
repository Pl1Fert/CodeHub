import React from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

import { RepositoryList } from "../../components";

import styles from "./homePage.module.scss";

export const HomePage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories } = useLoaderData();

    const sectionStyles = [styles.section];
    const asideStyles = [styles.aside];

    if (darkMode === true) {
        sectionStyles.push(styles.section_dark);
        asideStyles.push(styles.aside_dark);
    }

    return (
        <section className={sectionStyles.join(" ")}>
            <aside className={asideStyles.join(" ")}>
                <RepositoryList className={styles.repositoryList} repositories={repositories} />
            </aside>
            <main className={styles.main}>HomePage</main>
        </section>
    );
};
