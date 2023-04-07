import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../redux/slices/userSlice";

import styles from "./profilePage.module.scss";

export const ProfilePage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const mainStyles = [styles.main];
    darkMode ? mainStyles.push(styles.main_dark) : null;

    useEffect(() => {
        dispatch(getUser());
    }, []);

    return (
        <main className={mainStyles.join(" ")}>
            ProfilePage
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <h3>{user.id}</h3>
        </main>
    );
};
