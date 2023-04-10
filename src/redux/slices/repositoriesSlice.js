import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RepositoriesService } from "../../services";

const initialState = {
    repositories: [],
    isFetched: false,
};

export const getRepositories = createAsyncThunk(
    "repositories/getRepositories",
    async (thunkAPI) => {
        try {
            const repositories = await RepositoriesService.getRepositories();
            return repositories;
        } catch (e) {
            return thunkAPI.rejectWithValue();
        }
    },
);

const repositoriesSlice = createSlice({
    name: "repositories",
    initialState,
    reducers: {},
    extraReducers: {
        [getRepositories.fulfilled]: (state, action) => {
            state.repositories = [...action.payload];
            state.isFetched = true;
        },
        [getRepositories.rejected]: (state) => {
            state.repositories = [...state.repositories];
        },
    },
});

const { reducer } = repositoriesSlice;

export default reducer;
