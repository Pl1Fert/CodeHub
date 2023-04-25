import { axiosAPI } from "../api";
import { API_URLS, RESTRICT_EXTENSIONS } from "../constants";

const getFileData = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.DATA}${id}`, "get");

    return response.data;
};

const getFile = async (id) => {
    const response = await axiosAPI.sendRequest(`${API_URLS.FILES}${id}`, "get");

    return response.data;
};

const hideFileData = (fileName) => {
    const fileNameList = fileName.split(".");

    if (RESTRICT_EXTENSIONS.includes(fileNameList[fileNameList.length - 1])) {
        return true;
    }

    if (!fileNameList.includes(".")) {
        return true;
    }

    return false;
};

export const FileService = { getFileData, getFile, hideFileData };
