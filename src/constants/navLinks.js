import { APP_ROUTES } from "./appRoutes";

export const NAV_LINKS = [
    { id: 1, linkName: "Home", linkDest: `${APP_ROUTES.HOME}` },
    { id: 2, linkName: "Profile", linkDest: `${APP_ROUTES.HOME}${APP_ROUTES.PROFILE}` },
    { id: 3, linkName: "Repositories", linkDest: `${APP_ROUTES.HOME}${APP_ROUTES.REPOSITORIES}` },
];
