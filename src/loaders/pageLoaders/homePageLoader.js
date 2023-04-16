import { repositoriesLoader } from "../repositoriesLoader";

export const homePageLoader = async () => {
    const { repositories } = await repositoriesLoader();

    return { repositories };
};
