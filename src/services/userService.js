import { axiosAPI } from "../api";
import { API_URLS } from "../constants";

const getUser = async () => {
    const response = await axiosAPI.sendRequest(API_URLS.USER, "get");

    switch (response.status) {
        case 200:
            return response.data;
        default:
            break;
    }
};

export const UserService = {
    getUser,
};
