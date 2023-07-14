/*
  Airport - airport class
  name: name argument
  code: code argument
  Symbol.toStringTag - implement custom typeof operator for Object#toString()
 */
export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
