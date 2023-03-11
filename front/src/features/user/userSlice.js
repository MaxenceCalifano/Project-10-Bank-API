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
    async (user) => {
        const response = await api.userProfile(user)
        console.log("🚀 ~ file: userSlice.js:21 ~ response:", response)
        
        return response.body
            /* return api.userProfile(user)
               .then(res => console.log(res)) */
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
              .addCase(userProfile.fulfilled,(state, action) => {
                state.userData = action.payload
              })
              .addCase(userProfile.rejected, (state) => {
                state.status = 'error'
              })
          },
    
})

export default userSlice.reducer;