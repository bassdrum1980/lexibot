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
  entries: [],
};

const freedictionarySlice = createSlice({
  name: '@@freedictionary',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFreeDictionary.fulfilled]: (state, action) => {
      state.word = action.payload.id;
      state.rawData = action.payload.data;
      // TODO: parse raw results before adding
      state.entries = action.payload.data;
    },
  },
});

export const freedictionaryReducer = freedictionarySlice.reducer;
export const selectDictionaryWord = (state) => state.search.word;
export const selectDictionaryRawData = (state) => state.search.freedictionary.rawData;
export const selectDictionaryEntries = (state) => state.search.freedictionary.entries;
