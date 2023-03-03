import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../services";

export const login = createAsyncThunk("login", async ({ email, password }, thunkAPI) => {
    try {
        const response = await AuthService.login(email, password);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue();
    }
});
