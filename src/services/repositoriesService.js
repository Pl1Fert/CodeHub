import { axiosAPI } from "../api";
import { API_URLS } from "../constants";

const getRepositories = async () => {
    const response = await axiosAPI.sendRequest(API_URLS.REPOSITORIES, "get");
    return response.data;
};

export const RepositoriesService = {
    getRepositories,
};
