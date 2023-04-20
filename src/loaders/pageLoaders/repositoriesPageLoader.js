import { repositoriesLoader } from "../repositoriesLoader";

export const repositoriesPageLoader = async () => {
    const { repositories } = await repositoriesLoader();

    return { repositories };
};
