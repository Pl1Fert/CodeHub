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
                    checked={sort.alphabet === SORT_TYPES.ALPHABET.ASC}
                    onChange={() => {
                        setSort({ ...sort, alphabet: SORT_TYPES.ALPHABET.ASC });
                    }}
                />
            </label>
            <label htmlFor="sort" className={styles.container}>
                z-a
                <input
                    type="radio"
                    name="sort"
                    value="desc"
                    checked={sort.alphabet === SORT_TYPES.ALPHABET.DESC}
                    className={styles.radioButton}
                    id={styles.radioButton2}
                    onChange={() => {
                        setSort({ ...sort, alphabet: SORT_TYPES.ALPHABET.DESC });
                    }}
                />
            </label>
            <label htmlFor="select" className={styles.container}>
                privacy
                <select
                    name="select"
                    id={styles.select}
                    value={sort.privacy}
                    onChange={(e) => {
                        setSort({ ...sort, privacy: e.target.value });
                    }}>
                    <option value={SORT_TYPES.PRIVACY.ALL} key={1}>
                        All
                    </option>
                    <option value={SORT_TYPES.PRIVACY.PUBLIC} key={2}>
                        Public
                    </option>
                    <option value={SORT_TYPES.PRIVACY.PRIVATE} key={3}>
                        Private
                    </option>
                </select>
            </label>
        </div>
    );
};
