import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFreeDictionary = createAsyncThunk('@@freedictionary/fetch-word', async (word, { extra }) => {
  const result = await extra.fetchFreeDictionary({
    word,
  });
  return result;
});

const initialState = {
  word: null,
  data: null,
};

export const freedictionarySlice = createSlice({
  name: '@@freedictionary',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFreeDictionary.fulfilled]: (state, action) => {
      state.word = action.payload.word;
      state.data = action.payload.data;
    },
  },
});

export const freedictionaryReducer = freedictionarySlice.reducer;
export const selectWord = (state) => state.word;
export const selectData = (state) => state.data;
