const chai = require('chai');

const { expect } = chai;

const calculateNumber = require('./1-calcul');

describe('1-calcul', function() {
  describe('sum type', () => {
    it('add when a tenths > 5', () => expect(calculateNumber(
      'SUM', 1.7, 0.5)).to.equal(3));
    it('add when a tenths == 5', () => expect(calculateNumber('SUM', 1.5, 1.5)).to.equal(4));
    it('add when b tenths > 5', () => expect(calculateNumber('SUM', 1.5, 1.8)).to.equal(4));
    it('add when -a tenths == 5 and -b tenths == 0', () => expect(
      calculateNumber('SUM', -1.5, 0)).to.equal(-1));
  });
  describe('subtract type', () => {
    it('subtract when -a tenths == 5 and -b tenths < 5', () => expect(calculateNumber('SUBTRACT', -1.5, -1.3)).to.equal(0));
    it('subtract when -a tenths == 5 and -b tenths > 5', () => expect(calculateNumber('SUBTRACT', -1.5, -1.8)).to.equal(1));
    it('subtract when -a tenths == 5 and -b tenths == 0', () => expect(calculateNumber('SUBTRACT', -1.5, 0)).to.equal(-1));
  });
  describe('divide type', () => {
    it('divide two rounded integers', () => expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2));
    it('divide by 0', () => expect(calculateNumber('DIVIDE', 1.4, 0.3)).to.equal('Error'));
    it('divide -a by -b rounded integers', () => expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25));
    it('divide -a by b rounded integers', () => expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2));
    it('divide a by -b rounded integers', () => expect(calculateNumber('DIVIDE', 1.4, -4.5)).to.equal(-0.25));
  });
});
