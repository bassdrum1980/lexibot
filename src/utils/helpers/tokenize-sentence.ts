import { nanoid } from '@reduxjs/toolkit';
import { Token } from 'types/free-dictionary';

export default function tokenizeSentence(sentence: string): Token[] {
  return sentence
    .split(' ')
    .filter(Boolean) // remove empty strings
    .map((token) => ({
      value: token,
      isActive: true,
      id: nanoid(),
    }));
}
