import { redirect } from "react-router-dom";

import { APP_ROUTES } from "../constants";
import { UserService } from "../services";

export const editUserAction = async ({ request }) => {
    const formData = await request.formData();
    const userId = formData.get("id");
    const editedUser = {
        username: formData.get("username"),
        email: formData.get("email"),
    };

    await UserService.editUser(editedUser, userId);

    return redirect(`/${APP_ROUTES.PROFILE}`);
};
