import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { APP_ROUTES } from "../constants";
import { HomePage, LoginPage, ProfilePage, NotFoundPage, ErrorPage } from "../pages";
import { RequireAuth } from "../hoc/requireAuth";
import { repositoriesLoader } from "../loaders";
import { Layout } from "../components/layout";

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={APP_ROUTES.HOME_PAGE} errorElement={<ErrorPage />}>
            {/* TODO: mb incorrect order */}
            <Route element={<RequireAuth />}>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} loader={repositoriesLoader} />
                    <Route path={APP_ROUTES.PROFILE_PAGE} element={<ProfilePage />} />
                </Route>
            </Route>
            <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
    )
);
