/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  loading: 'idle', // loading, idle
  cardPosted: false,
  userSignedUp: false,
  userActivated: false,
  userSignedOut: false,
  userSignedIn: false,
  invalidToken: false,
  destination: null,
};

const loadingSlice = createSlice({
  name: '@@loading',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    resetCardPosted: (state) => {
      state.cardPosted = false;
    },
    resetUserSignedUp: (state) => {
      state.userSignedUp = false;
    },
    resetUserActivated: (state) => {
      state.userActivated = false;
    },
    resetUserSignedOut: (state) => {
      state.userSignedOut = false;
    },
    resetUserSignedIn: (state) => {
      state.userSignedIn = false;
    },
    resetInvalidToken: (state) => {
      state.invalidToken = false;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    resetDestination: (state) => {
      state.destination = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/pending'),
      (state) => {
        state.loading = 'loading';
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('/rejected'),
      (state, action) => {
        state.error = action.payload;
        state.loading = 'idle';
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('/fulfilled'),
      (state) => {
        state.loading = 'idle';
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('post-card/fulfilled'),
      (state) => {
        state.cardPosted = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('setAddOneMore'),
      (state) => {
        state.cardPosted = false;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('sign-up/fulfilled'),
      (state) => {
        state.userSignedUp = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('sign-in/fulfilled'),
      (state) => {
        state.userSignedIn = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('signOut'),
      (state) => {
        state.userSignedOut = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('activate-account/fulfilled'),
      (state) => {
        state.userActivated = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('fetch-user/rejected'),
      (state) => {
        state.invalidToken = true;
      }
    );
  },
});

export const loadingReducer = loadingSlice.reducer;
export const {
  resetError,
  resetCardPosted,
  resetUserSignedUp,
  resetUserActivated,
  resetUserSignedOut,
  resetUserSignedIn,
  resetInvalidToken,
  setDestination,
  resetDestination,
} = loadingSlice.actions;
export const selectError = (state) => state.loading.error;
export const selectLoading = (state) => state.loading.loading;
export const selectCardPosted = (state) => state.loading.cardPosted;
export const selectUserSignedUp = (state) => state.loading.userSignedUp;
export const selectUserActivated = (state) => state.loading.userActivated;
export const selectUserSignedOut = (state) => state.loading.userSignedOut;
export const selectUserSignedIn = (state) => state.loading.userSignedIn;
export const selectInvalidToken = (state) => state.loading.invalidToken;
export const selectDestination = (state) => state.loading.destination;
