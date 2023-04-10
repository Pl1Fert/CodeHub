import React from "react";
import { useParams } from "react-router-dom";

import styles from "./repositoryPage.module.scss";

export const RepositoryPage = () => {
    const { id } = useParams();

    return (
        <div className={styles.RepositoryPage}>
            RepositoryPage
            <h3>{id}</h3>
        </div>
    );
};
