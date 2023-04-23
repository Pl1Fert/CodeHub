import { redirect } from "react-router-dom";

import { repositoriesLoader } from "../repositoriesLoader";
import { APP_ROUTES } from "../../constants";
import { AuthService } from "../../services";

export const homePageLoader = async () => {
    const repositories = await repositoriesLoader();

    if (repositories.detail) {
        AuthService.logout();
        return redirect(APP_ROUTES.HOME + APP_ROUTES.LOGIN);
    }

    return { repositories };
};
