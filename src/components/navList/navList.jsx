import React from "react";

import { NAV_LINKS } from "../../constants/navLinks";
import { NavItem } from "../navItem/navItem";

import styles from "./navList.module.scss";

export const NavList = () => {
    return (
        <nav className={styles.NavList}>
            {NAV_LINKS.map((item) => (
                <NavItem key={item.id} to={`/${item.linkName}`}>
                    {item.linkName}
                </NavItem>
            ))}
        </nav>
    );
};
