import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
};

const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        changeMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

const { actions, reducer } = modeSlice;

export default reducer;

export const { changeMode } = actions;
