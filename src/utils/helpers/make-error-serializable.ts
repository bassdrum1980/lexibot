export default function makeErrorSerializable(
  error: Error
): Record<string, any> {
  const serializedError: Record<string, any> = {};
  Object.getOwnPropertyNames(error).forEach((key) => {
    serializedError[key] = error[key as keyof Error];
  });
  return serializedError;
}
