import { redirect } from "react-router-dom";

import { axiosAPI } from "../api";
import { API_URLS, APP_ROUTES } from "../constants";

import { AuthService } from "./authService";

const createRepository = async (data) => {
    const response = await axiosAPI.sendRequest(API_URLS.REPOSITORIES, "post", data);

    return response.data;
};

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

export const RepositoriesService = {
    createRepository,
    getRepositories,
};
