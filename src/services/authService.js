import axios from "axios";
import Cookies from "universal-cookie";

import { API_URLS } from "../constants";

const register = (email, password, username) => {
    return axios.post(API_URLS.REGISTER, {
        email,
        password,
        username,
    });
};

const login = async (email, password) => {
    const response = await axios.post(API_URLS.LOGIN, {
        email,
        password,
    });

    if (!response.data.detail) {
        localStorage.setItem("tokens", JSON.stringify(response.data));

        const cookies = new Cookies();

        cookies.set("refresh-token", response.data["refresh-token"], { path: "/" });
        cookies.set("access-token", response.data["access-token"], { path: "/" });
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
