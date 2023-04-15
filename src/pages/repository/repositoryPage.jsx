import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./repositoryPage.module.scss";

export const RepositoryPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { id } = useParams();
    const sectionStyles = [styles.section];
    darkMode ? sectionStyles.push(styles.section_dark) : null;

    return (
        <section className={sectionStyles.join(" ")}>
            RepositoryPage
            <h3>{id}</h3>
        </section>
    );
};
