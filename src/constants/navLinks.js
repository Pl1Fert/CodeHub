import { APP_ROUTES } from "./appRoutes";

export const NAV_LINKS = [
    { id: 1, linkName: "home", linkDest: `${APP_ROUTES.HOME}` },
    { id: 2, linkName: "profile", linkDest: `/${APP_ROUTES.PROFILE}` },
    { id: 3, linkName: "repositories", linkDest: `/${APP_ROUTES.REPOSITORIES}` },
];
