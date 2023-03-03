import axios from "axios";

import { API_URLS } from "../constants";

const getUser = () => {
    return axios.get(API_URLS.USER);
};

export const UserService = {
    getUser,
};
