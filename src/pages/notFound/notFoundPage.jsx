import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { APP_ROUTES } from "../../constants";

import styles from "./notFoundPage.module.scss";

export const NotFoundPage = () => {
    return (
        <section className={styles.notFoundPage}>
            <div className={styles.container}>
                <div className={styles.sectionInner}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <div className={styles.content}>
                        <h1 className={styles.title}>404</h1>
                        <h2 className={styles.subtitle}>UH OH! You&apos;re lost.</h2>
                        <p className={styles.text}>
                            The page you are looking for does not exist. How you got here is a
                            mystery. But you can click the button below to go back to the homepage.
                        </p>
                        <button className={styles.button}>
                            <Link to={APP_ROUTES.HOME}>Home</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
