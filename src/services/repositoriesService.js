import { axiosAPI } from "../api";
import { API_URLS } from "../constants";

const createRepository = async (data) => {
    const response = await axiosAPI.sendRequest(API_URLS.REPOSITORIES, "post", data);

    return response.data;
};

const getRepositories = async () => {
    const response = await axiosAPI.sendRequest(API_URLS.REPOSITORIES, "get");

    return response.data;
};

const getPinnedRepositories = async () => {
    const response = await axiosAPI.sendRequest(API_URLS.PINNED_REPOSITORIES, "get");

    return response.data;
};

const pinUnpinRepository = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.REPOSITORIES}${id}/pin/`, "patch");

    return response.data;
};

const getRepository = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.REPOSITORIES}${id}/`, "get");

    return response.data;
};

const editRepository = async (data, id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.REPOSITORIES}${id}/`, "patch", data);

    return response.data;
};

const deleteRepository = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.REPOSITORIES}${id}/`, "delete");
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
