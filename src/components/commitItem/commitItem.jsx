import React from "react";
import { useSelector } from "react-redux";

import styles from "./commitItem.module.scss";

export const CommitItem = ({ commit }) => {
    const { darkMode } = useSelector((state) => state.mode);

    const commitStyles = [styles.commit];

    if (darkMode === true) {
        commitStyles.push(styles.darkTheme);
    }

    return (
        <div className={commitStyles.join(" ")}>
            <div className={styles.commitTopPart}>
                <p>Commit</p>
                <p>{commit.commit_hash}</p>
            </div>
            <div className={styles.commitBottomPart}>
                <p>{commit.message}</p>
            </div>
        </div>
    );
};
