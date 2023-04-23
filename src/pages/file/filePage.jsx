import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./filePage.module.scss";

export const FilePage = () => {
    const { data, file } = useLoaderData();
    const { darkMode } = useSelector((state) => state.mode);
    const navigate = useNavigate();

    const [sectionStyles, fileDataContainerStyles, topStyles] = [
        [styles.section],
        [styles.fileDataContainer],
        [styles.top],
    ];
    const stylesArray = [sectionStyles, fileDataContainerStyles];

    if (darkMode === true) {
        stylesArray.map((item) => item.push(styles.darkTheme));
    }

    return (
        <section className={sectionStyles.join(" ")}>
            <div className={topStyles.join(" ")}>
                <button
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                    className={styles.button}
                    id={styles.backButton}>
                    Back
                </button>
                <h2 className={styles.fileTitle}>{file.file_name}</h2>
            </div>
            <div className={fileDataContainerStyles.join(" ")}>
                <p>{data}</p>
            </div>
        </section>
    );
};
