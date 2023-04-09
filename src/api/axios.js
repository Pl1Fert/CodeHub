import axios from "axios";
axios.defaults.withCredentials = true;

const sendRequest = async (url, method, data) => {
    return axios({ method, url, data })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
};

export const axiosAPI = {
    sendRequest,
};
