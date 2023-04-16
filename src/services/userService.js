import { redirect } from "react-router-dom";

import { axiosAPI } from "../api";
import { API_URLS, APP_ROUTES } from "../constants";

import { AuthService } from "./authService";

const getUser = async () => {
    const response = await axiosAPI.sendRequest(API_URLS.USER, "get");

    switch (response.status) {
        case 403:
            AuthService.logout();
            return redirect(APP_ROUTES.LOGIN);
        default:
            break;
    }

    return response.data;
};

export const UserService = { getUser };
