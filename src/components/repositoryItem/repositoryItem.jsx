import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { APP_ROUTES } from "../../constants";
import { RepositoriesService } from "../../services";

import starImg from "../../assets/star.png";
import favoriteImg from "../../assets/favourite.png";

import styles from "./repositoryItem.module.scss";

export const RepositoryItem = ({ className, page, repository }) => {
    const { darkMode } = useSelector((state) => state.mode);
    const [favoriteRep, setFavoriteRep] = useState(false);
    const linkStyles = [styles.repositoryLink];
    const pagesForRepoType = ["repositories", "profile"];
    const pagesForStar = ["repositories"];

    darkMode ? linkStyles.push(styles.repositoryLink_dark) : null;

    const onClickHandler = () => {
        setFavoriteRep((prev) => !prev);
        RepositoriesService.pinUnpinRepository(repository.id);
    };

    return (
        <div className={className}>
            <div className={styles.description}>
                <Link
                    to={`/${APP_ROUTES.REPOSITORIES}/${repository.repo_name}/${repository.id}`}
                    className={linkStyles.join(" ")}>
                    {repository.repo_name}
                </Link>
                {pagesForRepoType.includes(page) && (
                    <p className={styles.repositoryType}>
                        {repository.is_private === true ? "private" : "public"}
                    </p>
                )}
            </div>
            {/* TODO: add state for star if reloaded */}
            {pagesForStar.includes(page) && (
                <button type="button" onClick={onClickHandler} className={styles.button}>
                    {favoriteRep ? (
                        <img src={favoriteImg} alt="favorite" className={styles.starImg} />
                    ) : (
                        <img src={starImg} alt="star" className={styles.starImg} />
                    )}
                </button>
            )}
        </div>
    );
};
