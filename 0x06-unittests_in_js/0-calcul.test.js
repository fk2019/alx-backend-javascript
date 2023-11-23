const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('0-calcul', function() {
  it('check for a tenths > 5', () => assert.strictEqual(
    calculateNumber(1.7, 0.5), 3));
  it('check for a tenths < 5', () => assert.strictEqual(
    calculateNumber(1.2, 0.5), 2));
  it('check for a tenths == 5', () => assert.strictEqual(
    calculateNumber(1.5, 1.5), 4));
  it('check for b tenths > 5', () => assert.strictEqual(
    calculateNumber(1.5, 1.8), 4));
  it('check for b tenths < 5', () => assert.strictEqual(
    calculateNumber(1.5, 1.3), 3));
  it('check for b tenths == 5', () => assert.strictEqual(
    calculateNumber(1.5, 1.5), 4));
  it('check for b == 0', () => assert.strictEqual(
    calculateNumber(1.5, 0), 2));
  it('check for -b tenths < 5', () => assert.strictEqual(
    calculateNumber(1.5, -1.3), 1));
  it('check for -b tenths > 5', () => assert.strictEqual(
    calculateNumber(1.5, -1.5), 1));
  it('check for -b tenths == 5', () => assert.strictEqual(
    calculateNumber(1.5, -1.5), 1));
  it('check for -a tenths < 5 and -b tenths == 5', () => assert.strictEqual(
    calculateNumber(-1.3, -1.5), -2));
  it('check for -a tenths > 5 and -b tenths == 5', () => assert.strictEqual(
    calculateNumber(-1.8, -1.5), -3));
  it('check for -a tenths == 5 and -b tenths == 5', () => assert.strictEqual(
    calculateNumber(-1.5, -1.5), -2));
  it('check for -a tenths == 5 and -b tenths < 5', () => assert.strictEqual(
    calculateNumber(-1.5, -1.3), -2));
  it('check for -a tenths == 5 and -b tenths > 5', () => assert.strictEqual(
    calculateNumber(-1.5, -1.8), -3));
  it('check for -a tenths == 5 and -b tenths == 0', () => assert.strictEqual(
    calculateNumber(-1.5, 0), -1));
});
