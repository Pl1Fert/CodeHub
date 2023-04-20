import { redirect } from "react-router-dom";

import { pinnedRepositoriesLoader } from "../pinnedRepositoriesLoader";
import { userLoader } from "../userLoader";
import { APP_ROUTES } from "../../constants";
import { AuthService } from "../../services";

export const profilePageLoader = async () => {
    const pinnedRepositories = await pinnedRepositoriesLoader();
    const user = await userLoader();

    if (!user || !pinnedRepositories) {
        AuthService.logout();
        return redirect(APP_ROUTES.LOGIN);
    }
    return { pinnedRepositories, user };
};
