import React from "react";
import { useSelector } from "react-redux";

import styles from "./repositoriesPage.module.scss";

export const RepositoriesPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const mainStyles = [styles.main];
    darkMode ? mainStyles.push(styles.main_dark) : null;

    return <main className={mainStyles.join(" ")}>Repositories Page</main>;
};
