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
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('GET /cart/:5 returns 200 code', (done) => {
    request(`${apiUrl}/cart/5`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('GET /cart/:5 body  retuns `Payment methods for cart 5`', (done) => {
    request(`${apiUrl}/cart/5`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 5');
      done();
    });
  });
  it('GET /cart/:hi returns 404 code', (done) => {
    request(`${apiUrl}/cart/hi`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
  it('GET /cart/:56hi returns 404 code', (done) => {
    request(`${apiUrl}/cart/56hi`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
  it('GET /login/:Luffy returns Welcome Luffy', (done) => {
    request.post(`${apiUrl}/login/`, { json: { userName: 'Luffy' } }, (err, res, body) => {
      expect(body).to.equal('Welcome Luffy');
      done();
    });
  });
  it('GET /available_payments/ valid json', (done) => {
    request(`${apiUrl}/available_payments/`, (err, res, body) => {
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});
