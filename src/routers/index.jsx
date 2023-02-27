import React from "react";
import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import { HomePage, SignInPage, ProfilePage } from "../pages";

export const MainRouter = () => {
    return (
        <Routes>
            <Route path={APP_ROUTES.HOME_PAGE} element={<HomePage />} />
            <Route path={APP_ROUTES.SIGN_IN} element={<SignInPage />} />
            <Route path={APP_ROUTES.PROFILE_PAGE} element={<ProfilePage />} />
        </Routes>
    );
};
