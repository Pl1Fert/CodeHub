import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { AuthService } from "../../services";

const tokens = JSON.parse(localStorage.getItem("tokens"));

export const register = createAsyncThunk("auth/register", async ({ email, password }, thunkAPI) => {
    try {
        const response = await AuthService.register(email, password);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue();
    }
});

export const login = createAsyncThunk("auth/login", async ({ email, password }, thunkAPI) => {
    try {
        const tokens = await AuthService.login(email, password);
        return { tokens };
    } catch (e) {
        return thunkAPI.rejectWithValue();
    }
});

const initialState = tokens ? { isLoggedIn: true, tokens } : { isLoggedIn: false, tokens: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            AuthService.logout();
            state.isLoggedIn = false;
            state.tokens = null;
        },
    },
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

export const { reducer, actions } = authSlice;

export default reducer;

export const { logout } = actions;
