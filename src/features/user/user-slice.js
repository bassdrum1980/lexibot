// https://github.com/christofferbergj/react-redux-toolkit-example/blob/master/src/features/users/usersSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { calculateOffset } from './calculate-offset';
import { postCard } from '../freedictionary/freedictionary-slice';
import makeErrorSerializable from 'helpers/make-error-serializable';

const token = JSON.parse(localStorage.getItem('token'));

export const signUp = createAsyncThunk(
  '@@user/sign-up',
  async ({ firstName, email, password }, { extra, rejectWithValue }) => {
    try {
      const result = await extra.authApi.signUp({
        firstName,
        email,
        password,
      });
      return result;
    } catch (error) {
      return rejectWithValue(makeErrorSerializable(error));
    }
  }
);

export const fetchUser = createAsyncThunk(
  '@@user/fetch-user',
  async (tgid, { extra }) => {
    const result = await extra.jsonServerApi.fetchUserAttributes({
      tgid,
      timezone: calculateOffset(),
    });
    return result;
  }
);

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
  },
});

export const userReducer = userSlice.reducer;
export const selectUser = (state) => state.user.user;
export const selectTotalCards = (state) => state.user.user?.totalCards || 0;
export const selectToken = (state) => state.user.token;
