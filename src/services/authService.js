import axios from "axios";

import { API_URLS } from "../constants";

const register = (email, password) => {
    return axios.post(
        API_URLS.REGISTER,
        {
            email,
            password,
        },
        //TODO: mb not needed
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

const login = (email, password) => {
    return axios
        .post(API_URLS.LOGIN, {
            email,
            password,
        })
        .then((response) => {
            if (!response.data.detail) {
                localStorage.setItem("tokens", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("tokens");
};

export const AuthService = {
    register,
    login,
    logout,
};
