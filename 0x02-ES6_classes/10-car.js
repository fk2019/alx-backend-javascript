/*
  Car - class Car
  brand: brand arg
  motor: motor arg
  color: color arg
  Symbol.species - points to constructor value of a class allowing
  Car class to create new version of itself within the cloneCar method
*/
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const CloneCar = this.constructor[Symbol.species];
    return new CloneCar();
  }
}
