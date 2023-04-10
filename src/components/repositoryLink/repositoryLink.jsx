import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./repositoryLink.module.scss";

export const RepositoryLink = ({ children, to, ...props }) => {
    const { darkMode } = useSelector((state) => state.mode);
    const linkStyles = [styles.repositoryLink];

    darkMode ? linkStyles.push(styles.repositoryLink_dark) : null;

    return (
        <Link to={to} {...props} className={linkStyles.join(" ")}>
            {children}
        </Link>
    );
};
