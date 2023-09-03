const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type === SUM', () => {
    it('sum if type is SUM', () => expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6));
  });
  describe('type === SUBTRACT', () => {
    it('subtract if type is SUBTRACT', () => expect(calculateNumber('SUBTRACT', 5.4, 3.5)).to.equal(1));
  });
  describe('type === DIVIDE', () => {
    it('divide if type is DIVIDE', () => expect(calculateNumber('DIVIDE', 8.4, 4.3)).to.equal(2));
    it('error if round b is 0', () => expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error'));
  });
});
