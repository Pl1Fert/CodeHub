import React from "react";

import { MyInput } from "../UI";

import styles from "./repositoryFilter.module.scss";

export const RepositoryFilter = ({ filter, setFilter }) => {
    return (
        <>
            <MyInput
                type="text"
                placeholder="Search"
                className={styles.input}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </>
    );
};
