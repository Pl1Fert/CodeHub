import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRepositories } from "../../redux/slices/repositoriesSlice";

import styles from "./homePage.module.scss";

export const HomePage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories, isFetched } = useSelector((state) => state.repositories);
    const dispatch = useDispatch();

    const mainStyles = [styles.main];
    darkMode ? mainStyles.push(styles.main_dark) : null;

    useEffect(() => {
        if (isFetched === false) {
            dispatch(getRepositories());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className={mainStyles.join(" ")}>
            HomePage
            <aside>
                {repositories.length !== 0 ? (
                    repositories.map((repository) => (
                        <p key={repository.id}>{repository.repo_name}</p>
                    ))
                ) : (
                    <h3>no repositories</h3>
                )}
            </aside>
        </main>
    );
};
