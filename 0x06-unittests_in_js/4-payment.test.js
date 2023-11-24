const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const { spy } = sinon.spy;
const { stub } = sinon.stub;

describe('sendPaymentRequestToApi', () => {
  it('should return 10', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    calcStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.equal(true);
    calcStub.restore();
    consoleSpy.restore();
  });
  it('should be called only once', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber');
    calcStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calcStub.callCount).to.equal(1);
    calcStub.restore();
  });
  it('should be called with right args', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber');
    calcStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calcStub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    calcStub.restore();
  });
});
