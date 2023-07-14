import Car from './10-car';
/*
  EVCar - class EVCar
  brand: brand arg
  motor: motor arg
  color: color arg
  range: range arg

  descpription: Symbol.species returns base class for privacy reasons
*/
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
