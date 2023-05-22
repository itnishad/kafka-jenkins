const express = require('express');
const app = express();
const port = 4001;
const kafka = require('./kafka/config');

app.use(express.json());

app.post('/webhook', (req, res) => {
  res.send('webhook!')
});

// app.get('/assignToAgent', (req, res) => {
//     res.send(JSON.stringify(config))
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})