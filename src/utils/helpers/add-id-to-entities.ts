import { nanoid } from '@reduxjs/toolkit';
import { Entity } from 'types/free-dictionary';

export default function addIdToEntities(values: any[]): Entity[] {
  // .filter here to filter out empty/undefined values
  return values.filter(Boolean).map((value) => ({
    value,
    id: nanoid(),
  }));
}
