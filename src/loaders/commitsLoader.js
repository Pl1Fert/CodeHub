import axios from "axios";
axios.defaults.withCredentials = true;

import { API_URLS } from "../constants";

const getCommits = async () => {
    try {
        const response = await axios.get(API_URLS.COMMITS);
        return response.data;
    } catch (error) {
        console.log({ ...error });
    }
};

export const commitsLoader = async () => {
    const commits = await getCommits();

    console.log(commits);

    return commits;
};
