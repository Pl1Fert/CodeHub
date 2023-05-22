import React from "react";

import { CommitItem } from "../commitItem";

import styles from "./commitList.module.scss";

export const CommitList = ({ commits }) => {
    return (
        <ul className={styles.commitList}>
            {commits.length !== 0 ? (
                commits.map((commit) => <CommitItem commit={commit} key={commit.id} />)
            ) : (
                <p style={{ textAlign: "center" }}>No Commits</p>
            )}
        </ul>
    );
};
