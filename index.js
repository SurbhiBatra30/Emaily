const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();
passport.use(new GoogleStrategy());
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(5000);
