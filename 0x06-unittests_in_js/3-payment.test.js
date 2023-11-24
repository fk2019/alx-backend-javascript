const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const { spy } = sinon.spy;

describe('sendPaymentRequestToApi', () => {
  it('should call sendPaymentRequestToApi', () => {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
    consoleSpy.restore();
  });
  it('should be called only once', () => {
    const calcSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calcSpy.callCount).to.equal(1);
    calcSpy.restore();
  });
  it('should be called once with exactly SUM, 100, 20', () => {
    const calcSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calcSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    calcSpy.restore();
  });
});
