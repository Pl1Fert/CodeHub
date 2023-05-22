import React from "react";

import logo from "../../assets/logo.svg";

import styles from "./errorPage.module.scss";

export const ErrorPage = () => {
    return (
        <section className={styles.errorPage}>
            <div className={styles.container}>
                <div className={styles.sectionInner}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <div className={styles.content}>
                        <h1 className={styles.title}>Something went wrong...</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
