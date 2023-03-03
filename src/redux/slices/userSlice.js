import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    email: "",
    nickname: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

const { reducer } = userSlice;

export default reducer;
