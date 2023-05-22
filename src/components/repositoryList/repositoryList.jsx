import React from "react";

import { RepositoryItem } from "../repositoryItem";

export const RepositoryList = ({ classNameList, classNameItem, repositories, page }) => (
    <ul className={classNameList}>
        {repositories.length !== 0 ? (
            repositories.map((repository) => (
                <RepositoryItem
                    key={repository.id}
                    className={classNameItem}
                    page={page}
                    repository={repository}
                />
            ))
        ) : (
            <p style={{ textAlign: "center" }}>No Repositories</p>
        )}
    </ul>
);
