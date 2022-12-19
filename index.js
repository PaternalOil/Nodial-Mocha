const express = require('express');
const app = express();
const bycrypt = require('bycrypt');
const passport = require('passport');


const users = []

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs', {name: 'James'});
});

app.get( '/login', (req, res) => {
  res.render('login.ejs');
})

app.get( '/register', (req, res) => {
  res.render('register.ejs');
})

app.post('/register', (req, res) => {
  try{
    const hashedpassword = await bycrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      password: hashedpassword,
      email: req.body.email
    });
    res.redirect('/login');
  } catch {
    redirect('/register');
  }
  console.log(users)
})

app.listen(3000);