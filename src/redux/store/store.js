import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../slices/authSlice";
import modeSlice from "../slices/modeSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        mode: modeSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
});
