const { createClient } = require ('@supabase/supabase-js')

const supabase = createClient('https://vfmmohlhbiaxqgdlhywq.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbW1vaGxoYmlheHFnZGxoeXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIxNTcwNTYsImV4cCI6MTk4NzczMzA1Nn0.pLorydtLSlFAMAjNrL36cgWpkRarzOW_l2fZAMB8CwY')
// Yo man i cant talk really cause my momma :/
// Im using the replit mobile app
// I dont know how to let you usr my SUPAbase projects
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const ejs = require('ejs');    
var fs = require('fs');

// https://github.com/PaternalOil/Nodial-Mocha


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

app.post('/login', (req, res) => {
  console.log(req.body);
   res.render('email.ejs', {
  title: 'My Site',
  myCss: myCss2
  });
});

app.listen(8000, () => { console.log('// Server Start //'); });

console.log(supabase);
