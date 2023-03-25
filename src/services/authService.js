import axios from "axios";

import { API_URLS } from "../constants";

const register = (email, password, username) => {
    return axios.post(API_URLS.REGISTER, {
        email,
        password,
        username,
    });
};

const login = async (email, password) => {
    const response = await axios
        .post(API_URLS.LOGIN, {
            email,
            password,
        });
        
    if (!response.data.detail) {
        localStorage.setItem("tokens", JSON.stringify(response.data));
    }

    return response.data;
};

const logout = () => {
    localStorage.removeItem("tokens");
};

export const AuthService = {
    register,
    login,
    logout,
};
