import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRepositories } from "../../redux/slices/repositoriesSlice";
import { RepositoryList } from "../../components";

import styles from "./homePage.module.scss";

export const HomePage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repositories, isFetched } = useSelector((state) => state.repositories);
    const dispatch = useDispatch();

    const sectionStyles = [styles.section];
    const asideStyles = [styles.aside];

    if (darkMode === true) {
        sectionStyles.push(styles.section_dark);
        asideStyles.push(styles.aside_dark);
    }

    useEffect(() => {
        if (isFetched === false) {
            dispatch(getRepositories());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className={sectionStyles.join(" ")}>
            <aside className={asideStyles.join(" ")}>
                <RepositoryList className={styles.repositoryList} repositories={repositories} />
            </aside>
            <main className={styles.main}>HomePage</main>
        </section>
    );
};
