import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UserService } from "../../services/userService";

const initialState = {
    id: null,
    email: "",
    username: "",
    img: "",
    isBlocked: false,
};

export const getUser = createAsyncThunk("user/getUser", async (thunkAPI) => {
    try {
        const response = await UserService.getUser();
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue();
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state = {
                ...action.payload,
            };
        },
        [getUser.rejected]: (state) => {
            state = { ...state };
        },
    },
});

const { reducer } = userSlice;

export default reducer;
