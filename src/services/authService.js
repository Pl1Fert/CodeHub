import { axiosAPI } from "../api";
import { API_URLS, COOKIES } from "../constants";

import { CookieService } from "./cookieService";

const register = async (email, password, username) => {
    const response = await axiosAPI.sendRequest(API_URLS.REGISTER, "post", {
        email,
        password,
        username,
    });

    switch (response.status) {
        case 400:
            return response.data.email[0];
        case 201:
            return response.statusText;
        default:
            return "";
    }
};

const login = async (email, password) => {
    const response = await axiosAPI.sendRequest(API_URLS.LOGIN, "post", {
        email,
        password,
    });

    //TODO: mb make check on data detail and return it

    if (!response.detail) {
        localStorage.setItem("tokens", JSON.stringify(response));

        CookieService.setCookie(COOKIES.NAMES.REFRESH_TOKEN, response[COOKIES.NAMES.REFRESH_TOKEN]);
        CookieService.setCookie(COOKIES.NAMES.ACCESS_TOKEN, response[COOKIES.NAMES.ACCESS_TOKEN]);
    }
};

const logout = () => {
    localStorage.removeItem("tokens");
};

export const AuthService = {
    register,
    login,
    logout,
};
