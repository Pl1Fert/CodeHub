import React from "react";
import { Link } from "react-router-dom";

import styles from "./repositoryLink.module.scss";

export const RepositoryLink = ({ children, to, ...props }) => {
    return (
        <Link to={to} {...props} className={styles.repositoryLink}>
            {children}
        </Link>
    );
};
