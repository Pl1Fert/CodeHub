import React from "react";
import { useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";

import { RepositoryList } from "../../components";
import noPhotoImg from "../../assets/no_photo.png";
import editImg from "../../assets/edit_icon.svg";
import { APP_ROUTES, PAGES } from "../../constants";

import styles from "./profilePage.module.scss";

export const ProfilePage = () => {
    const { darkMode } = useSelector((state) => state.mode);
    const { user, pinnedRepositories } = useLoaderData();

    const [sectionStyles, asideStyles, repositoryItemStyles, mainStyles, editButtonStyles] = [
        [styles.section],
        [styles.aside],
        [styles.repositoryItem],
        [styles.main],
        [styles.profileEditButton],
    ];

    const stylesArray = [sectionStyles, asideStyles, repositoryItemStyles, mainStyles];

    if (darkMode === true) {
        stylesArray.map((item) => item.push(styles.darkTheme));
        editButtonStyles.push(styles.profileEditButton_darkButton);
    }

    return (
        <section className={sectionStyles.join(" ")}>
            <aside className={asideStyles.join(" ")}>
                <div className={styles.profile}>
                    <div className={styles.profilePhotoWrapper}>
                        <img src={noPhotoImg} alt="noPhoto" className={styles.profilePhoto} />
                    </div>
                    <h3 className={styles.profileName}>{user.username}</h3>
                    <h4 className={styles.profileEmail}>{user.email}</h4>
                    <Link to={APP_ROUTES.EDIT}>
                        <button type="button" className={editButtonStyles.join(" ")}>
                            Edit
                            <img src={editImg} alt="edit" className={styles.profileEditImg} />
                        </button>
                    </Link>
                </div>
            </aside>
            <main className={mainStyles.join(" ")}>
                <h2 className={styles.mainTitle}>Favourite Repositories</h2>
                <RepositoryList
                    classNameList={styles.repositoryList}
                    classNameItem={repositoryItemStyles.join(" ")}
                    repositories={pinnedRepositories}
                    page={PAGES.PROFILE}
                />
            </main>
        </section>
    );
};
