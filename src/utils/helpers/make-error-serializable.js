export default function makeErrorSerializable(error) {
  const serializedError = {};
  Object.getOwnPropertyNames(error).forEach((key) => {
    serializedError[key] = error[key];
  });
  return serializedError;
}
