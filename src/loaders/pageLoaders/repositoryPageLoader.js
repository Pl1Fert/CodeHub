import { redirect } from "react-router-dom";

import { repositoryLoader } from "../repositoryLoader";
import { APP_ROUTES } from "../../constants";
import { AuthService } from "../../services";

export const repositoryPageLoader = async ({ params }) => {
    const repository = await repositoryLoader(params.id);

    if (repository.detail) {
        AuthService.logout();
        return redirect(APP_ROUTES.HOME + APP_ROUTES.LOGIN);
    }

    return { repository };
};
