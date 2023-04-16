import { repositoryLoader } from "../repositoryLoader";

export const repositoryPageLoader = async ({ params }) => {
    const { repository } = await repositoryLoader(params.id);

    return { repository };
};
