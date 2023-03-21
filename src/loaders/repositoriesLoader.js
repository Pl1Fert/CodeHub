import axios from "axios";

import { API_URLS } from "../constants";

const getRepositories = () => {
    return axios
        .get(API_URLS.REPOSITORIES)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log({ ...error });
        });
};

export const repositoriesLoader = async () => {
    const repositories = await getRepositories();

    return repositories;
};
