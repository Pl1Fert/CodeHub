import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../slices/authSlice";
import modeSlice from "../slices/modeSlice";
import userSlice from "../slices/userSlice";
import repositoriesSlice from "../slices/repositoriesSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        mode: modeSlice,
        user: userSlice,
        repositories: repositoriesSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
});
