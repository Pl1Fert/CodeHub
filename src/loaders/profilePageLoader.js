import { repositoriesLoader } from "./repositoriesLoader";
import { userLoader } from "./userLoader";

export const profilePageLoader = async () => {
    const { repositories } = await repositoriesLoader();
    const { user } = await userLoader();

    return { repositories, user };
};
