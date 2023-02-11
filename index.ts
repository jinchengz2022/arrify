export const arrify = (value: any): any[] => {
  if (value === null || typeof value === 'undefined') {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  // const arr = ['lucy', 'judy', 'mike'];
  // const indexMap = new Map(arr.map((k ,v) => [k,v]));
  // 含有Iterator接口的数据结构 value[Symbol.iterator]类型为function
  if (typeof value[Symbol.iterator] === 'function') {
    return [...value];
  }

  if (typeof value === 'string') {
    return [value];
  }

  return value;
}