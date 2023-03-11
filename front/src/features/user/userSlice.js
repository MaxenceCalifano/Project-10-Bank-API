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
        const response = await api.userProfile()
        console.log("🚀 ~ file: userSlice.js:21 ~ response:", response)
        
        return response.body
            /* return api.userProfile(user)
               .then(res => console.log(res)) */
    }
  )
export const updateProfile = createAsyncThunk(
    'user/profile',
    async (data) => {
        console.log("data",data)
        const response = await api.updateProfile(data.firstName, data.lastName)

        return response.body
            /* return api.userProfile(user)
               .then(res => console.log(res)) */
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
              })
              .addCase(userProfile.rejected, (state) => {
                state.status = 'error'
              })
          },
    
})

export const {signOut} = userSlice.actions;
export default userSlice.reducer;