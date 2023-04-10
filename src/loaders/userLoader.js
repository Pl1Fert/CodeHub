import { axiosAPI } from "../api";
import { API_URLS } from "../constants";

const getUser = async () => {
    const response = await axiosAPI.sendRequest(API_URLS.USER, "get");
    return response.data;
};

export const userLoader = async () => {
    const user = await getUser();

    return { user };
};
