import React from "react";
import { Link, useMatch } from "react-router-dom";

import styles from "./navItem.module.scss";

export const NavItem = ({ children, to, ...props }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            className={match ? `${styles.navItem} + ${styles.navItem_active}`  : `${styles.navItem}`}
            {...props}>
            {children}
        </Link>
    );
};
