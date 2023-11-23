const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('1-calcul', function() {
  describe('sum type', () => {
    it('add when a tenths > 5', () => assert.strictEqual(
      calculateNumber('SUM', 1.7, 0.5), 3));
    it('add when a tenths == 5', () => assert.strictEqual(
      calculateNumber('SUM', 1.5, 1.5), 4));
    it('add when b tenths > 5', () => assert.strictEqual(
      calculateNumber('SUM', 1.5, 1.8), 4));
    it('add when b tenths < 5', () => assert.strictEqual(
      calculateNumber('SUM', 1.5, 1.3), 3));
    it('add when b tenths == 5', () => assert.strictEqual(
      calculateNumber('SUM', 1.5, 1.5), 4));
    it('add when b == 0', () => assert.strictEqual(
      calculateNumber('SUM', 1.5, 0), 2));
    it('add when -b tenths < 5', () => assert.strictEqual(
      calculateNumber('SUM', 1.5, -1.3), 1));
    it('add when -b tenths > 5', () => assert.strictEqual(
      calculateNumber('SUM', 1.5, -1.5), 1));
    it('add when -b tenths == 5', () => assert.strictEqual(
      calculateNumber('SUM', 1.5, -1.5), 1));
    it('add when -a tenths < 5 and -b tenths == 5', () => assert.strictEqual(
      calculateNumber('SUM', -1.3, -1.5), -2));
    it('add when -a tenths > 5 and -b tenths == 5', () => assert.strictEqual(
      calculateNumber('SUM', -1.8, -1.5), -3));
    it('add when -a tenths == 5 and -b tenths == 5', () => assert.strictEqual(
      calculateNumber('SUM', -1.5, -1.5), -2));
    it('add when -a tenths == 5 and -b tenths < 5', () => assert.strictEqual(
      calculateNumber('SUM', -1.5, -1.3), -2));
    it('add when -a tenths == 5 and -b tenths > 5', () => assert.strictEqual(
      calculateNumber('SUM', -1.5, -1.8), -3));
    it('add when -a tenths == 5 and -b tenths == 0', () => assert.strictEqual(
      calculateNumber('SUM', -1.5, 0), -1));
  });
  describe('subtract type', () => {
    it('subtract when -a tenths == 5 and -b tenths < 5', () => assert.strictEqual(
      calculateNumber('SUBTRACT', -1.5, -1.3), 0));
    it('subtract when -a tenths == 5 and -b tenths > 5', () => assert.strictEqual(
      calculateNumber('SUBTRACT', -1.5, -1.8), 1));
    it('subtract when -a tenths == 5 and -b tenths == 0', () => assert.strictEqual(
      calculateNumber('SUBTRACT', -1.5, 0), -1));
    it('subtract when -a tenths == 5 and -b tenths == 0', () => assert.strictEqual(
      calculateNumber('SUBTRACT', -1.5, 0), -1));
  });
  describe('divide type', () => {
    it('divide two rounded integers', () => calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    it('divide by 0', () => calculateNumber('DIVIDE', 1.4, 0.3), 'Error');
    it('divide -a by -b rounded integers', () => calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    it('divide -a by b rounded integers', () => calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
  });
  it('divide a by -b rounded integers', () => calculateNumber('DIVIDE', 1.4, -4.5), -0.25);

});
