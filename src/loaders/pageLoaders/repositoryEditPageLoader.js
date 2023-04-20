import { redirect } from "react-router-dom";

import { repositoryLoader } from "../repositoryLoader";
import { APP_ROUTES } from "../../constants";
import { AuthService } from "../../services";

export const repositoryEditPageLoader = async ({ params }) => {
    const repository = await repositoryLoader(params.id);

    if (!repository) {
        AuthService.logout();
        return redirect(APP_ROUTES.LOGIN);
    }

    return { repository };
};
