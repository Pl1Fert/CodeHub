import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
});
