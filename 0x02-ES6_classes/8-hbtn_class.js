/*
  HolbertonClass - a Holberton class
  sie: size arg
  loaction: location arg
  Symbol.toPrimitive converts Object to a primitive value
*/
export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('Size must be a number');
    if (typeof location !== 'string') throw new TypeError('Location must be a string');
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](arg) {
    if (arg === 'number') return this._size;
    if (arg === 'string') return this._location;
    return this._size;
  }
}
