const express = require('express');

const routes = require('./routes/index');

const port = 1245;
const app = express();
app.use('/', routes);
app.use('/students', routes);
app.use('/students:major', routes);

app.listen(port, host, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.export default app;
