export const arrify = (value: any): any[] => {
  if(value === null || typeof value === 'undefined') {
    return [];
  }

  if(Array.isArray(value)) {
    return value;
  }

  // value = {
  //   [Symbol.iterator]: function () {
  //     ...
  //   }
  // }
  if(typeof value[Symbol.iterator] === 'function') {
    return [...value];
  }

  if(typeof value === 'string') {
    return [value];
  }

  return value;
}