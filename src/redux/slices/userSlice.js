import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UserService } from "../../services";

const initialState = {
    user: {
        id: null,
        email: "",
        username: "",
        img: "",
        isBlocked: false,
    },
    isFetched: false,
};

export const getUser = createAsyncThunk("user/getUser", async (thunkAPI) => {
    try {
        const data = await UserService.getUser();
        return data;
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
            state.user = { ...action.payload };
            state.isFetched = true;
        },
        [getUser.rejected]: (state) => {
            state.user = { ...state };
        },
    },
});

const { reducer } = userSlice;

export default reducer;
