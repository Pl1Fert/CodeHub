import { axiosAPI } from "../api";
import { API_URLS } from "../constants";

const getFileData = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.DATA}${id}`, "get");

    return response.data;
};

const getFile = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.FILES}${id}`, "get");

    return response.data;
};

export const FileService = { getFileData, getFile };
