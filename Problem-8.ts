const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean =>
  keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
