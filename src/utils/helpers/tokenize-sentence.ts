import { nanoid } from '@reduxjs/toolkit';

interface Token {
  value: string;
  isActive: boolean;
  id: string;
}

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
