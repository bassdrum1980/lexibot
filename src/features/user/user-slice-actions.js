import { createAsyncThunk } from '@reduxjs/toolkit';
import { calculateOffset } from './calculate-offset';
import makeErrorSerializable from 'helpers/make-error-serializable';

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
