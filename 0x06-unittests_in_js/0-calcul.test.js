const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('sum two integers', () => assert.strictEqual(calculateNumber(1, 3), 4));
  it('sum a integer and b floating', () => assert.strictEqual(calculateNumber(1, 3.7), 5));
  it('sum round down a and round up b', () => assert.strictEqual(calculateNumber(1.2, 3.7), 5));
  it('sum round up a and b', () => assert.strictEqual(calculateNumber(1.5, 3.7), 6));
  it('sum round down a and b', () => assert.strictEqual(calculateNumber(1.2, 3.4), 4));
  it('sum round up a and round down b', () => assert.strictEqual(calculateNumber(1.5, 3.4), 5));
  it('sum round down negative a and integer b', () => assert.strictEqual(calculateNumber(-1.5, 3), 2));
  it('sum round up negatives a and b', () => assert.strictEqual(calculateNumber(-1.6, -3.6), -6));
  it('sum round down negatives a and b', () => assert.strictEqual(calculateNumber(-1.5, -3.3), -4));
  it('sum round up negative a and round down negative b', () => assert.strictEqual(calculateNumber(-1.7, -3.5), -5));
});
