import { useMemo } from "react";

import { SORT_TYPES } from "../constants";

export const useAlphabetSortedRepositories = (repositories, sort) => {
    const sortedRepositories = useMemo(() => {
        switch (sort) {
            case SORT_TYPES.ALPHABET.DESC:
                return [...repositories].sort((a, b) => b.repo_name.localeCompare(a.repo_name));
            case SORT_TYPES.ALPHABET.ASC:
                return [...repositories].sort((a, b) => a.repo_name.localeCompare(b.repo_name));
            default:
                return repositories;
        }
    }, [sort, repositories]);

    return sortedRepositories;
};

export const usePrivacySortedRepositories = (repositories, sort) => {
    const sortedRepositories = useMemo(() => {
        switch (sort) {
            case SORT_TYPES.PRIVACY.PUBLIC:
                return [...repositories].filter((item) => !item.is_private);
            case SORT_TYPES.PRIVACY.PRIVATE:
                return [...repositories].filter((item) => item.is_private);
            default:
                return repositories;
        }
    }, [sort, repositories]);

    return sortedRepositories;
};

export const useRepositories = (
    repositories,
    filter = "",
    sort = { alphabet: SORT_TYPES.ALPHABET.ASC, privacy: SORT_TYPES.PRIVACY.ALL }
) => {
    const alphabetSortedRepositories = useAlphabetSortedRepositories(repositories, sort.alphabet);
    const privacySortedRepositories = usePrivacySortedRepositories(
        alphabetSortedRepositories,
        sort.privacy
    );
    const filteredRepositories = useMemo(() => {
        return privacySortedRepositories.filter((repository) =>
            repository.repo_name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [privacySortedRepositories, filter]);

    return filteredRepositories;
};
