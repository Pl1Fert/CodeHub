import { axiosAPI } from "../api";
import { API_URLS } from "../constants";

const getFileData = async (id) => {
    const response = axiosAPI.sendRequest(`${API_URLS.DATA}${id}`, "get");

    return response;
};

export const FileService = { getFileData };
