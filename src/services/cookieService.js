import Cookies from "universal-cookie";

import { COOKIES } from "../constants";

const cookies = new Cookies();

const setCookie = (cookieName, cookieValue) => {
    cookies.set(cookieName, cookieValue, { path: COOKIES.PATH });
};

const removeCookie = (cookieName) => {
    //cookies.remove(cookieName, { path: COOKIES.PATH });
    cookies.set(cookieName, "", { path: COOKIES.PATH });
};

const getCookie = (cookieName) => {
    return cookies.get(cookieName, { path: COOKIES.PATH });
};

export const CookieService = {
    setCookie,
    removeCookie,
    getCookie,
};
