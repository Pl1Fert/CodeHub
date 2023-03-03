import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../services";

export const register = createAsyncThunk("register", async ({ email, password }, thunkAPI) => {
    try {
        const response = await AuthService.register(email, password);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue();
    }
});
