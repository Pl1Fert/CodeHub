import { axiosAPI } from "../api";
import { API_URLS } from "../constants";

const getUser = async () => {
    const response = await axiosAPI.sendRequest(API_URLS.USER, "get");

    return response.data;
};

const editUser = async (data, id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.REGISTER}${id}/`, "patch", data);
};

export const UserService = { getUser, editUser };
