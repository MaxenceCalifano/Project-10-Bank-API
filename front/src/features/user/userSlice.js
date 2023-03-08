import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { serviceAPI } from '../../serviceAPI';

const api = new serviceAPI()

const initialState = {
    userStatus: "offline"
};

export const signIn = createAsyncThunk(
    'user/signIn',
    async (credentials) => {
        api.signIn(credentials.email, credentials.password)
    }
  )

/*   export const signIn = (credentials) => (dispatch) => {
    dispatch(api.signIn(credentials.email, credentials.password))
  } */

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /* extraReducers: (builder) => {
            builder
              .addCase(signIn.pending, (state) => {
                state.status = 'loading';
              })
              .addCase(signIn.fulfilled, (state, action) => {
               // state.status = 'idle';
                //state.value += action.payload;
                state.status = 'online';
                state.user = "test"
              });
          } */},
          extraReducers: (builder) => {
            builder
              .addCase(signIn.pending, (state) => {
                state.status = 'loading';
              })
              .addCase(signIn.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userStatus = 'online'
              })
              .addCase(signIn.rejected, (state) => {
                state.status = 'error'
              })
          },
    
})

export default userSlice.reducer;