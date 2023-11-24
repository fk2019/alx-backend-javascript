const request = require('request');
const { expect } = require('chai');

describe('API integration test suite', () => {
  const apiUrl = 'http://localhost:7865';
  it('GET / returns 200 status code', (done) => {
    request(`${apiUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('GET / body is Welcome to the payment system', (done) => {
    request(`${apiUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
