export const arrify = (value) => {
  if (value === null || typeof value === 'undefined') {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  // String数据类型含有Iterator接口判断时得在typeof value[Symbol.iterator] === 'function'前否则会被结构
  // arrify('123') ---> ['1', '2', '3']
  if (typeof value === 'string') {
    return [value];
  }

  // const arr = ['lucy', 'judy', 'mike'];
  // const indexMap = new Map(arr.map((k ,v) => [k,v]));
  // 含有Iterator接口的数据结构 value[Symbol.iterator]类型为function
  if (typeof value[Symbol.iterator] === 'function') {
    return [...value];
  }

  return [value];
}