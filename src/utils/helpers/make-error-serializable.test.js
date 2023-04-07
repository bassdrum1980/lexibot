import makeErrorSerializable from './make-error-serializable';
import { BaseError } from 'errors/index';

describe('makeErrorSerializable', () => {
  const type = 'error';
  const title = 'Word Not Found';
  const message = 'Error message';
  const name = 'BaseError';

  it('should return an object with the same properties as the error', () => {
    const error = new BaseError(type, title, message, name);
    const serializedError = makeErrorSerializable(error);
    expect(serializedError).toBeInstanceOf(Object);
    expect(serializedError.type).toEqual(type);
    expect(serializedError.title).toEqual(title);
    expect(serializedError.message).toEqual(message);
    expect(serializedError.name).toEqual(name);
  });
});
