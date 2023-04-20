import { redirect } from "react-router-dom";

import { userLoader } from "../userLoader";
import { APP_ROUTES } from "../../constants";
import { AuthService } from "../../services";

export const profileEditPageLoader = async () => {
    const user = await userLoader();

    if (!user) {
        AuthService.logout();
        return redirect(APP_ROUTES.LOGIN);
    }

    return { user };
};
