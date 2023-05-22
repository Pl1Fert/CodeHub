import { redirect } from "react-router-dom";

import { APP_ROUTES } from "../../constants";
import { AuthService } from "../../services";
import { fileDataLoader } from "../fileDataLoader";
import { fileLoader } from "../fileLoader";

export const filePageLoader = async ({ params }) => {
    const data = await fileDataLoader(params.id);
    const file = await fileLoader(params.id);

    if (data.detail || file.detail) {
        AuthService.logout();
        return redirect(APP_ROUTES.HOME + APP_ROUTES.LOGIN);
    }

    return { data, file };
};
