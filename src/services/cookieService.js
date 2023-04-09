import Cookies from "universal-cookie";

import { COOKIES } from "../constants";

const cookies = new Cookies();

const setCookie = (cookieName, cookieValue) => {
    cookies.set(cookieName, cookieValue, { path: COOKIES.PATH });
};

export const CookieService = {
    setCookie,
};
