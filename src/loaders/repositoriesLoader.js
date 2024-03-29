import { RepositoriesService } from "../services";

export const repositoriesLoader = async () => {
    const repositories = await RepositoriesService.getRepositories();

    return Array.isArray(repositories) ? repositories : [];
};
