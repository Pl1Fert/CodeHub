import { RepositoriesService } from "../services";

export const repositoryLoader = async (id) => {
    const repository = await RepositoriesService.getRepository(id);

    return { repository };
};
