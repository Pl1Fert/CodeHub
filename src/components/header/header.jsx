import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { NavList } from "../navList";
import logo from "../../assets/react.svg";
import { APP_ROUTES } from "../../constants";
import { logout } from "../../redux/slices/authSlice";
import { changeMode } from "../../redux/slices/modeSlice";

import styles from "./header.module.scss";

export const Header = () => {
    const dispatch = useDispatch();
    const { darkMode } = useSelector((state) => state.darkMode);

    const onLogoutClick = () => {
        dispatch(logout());
    };

    const onChangeMode = () => {
        dispatch(changeMode());
    };

    return (
        <header className={styles.Header}>
            <Link to={APP_ROUTES.HOME_PAGE}>
                <img src={logo} alt="logo" />
            </Link>
            <NavList />
            <button type="button" onClick={onLogoutClick}>
                Log Out
            </button>
        </header>
    );
};
