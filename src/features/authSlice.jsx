import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
    },
    registerSuccess: (state) => {
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    isActive: (state,{payload}) => {
      state.loading = false;
      state.currentUser = payload;
    },
  },
});
export const {fetchStart,fetchFail,
    loginSuccess,logoutSuccess,
    registerSuccess,isActive} =authSlice.actions;
    export default authSlice.reducer;
