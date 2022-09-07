import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFreeDictionary = createAsyncThunk('@@freedictionary/fetch-word', async (word, { extra }) => {
  const result = await extra.fetchFreeDictionary({
    word,
  });
  return result;
});

const initialState = {
  word: null,
  rawData: null,
};

const freedictionarySlice = createSlice({
  name: '@@freedictionary',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFreeDictionary.fulfilled]: (state, action) => {
      state.word = action.payload.id;
      state.rawData = action.payload.data;
    },
  },
});

export const freedictionaryReducer = freedictionarySlice.reducer;
export const selectDictionaryWord = (state) => state.word;
export const selectDictionaryRawData = (state) => state.rawData;
