const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const ejs = require('ejs');     
var fs = require('fs');

 const myCss = {
  style : fs.readFileSync('./style.css','utf8')
};

 const myCss2 = {
  style : fs.readFileSync('./style2.css','utf8')
};

 const myCss3 = {
  style : fs.readFileSync('./videostyle.css','utf8')
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get('/', function (req, res) {
  res.render('index.ejs', {
  title: 'My Site',
  myCss: myCss
  });
});

app.get('/login', function (req, res) {
  res.render('login.ejs', {
  title: 'My Site',
  myCss: myCss2
  });
});

app.get('/videos', (req, res) => {
  res.render('videos.ejs', {
  title: 'My Site',
  myCss: myCss3
  });
});

app.post('/', (req, res) => {
  console.log(req.body);
});

app.listen(8000, () => { console.log('// Server Start //'); });
// sigill!!!