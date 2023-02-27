import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        add: (state) => state
    }
})

const {actions, reducer} = authSlice;

export default reducer;

export const {add} = actions;