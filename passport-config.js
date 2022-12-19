const localStrategy = require('passport-local').Strategy;

function initilize(Passport) {
  const authenticateUser = (username, password, done) => {
    const user = getUserByEmail(email)
    if(user == null) {
      return done(null, false, { message: 'Illegal Input' })
    }
  }
  try {
    if(await.bycrypt.compare(password, user.password)) {} else{
      return done(null, false, { message: 'Password Invalid' })
    }
    
  } catch(e) {
    return done(e)
  }
  
  passport.use(new LocalStrategy ({ usernameField: 'email' }), authenticateUser)
  passport.serializeUser((user, done) => {})
  passport.deserializeUser((id, done) => {})
  return passport;
}

module.exports = initilize