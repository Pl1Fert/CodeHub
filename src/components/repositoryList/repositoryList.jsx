import React from "react";

import { RepositoryLink } from "../repositoryLink";
import { APP_ROUTES } from "../../constants";

export const RepositoryList = ({ className, repositories }) => (
    <ul className={className}>
        {repositories.length !== 0 ? (
            repositories.map((repository) => (
                <li key={repository.id}>
                    <RepositoryLink to={`/${APP_ROUTES.REPOSITORIES}/${repository.repo_name}`}>
                        {repository.repo_name}
                    </RepositoryLink>
                </li>
            ))
        ) : (
            <p style={{ textAlign: "center" }}>No Repositories</p>
        )}
    </ul>
);
