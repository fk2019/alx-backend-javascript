const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('sum if type is SUM', () => assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6));
  it('subract if type is SUBTRACT', () => assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4));
  it('divide if type is DIVIDE', () => assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2));
  it('error if round b is 0', () => assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error'));
});
