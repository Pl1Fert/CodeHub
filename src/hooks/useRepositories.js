import { useMemo } from "react";

export const useRepositories = (repositories, filter) => {
    const filteredRepositories = useMemo(() => {
        return repositories.filter((repository) =>
            repository.repo_name.toLowerCase().includes(filter.toLowerCase()),
        );
    }, [repositories, filter]);

    return filteredRepositories;
};
