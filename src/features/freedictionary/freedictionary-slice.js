/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import parser from './parser';

export const fetchFreeDictionary = createAsyncThunk('@@freedictionary/fetch-word', async (word, { extra }) => {
  const result = await extra.fetchFreeDictionary({
    word,
  });
  return result;
});

const initialState = {
  word: null,
  rawData: null,
  meanings: [],
};

const freedictionarySlice = createSlice({
  name: '@@freedictionary',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFreeDictionary.fulfilled]: (state, action) => {
      state.word = action.payload.id;
      state.rawData = action.payload.data;
      state.meanings = parser(action.payload.data);
    },
  },
});

export const freedictionaryReducer = freedictionarySlice.reducer;
export const selectDictionaryWord = (state) => state.search.word;
export const selectDictionaryRawData = (state) => state.search.freedictionary.rawData;
export const selectDictionaryMeanings = (state) => state.search.freedictionary.meanings;
export const selectDictionaryDefinition = (state, definitionId) => {
  const definitions = state.search.freedictionary.meanings.reduce(
    (defs, meaning) => defs.concat(meaning.definitions),
    [],
  );

  return definitions.find((def) => def.id === definitionId);
};
