import React from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

import styles from "./profilePage.module.scss";

export const ProfilePage = () => {
    const { darkMode } = useSelector((state) => state.mode);

    const { user } = useLoaderData();

    const mainStyles = [styles.main];
    darkMode ? mainStyles.push(styles.main_dark) : null;

    return (
        <main className={mainStyles.join(" ")}>
            ProfilePage
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <h3>{user.id}</h3>
        </main>
    );
};
