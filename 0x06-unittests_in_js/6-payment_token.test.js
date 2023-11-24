const { expect } = require('chai');
const getPaymentTokenFromAPI = require ('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve to {data: "Successful response from the API" } when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.deep.equal({data: 'Successful response from the API'});
      done();
    });
  });
});
