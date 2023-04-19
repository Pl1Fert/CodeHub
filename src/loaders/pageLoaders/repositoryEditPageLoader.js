import { repositoryLoader } from "../repositoryLoader";

export const repositoryEditPageLoader = async ({ params }) => {
    const { repository } = await repositoryLoader(params.id);

    return { repository };
};
