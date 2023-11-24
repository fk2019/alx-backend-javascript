const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const { spy } = sinon.spy;

console.log('ff');
describe('sendPaymentRequestToApi', () => {
  it('should run sendPaymentRequestToApi function', () => {
    const calcSpy = sinon.spy(utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    const apiResp = sendPaymentRequestToApi(100, 20);

    expect(calcSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(apiResp);

    calcSpy.restore();
    consoleSpy.restore();
  });
});
