export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new TypeError('sqft must be a number');
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }
}
