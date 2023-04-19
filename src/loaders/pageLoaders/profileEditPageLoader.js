import { userLoader } from "../userLoader";

export const profileEditPageLoader = async () => {
    const { user } = await userLoader();

    return { user };
};
