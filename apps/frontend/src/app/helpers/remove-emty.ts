export const removeEmptyFields = <T>(object: T): T => {
  for (const key in object) {
    if (object[key] === null || object[key] === undefined) {
      delete object[key];
    }
  }

  return object;
};
