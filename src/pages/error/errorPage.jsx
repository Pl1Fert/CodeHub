import React from "react";

import img from "../../assets/react.svg";

import styles from "./errorPage.module.scss";

export const ErrorPage = () => {
    return (
        <section className={styles.errorPage}>
            <div className={styles.container}>
                <div className={styles.sectionInner}>
                    <img src={img} alt="img" className={styles.img} />
                    <div className={styles.content}>
                        <h1 className={styles.title}>Something went wrong...</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
