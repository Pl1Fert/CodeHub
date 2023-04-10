import React from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

import { RepositoryList } from "../../components";

import styles from "./repositoriesPage.module.scss";

export const RepositoriesPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories } = useLoaderData();

    const sectionStyles = [styles.section];
    darkMode ? sectionStyles.push(styles.section_dark) : null;

    return (
        <section className={sectionStyles.join(" ")}>
            Repositories Page
            <RepositoryList className={styles.repositoryList} repositories={repositories} />
        </section>
    );
};
