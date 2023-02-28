import { APP_ROUTES } from "../constants";
import { HomePage, LoginPage, ProfilePage, NotFoundPage } from "../pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        /*TODO: <Route exact path="/home" render={(props) => (
                    isUserLoggedIn() ? (
                        <Home {...props} />
                    ) : (
                        <Redirect to="/login"/>
                    )
                    )}/>
        */
        <Route>
            <Route path={APP_ROUTES.HOME_PAGE} element={<HomePage />} />
            <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={APP_ROUTES.PROFILE_PAGE} element={<ProfilePage />} />
            <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
    )
);
