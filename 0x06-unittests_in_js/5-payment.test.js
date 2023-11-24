const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const { spy } = sinon.spy;
const { stub } = sinon.stub;

describe('sendPaymentRequestToApi', () => {
  let consoleSpy = '';
  beforeEach(() => {
    if (!consoleSpy) {
      consoleSpy = sinon.spy(console, 'log');
    }
  });

  afterEach(() => {
    consoleSpy.resetHistory();
  });
  it('should be called once and log `The total is: 120`', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
    expect(consoleSpy.calledOnce).to.equal(true);
  });
  it('should be called once and log `The total is: 20`', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.callCount).to.equal(1);
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.equal(true);
  });
});
