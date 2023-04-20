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

const getPinnedRepositories = async () => {
    const response = await axiosAPI.sendRequest(API_URLS.PINNED_REPOSITORIES, "get");

    switch (response.status) {
        case 403:
            AuthService.logout();
            return redirect(APP_ROUTES.LOGIN);
        default:
            break;
    }

    return response.data;
};

const pinUnpinRepository = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.REPOSITORIES}${id}/pin/`, "patch");

    switch (response.status) {
        case 403:
            AuthService.logout();
            return redirect(APP_ROUTES.LOGIN);
        default:
            break;
    }

    return response.data;
};

const getRepository = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.REPOSITORIES}${id}/`, "get");

    switch (response.status) {
        case 403:
            AuthService.logout();
            return redirect(APP_ROUTES.LOGIN);
        default:
            break;
    }

    return response.data;
};

const editRepository = async (data, id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.REPOSITORIES}${id}/`, "patch", data);

    return response.data;
};

const deleteRepository = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.REPOSITORIES}${id}/`, "delete");

    switch (response.status) {
        case 204:
            return redirect(APP_ROUTES.REPOSITORIES);
        default:
            break;
    }
};

export const RepositoriesService = {
    createRepository,
    getRepositories,
    getRepository,
    editRepository,
    deleteRepository,
    getPinnedRepositories,
    pinUnpinRepository,
};
