import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { AuthService } from "../../services";

const tokens =
    localStorage.getItem("tokens") !== undefined
        ? JSON.parse(localStorage.getItem("tokens"))
        : null;

export const register = createAsyncThunk(
    "auth/register",
    async ({ email, password, username }, thunkAPI) => {
        try {
            const data = await AuthService.register(email, password, username);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue();
        }
    },
);

export const login = createAsyncThunk("auth/login", async ({ email, password }, thunkAPI) => {
    try {
        await AuthService.login(email, password);
    } catch (e) {
        return thunkAPI.rejectWithValue();
    }
});

const initialState = tokens
    ? { isLoggedIn: true, message: "" }
    : { isLoggedIn: false, message: "" };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            AuthService.logout();
            state.isLoggedIn = false;
        },
    },
    extraReducers: {
        [login.fulfilled]: (state) => {
            state.isLoggedIn = true;
        },
        [login.rejected]: (state) => {
            state.isLoggedIn = false;
        },
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.message = action.payload;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.message = action.payload;
        },
    },
});

export const { reducer, actions } = authSlice;

export default reducer;

export const { logout } = actions;
