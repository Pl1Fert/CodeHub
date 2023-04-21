import { redirect } from "react-router-dom";

import { APP_ROUTES } from "../../constants";
import { AuthService } from "../../services";
import { fileDataLoader } from "../fileDataLoader";

export const filePageLoader = async ({ params }) => {
    const data = await fileDataLoader(params.id);

    if (data.detail) {
        AuthService.logout();
        return redirect(APP_ROUTES.LOGIN);
    }

    return { data };
};
