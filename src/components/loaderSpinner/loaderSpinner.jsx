import React from "react";

import styles from "./loaderSpinner.module.scss";

export const LoaderSpinner = () => {
    return (
        <div className={styles.ring}>
            <h1>Loading</h1>
            <span></span>
        </div>
    );
};
