import { createSlice } from "@reduxjs/toolkit";

import { login, register } from "../../api";

const tokens = JSON.parse(localStorage.getItem("tokens"));

const initialState = tokens ? { isLoggedIn: true, tokens } : { isLoggedIn: false, tokens: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.tokens = action.payload.tokens;
        },
        [login.rejected]: (state) => {
            state.isLoggedIn = false;
            state.tokens = null;
        },
        [register.fulfilled]: (state) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state) => {
            state.isLoggedIn = false;
        },
    },
});

const { reducer } = authSlice;

export default reducer;
