import React from "react";

import { SORT_TYPES } from "../../constants";

import styles from "./repositorySort.module.scss";

export const RepositorySort = ({ sort, setSort }) => {
    return (
        <div className={styles.sortButtons}>
            <label htmlFor="sort" className={styles.container}>
                a-z
                <input
                    type="radio"
                    name="sort"
                    value="asc"
                    id={styles.radioButton1}
                    className={styles.radioButton}
                    checked={sort === SORT_TYPES.ASC}
                    onChange={() => {
                        setSort(SORT_TYPES.ASC);
                    }}
                />
            </label>
            <label htmlFor="sort" className={styles.container}>
                z-a
                <input
                    type="radio"
                    name="sort"
                    value="desc"
                    checked={sort === SORT_TYPES.DESC}
                    className={styles.radioButton}
                    id={styles.radioButton2}
                    onChange={() => {
                        setSort(SORT_TYPES.DESC);
                    }}
                />
            </label>
        </div>
    );
};
