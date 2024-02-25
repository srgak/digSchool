export const removeEmptyFields = <T>(object: T): T => {
  
  for(let key in object) {
    if(object[key] === null || object[key] === undefined) {
      delete object[key];
    }
  }

  return object;
}