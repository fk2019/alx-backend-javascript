const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});
app.post('/login', express.json(), (req, res) => {
  try {
    const { userName } = req.body;
    if (!userName) {
      throw new Error('Bad request: please provide valid userName');
    }
    res.send(`Welcome ${userName}`);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
module.exports = app;
