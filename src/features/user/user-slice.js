import { createSlice } from '@reduxjs/toolkit';
import { postCard } from '../freedictionary/freedictionary-slice';
import { fetchUser, signIn } from './user-slice-actions';

const token = JSON.parse(localStorage.getItem('token'));

const initialState = {
  user: null,
  token,
};

const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      state.token = null;
      // localStorage.removeItem('token');
      // moved to listenerMiddleware
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [postCard.fulfilled]: (state) => {
      if (state.user?.totalCards) state.user.totalCards += 1;
    },
    [signIn.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      // localStorage.setItem('token', JSON.stringify(action.payload.token));
      // moved to listenerMiddleware
    },
  },
});

export const userReducer = userSlice.reducer;
export const { signOut } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectTotalCards = (state) => state.user.user?.totalCards || 0;
export const selectToken = (state) => state.user.token;
