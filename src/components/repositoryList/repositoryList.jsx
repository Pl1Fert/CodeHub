import React from "react";

import { RepositoryLink } from "../repositoryLink";
import { APP_ROUTES } from "../../constants";

import styles from "./repositoryList.module.scss";

export const RepositoryList = ({ classNameList, classNameItem, repositories, page }) => (
    <ul className={classNameList}>
        {repositories.length !== 0 ? (
            repositories.map((repository) => (
                <li key={repository.id} className={classNameItem}>
                    <div>
                        <RepositoryLink
                            to={`/${APP_ROUTES.REPOSITORIES}/${repository.repo_name}/${repository.id}`}>
                            {repository.repo_name}
                        </RepositoryLink>
                        {page === "repositories" && (
                            <p className={styles.repositoryType}>
                                {repository.is_private === true ? "private" : "public"}
                            </p>
                        )}
                    </div>
                </li>
            ))
        ) : (
            <p style={{ textAlign: "center" }}>No Repositories</p>
        )}
    </ul>
);
