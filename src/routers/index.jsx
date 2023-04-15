import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { APP_ROUTES } from "../constants";
import {
    HomePage,
    LoginPage,
    ProfilePage,
    NotFoundPage,
    ErrorPage,
    RepositoriesPage,
    RepositoryPage,
} from "../pages";
import { RequireAuth } from "../hoc";
import { Layout } from "../components";
import { createRepositoryAction } from "../actions";
import { homePageLoader, profilePageLoader, repositoriesPageLoader } from "../loaders";

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={APP_ROUTES.HOME} errorElement={<ErrorPage />}>
            <Route element={<RequireAuth />}>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} loader={homePageLoader} />
                    <Route
                        path={APP_ROUTES.PROFILE}
                        element={<ProfilePage />}
                        loader={profilePageLoader}></Route>
                    <Route
                        path={APP_ROUTES.REPOSITORIES}
                        element={<RepositoriesPage />}
                        loader={repositoriesPageLoader}
                        action={createRepositoryAction}
                    />
                    <Route path={APP_ROUTES.REPOSITORY} element={<RepositoryPage />} />
                </Route>
            </Route>
            <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
    )
);
