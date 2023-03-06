import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: "offline"
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer;