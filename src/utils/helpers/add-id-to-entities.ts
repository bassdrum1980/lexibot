import { nanoid } from '@reduxjs/toolkit';

export default function addIdToEntities(
  values: string[]
): { value: string; id: string }[] {
  // .filter here to filter out empty/undefined values
  return values.filter(Boolean).map((value) => ({
    value,
    id: nanoid(),
  }));
}
