import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import editImg from "../../assets/edit_icon.svg";
import { RepositoriesService } from "../../services/repositoriesService";

import styles from "./repositoryPage.module.scss";

export const RepositoryPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repository } = useLoaderData();
    const navigate = useNavigate();

    const sectionStyles = [styles.section];
    const topStyles = [styles.top];
    const asideStyles = [styles.aside];
    const mainStyles = [styles.main];
    const editButtonStyles = [styles.repositoryEditButton];

    if (darkMode === true) {
        topStyles.push(styles.darkTheme);
        sectionStyles.push(styles.darkTheme);
        asideStyles.push(styles.darkTheme);
        mainStyles.push(styles.darkTheme);
        editButtonStyles.push(styles.repositoryEditButton_darkButton);
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
                <div className={styles.repository}>
                    <div className={styles.description}>
                        <h3 className={styles.repositoryName}>{repository.repo_name}</h3>
                        <p className={styles.repositoryType}>
                            {repository.is_private ? "Private" : "Public"}
                        </p>
                    </div>
                    <Link to={"edit"}>
                        <button type="button" className={editButtonStyles.join(" ")}>
                            Edit
                            <img src={editImg} alt="edit" className={styles.repositoryEditImg} />
                        </button>
                    </Link>
                </div>
                <button
                    type="button"
                    onClick={() => {
                        RepositoriesService.deleteRepository(repository.id);
                    }}
                    className={styles.button}
                    id={styles.deleteButton}>
                    Delete
                </button>
            </div>
            <div className={styles.container}>
                <main className={mainStyles.join(" ")}></main>
                <aside className={asideStyles.join(" ")}></aside>
            </div>
        </section>
    );
};
