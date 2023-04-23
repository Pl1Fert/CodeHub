import React from "react";

import { NAV_LINKS } from "../../constants/navLinks";
import { NavItem } from "../navItem";

import styles from "./navList.module.scss";

export const NavList = () => {
    return (
        <nav className={styles.navList}>
            {NAV_LINKS.map((item) => (
                <NavItem key={item.id} to={item.linkDest}>
                    {item.linkName}
                </NavItem>
            ))}
        </nav>
    );
};
