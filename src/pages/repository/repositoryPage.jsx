import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import editImg from "../../assets/edit_icon.svg";
import { RepositoriesService } from "../../services/repositoriesService";
import { CommitList, FileList } from "../../components";
import { APP_ROUTES } from "../../constants";

import styles from "./repositoryPage.module.scss";

export const RepositoryPage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { repository } = useLoaderData();
    const navigate = useNavigate();
    const [confirmName, setConfirmName] = useState("");
    const filesLatest =
        repository.commits.length !== 0
            ? repository.commits[repository.commits.length - 1].files
            : [];

    const [sectionStyles, asideStyles, topStyles, mainStyles, editButtonStyles, inputStyles] = [
        [styles.section],
        [styles.aside],
        [styles.top],
        [styles.main],
        [styles.repositoryEditButton],
        [styles.input],
    ];

    const stylesArray = [sectionStyles, asideStyles, topStyles, mainStyles];

    if (darkMode === true) {
        stylesArray.map((item) => item.push(styles.darkTheme));
        inputStyles.push(styles.darkInput);
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
                    <Link to={APP_ROUTES.EDIT}>
                        <button type="button" className={editButtonStyles.join(" ")}>
                            Edit
                            <img src={editImg} alt="edit" className={styles.repositoryEditImg} />
                        </button>
                    </Link>
                </div>
                <div className={styles.deleteBlock}>
                    <label htmlFor="confirm">To delete enter the repository name</label>
                    <input
                        type="text"
                        value={confirmName}
                        onChange={(e) => setConfirmName(e.target.value)}
                        placeholder="Repository"
                        className={inputStyles.join(" ")}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            RepositoriesService.deleteRepository(repository.id);
                        }}
                        className={styles.button}
                        id={styles.deleteButton}
                        disabled={confirmName !== repository.repo_name}>
                        Delete
                    </button>
                </div>
            </div>
            <div className={styles.container}>
                <main className={mainStyles.join(" ")}>
                    <h2 className={styles.title}>Files</h2>
                    <FileList files={filesLatest} />
                </main>
                <aside className={asideStyles.join(" ")}>
                    <h2 className={styles.title}>Commits</h2>
                    <CommitList commits={repository.commits} />
                </aside>
            </div>
        </section>
    );
};
