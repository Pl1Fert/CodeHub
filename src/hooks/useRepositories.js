import { useMemo } from "react";

import { SORT_TYPES } from "../constants";

export const useSortedRepositories = (repositories, sort) => {
    const sortedRepositories = useMemo(() => {
        if (sort) {
            switch (sort) {
                case SORT_TYPES.DESC:
                    return [...repositories].sort((a, b) => b.repo_name.localeCompare(a.repo_name));
                case SORT_TYPES.ASC:
                    return [...repositories].sort((a, b) => a.repo_name.localeCompare(b.repo_name));
                default:
                    break;
            }
        }
        return repositories;
    }, [sort, repositories]);

    return sortedRepositories;
};

export const useRepositories = (repositories, filter, sort) => {
    const sortedRepositories = useSortedRepositories(repositories, sort);
    const filteredRepositories = useMemo(() => {
        return sortedRepositories.filter((repository) =>
            repository.repo_name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [sortedRepositories, filter]);

    return filteredRepositories;
};
