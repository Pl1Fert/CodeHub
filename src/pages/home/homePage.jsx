import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Await, useLoaderData } from "react-router-dom";

import { LoaderSpinner } from "../../components";

import styles from "./homePage.module.scss";

export const HomePage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories } = useLoaderData();

    const mainStyles = [styles.main];
    darkMode ? mainStyles.push(styles.main_dark) : null;

    return (
        <main className={mainStyles.join(" ")}>
            HomePage
            <aside>
                <Suspense fallback={<LoaderSpinner />}>
                    <Await resolve={repositories}>
                        {(resolvedRepositories) => (
                            <>
                                {resolvedRepositories.length !== 0 ? (
                                    resolvedRepositories.map((repository) => (
                                        <p key={repository.id}>{repository.repo_name}</p>
                                    ))
                                ) : (
                                    <h3>no repositories</h3>
                                )}
                            </>
                        )}
                    </Await>
                </Suspense>
            </aside>
        </main>
    );
};
