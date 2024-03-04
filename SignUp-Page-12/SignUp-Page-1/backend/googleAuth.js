const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();
const passport = require("passport");

const GOOGLE_CLIENT_ID = "103890878641-6vvqr4nn3svnvrn8l5pf9jmca4oro4vf.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
 const CLIENT_URL="http://localhost:8080/google/callback";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CLIENT_URL,
    passReqToCallback: true,
  },
  function(request,accessToken, refreshToken, profile, done) {
    console.log(profile);
    return done(null, profile);
  }
));

passport.serializeUser ((user, done) => {
  done (null, user);
});

passport.deserializeUser ((user, done) => {
  done (null, user);
});