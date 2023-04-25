import { createAsyncThunk } from '@reduxjs/toolkit';
import makeErrorSerializable from 'helpers/make-error-serializable';

// get user profile
export const fetchUser = createAsyncThunk(
  '@@user/fetch-user',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const result = await extra.profileApi.getUserProfile({
        token: getState().user.token,
      });
      return result;
    } catch (error) {
      return rejectWithValue(makeErrorSerializable(error));
    }
  }
);

export const activateAccount = createAsyncThunk(
  '@@user/activate-account',
  async ({ token }, { extra, rejectWithValue }) => {
    try {
      const result = await extra.authApi.postActivateAccount({
        token,
      });
      return result;
    } catch (error) {
      return rejectWithValue(makeErrorSerializable(error));
    }
  }
);

export const signUp = createAsyncThunk(
  '@@user/sign-up',
  async ({ firstName, email, password }, { extra, rejectWithValue }) => {
    try {
      const result = await extra.authApi.postSignUp({
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

export const signIn = createAsyncThunk(
  '@@user/sign-in',
  async ({ email, password }, { extra, rejectWithValue }) => {
    try {
      const result = await extra.authApi.postSignIn({
        email,
        password,
      });
      return result;
    } catch (error) {
      return rejectWithValue(makeErrorSerializable(error));
    }
  }
);

// TODO: we used to calculate timezone offset and send it to the server
// together with the user id. It allowed the server to calculate the
// user's local time (since the user has to study before 3am (local time) next day).
// There is no server support for this feature yet, so it is commented out.
// import { calculateOffset } from './calculate-offset';
//
// export const fetchUser = createAsyncThunk(
//   '@@user/fetch-user',
//   async (tgid, { extra }) => {
//     const result = await extra.jsonServerApi.fetchUserAttributes({
//       tgid,
//       timezone: calculateOffset(),
//     });
//     return result;
//   }
// );
