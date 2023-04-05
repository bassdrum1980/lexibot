import makeErrorSerializable from './make-error-serializable';

describe('makeErrorSerializable', () => {
  it('should return an object with the same properties as the error', () => {
    const error = new Error('error message');
    const serializedError = makeErrorSerializable(error);
    expect(serializedError).toEqual({
      message: 'error message',
      name: 'Error',
    });
  });
});
