import { redirect } from "react-router-dom";

import { APP_ROUTES } from "../constants";
import { RepositoriesService } from "../services";

export const createRepositoryAction = async ({ request }) => {
    const formData = await request.formData();
    const newRepository = {
        repo_name: formData.get("repositoryName"),
        is_private: !!formData.get("repositoryType"),
        owner: formData.get("repositoryOwner"),
    };

    const repository = await RepositoriesService.createRepository(newRepository);

    return redirect(`/${APP_ROUTES.REPOSITORIES}/${repository.repo_name}/${repository.id}`);
};

export const editRepositoryAction = async ({ request }) => {
    const formData = await request.formData();
    const editedRepository = {
        id: formData.get("repositoryId"),
        repo_name: formData.get("repositoryName"),
        is_private: !!formData.get("repositoryType"),
        owner: formData.get("repositoryOwner"),
    };

    const repository = await RepositoriesService.editRepository(editedRepository);

    return redirect(`/${APP_ROUTES.REPOSITORIES}/${repository.repo_name}/${repository.id}`);
};
