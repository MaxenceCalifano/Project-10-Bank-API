import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { serviceAPI } from '../../serviceAPI';

const api = new serviceAPI()

const initialState = {
    userStatus: "offline",
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
        const response = await api.userProfile()
        
        return response.body
    }
  )
export const updateProfile = createAsyncThunk(
    'user/updateProfile',
    async (data) => {
        const response = await api.updateProfile(data.firstName, data.lastName)

        return response.body
    }
  )

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signOut: (state) => {
            state.userStatus = "offline";
            state.userData = "";
            localStorage.removeItem('user')
        }
    },
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
                state.userStatus = 'online' 
              })
              // Update profile
              .addCase(updateProfile.fulfilled, (state,action) => {
                state.userData.firstName = action.payload.firstName
                state.userData.lastName = action.payload.lastName
              })
          },
    
})

export const {signOut} = userSlice.actions;
export default userSlice.reducer;