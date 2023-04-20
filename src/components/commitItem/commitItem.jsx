import React from "react";

import styles from "./commitItem.module.scss";

export const CommitItem = ({ commit }) => {
    return (
        <div className={styles.commit}>
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
