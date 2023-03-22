import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/react.svg";
import iconSun from "../../assets/icon-sun.svg";
import iconMoon from "../../assets/icon-moon.svg";
import { APP_ROUTES } from "../../constants";
import { logout } from "../../redux/slices/authSlice";
import { changeMode } from "../../redux/slices/modeSlice";
import { NavList } from "../navList";

import styles from "./header.module.scss";

export const Header = () => {
    const dispatch = useDispatch();
    const { darkMode } = useSelector((state) => state.mode);

    const onLogoutClick = () => {
        dispatch(logout());
    };

    const onChangeMode = () => {
        dispatch(changeMode());
    };

    return (
        <header className={styles.Header}>
            <Link to={APP_ROUTES.HOME}>
                <img src={logo} alt="logo" />
            </Link>
            <NavList />
            <div className="buttons">
                {darkMode ? (
                    <button type="button" onClick={onChangeMode} className="modeButton">
                        <img src={iconSun} alt="iconSun" />
                    </button>
                ) : (
                    <button type="button" onClick={onChangeMode} className="modeButton">
                        <img src={iconMoon} alt="iconMoon" />
                    </button>
                )}
                <button type="button" onClick={onLogoutClick}>
                    Log Out
                </button>
            </div>
        </header>
    );
};
