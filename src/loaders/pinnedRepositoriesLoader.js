import { RepositoriesService } from "../services";

export const pinnedRepositoriesLoader = async () => {
    const pinnedRepositories = await RepositoriesService.getPinnedRepositories();

    return pinnedRepositories;
};
