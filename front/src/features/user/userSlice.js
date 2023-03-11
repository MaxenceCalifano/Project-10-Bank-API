import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { serviceAPI } from '../../serviceAPI';

const api = new serviceAPI()

const initialState = {
    userStatus: "offline"
};

export const signIn = createAsyncThunk(
    'user/signIn',
    async (credentials) => {
            return api.signIn(credentials.email, credentials.password)
                .then(res => localStorage.setItem('user', res.body.token))
    }
  )
export const userProfile = createAsyncThunk(
    'user/profile',
    async () => {
            return api.userProfile()
               .then(res => console.log(res))
              /*  .catch(err => {
                return rejectWithValue(err)
               }) */
    }
  )

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
          extraReducers: (builder) => {
            builder
            //Sign in
              .addCase(signIn.pending, (state) => {
                state.status = 'loading';
              })
              .addCase(signIn.fulfilled, (state) => {
                    state.status = 'idle';
                    state.userStatus = 'online' 
              })
              .addCase(signIn.rejected, (state) => {
                state.status = 'error'
              })
              //User profile
              .addCase(userProfile.fulfilled,(state) => {
                state.name = "test"
              })
              .addCase(userProfile.rejected, (state) => {
                state.status = 'error'
              })
          },
    
})

export default userSlice.reducer;