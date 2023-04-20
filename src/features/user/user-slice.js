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
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      const [user] = action.payload;
      state.user = user;
    },
    [postCard.fulfilled]: (state) => {
      if (state.user?.totalCards) state.user.totalCards += 1;
    },
    [signIn.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
  },
});

export const userReducer = userSlice.reducer;
export const selectUser = (state) => state.user.user;
export const selectTotalCards = (state) => state.user.user?.totalCards || 0;
export const selectToken = (state) => state.user.token;
