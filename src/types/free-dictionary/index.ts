export type RawLexicalEntry = {
  word: string;
  phonetic: string;
  phonetics: RawPhonetic[];
  meanings: RawMeaning[];
  license: License;
  sourceUrls: string[];
};

export type RawMeaning = {
  partOfSpeech: string;
  definitions: RawDefinition[];
  synonyms: string[];
  antonyms: string[];
};

export type Meaning = {
  definitions: Definition[];
  partOfSpeech: string;
  id: string;
};

export type RawDefinition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
};

export type Definition = {
  word: string;
  phoneticsText: string;
  phoneticsAudio: string;
  partOfSpeech: string;
  definition: string;
  synonyms: Entity[];
  antonyms: Entity[];
  examples: Entity[];
  id: string;
};

export type RawPhonetic = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
};

export type License = {
  name: string;
  url: string;
};

export type Entity = {
  value: any;
  id: string;
};

export type Token = {
  value: string;
  isActive: boolean;
  id: string;
};
