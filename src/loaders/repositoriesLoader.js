import axios from "axios";
axios.defaults.withCredentials = true;

import { API_URLS } from "../constants";

const getRepositories = async () => {
    try {
        const response = await axios.get(API_URLS.REPOSITORIES);
        return response.data;
    } catch (error) {
        console.log({ ...error });
    }
};

export const repositoriesLoader = async () => {
    const repositories = await getRepositories();

    return { repositories };
};
