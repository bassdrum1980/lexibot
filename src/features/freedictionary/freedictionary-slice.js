/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import parser from './parser/parser';

export const fetchFreeDictionary = createAsyncThunk(
  '@@freedictionary/fetch-word',
  async (word, { extra }) => {
    const result = await extra.fetchFreeDictionary(word);
    return result;
  }
);

export const postCard = createAsyncThunk(
  '@@freedictionary/post-card',
  async (card, { extra }) => {
    const result = await extra.postCard(card);
    return result;
  }
);

const initialState = {
  word: null,
  rawData: null,
  meanings: [],
  currentDefinitionId: '',
  cardPosted: false,
};

const freedictionarySlice = createSlice({
  name: '@@freedictionary',
  initialState,
  reducers: {
    setCurrentDefinitionId: (state, action) => {
      state.currentDefinitionId = action.payload;
    },
    resetCurrentDefinitionId: (state) => {
      state.currentDefinitionId = '';
    },
    resetCardPosted: (state) => {
      state.cardPosted = false;
    },
  },
  extraReducers: {
    [fetchFreeDictionary.fulfilled]: (state, action) => {
      state.word = action.payload.id;
      state.rawData = action.payload.data;
      state.meanings = parser(action.payload.data);
    },
    [postCard.fulfilled]: (state) => {
      state.cardPosted = true;
    },
  },
});

export const freedictionaryReducer = freedictionarySlice.reducer;
export const {
  setCurrentDefinitionId,
  resetCurrentDefinitionId,
  resetCardPosted,
} = freedictionarySlice.actions;
export const selectDictionaryWord = (state) => state.search.word;
export const selectDictionaryRawData = (state) =>
  state.search.freedictionary.rawData;
export const selectDictionaryMeanings = (state) =>
  state.search.freedictionary.meanings;
export const selectDictionaryDefinition = (state, definitionId) => {
  const definitions = state.search.freedictionary.meanings.reduce(
    (defs, meaning) => defs.concat(meaning.definitions),
    []
  );

  return definitions.find((def) => def.id === definitionId);
};
export const selectDictonaryCurrentId = (state) =>
  state.search.freedictionary.currentDefinitionId;
export const selectCardPosted = (state) =>
  state.search.freedictionary.cardPosted;
