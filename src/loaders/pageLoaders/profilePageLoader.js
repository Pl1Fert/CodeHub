import { pinnedRepositoriesLoader } from "../pinnedRepositoriesLoader";
import { userLoader } from "../userLoader";

export const profilePageLoader = async () => {
    const { pinnedRepositories } = await pinnedRepositoriesLoader();
    const { user } = await userLoader();

    return { pinnedRepositories, user };
};
