const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
});

app.listen(3000, () => { console.log('server started'); });
