const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi utilizes Utils.calculateNumber', () => {
    const fake = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(fake.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(fake.calculateNumber.calledOnce).to.be.true;
    fake.calculateNumber.restore();
  })
})
