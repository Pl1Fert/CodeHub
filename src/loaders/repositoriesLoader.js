import { redirect } from "react-router-dom";

import { axiosAPI } from "../api";
import { API_URLS, APP_ROUTES } from "../constants";
import { AuthService } from "../services/authService";

const getRepositories = async () => {
    const response = await axiosAPI.sendRequest(API_URLS.REPOSITORIES, "get");

    switch (response.status) {
        case 403:
            AuthService.logout();
            return redirect(APP_ROUTES.LOGIN);
        default:
            break;
    }

    return response.data;
};

export const repositoriesLoader = async () => {
    const repositories = await getRepositories();

    return { repositories };
};
