import React from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./repositoryPage.module.scss";

export const RepositoryPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repository } = useLoaderData();
    console.log(repository);
    const sectionStyles = [styles.section];
    darkMode ? sectionStyles.push(styles.section_dark) : null;

    return (
        <section className={sectionStyles.join(" ")}>
            RepositoryPage
            <h3>{repository.repo_name}</h3>
            <h3>{repository.id}</h3>
        </section>
    );
};
