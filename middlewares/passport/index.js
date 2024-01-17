import passport from "passport";
import Users from "../../models/users.js"
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const userCollection = await Users()
      const user = await userCollection.findOne({ email: username });
      
      //password validation
      const passwordIsValid = (userPassword, enteredPassword) => {
        return bcrypt.compareSync(enteredPassword, userPassword);
      };

      if (!passwordIsValid(user.password, password)) {
        return done(null, false, {
          message: "Incorrect Password",
         });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  Users().then(function (userCollection) {
    userCollection.findOne({ _id: id }).then(function (user) {
      done(null, user);
    });
  })
});

export default passport;