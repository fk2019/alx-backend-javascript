import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') throw new TypeError('Floors must be a number');
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') throw new TypeError('Sqft must be a number');
    this._sqft = sqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') throw new TypeError('Floors must be a number');
    this._floors = flooors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
