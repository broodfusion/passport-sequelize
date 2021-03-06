module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;
  //serialize
  passport.serializeUser(function(user, done) {
    done(null, user.EmployeeNo);
  });

  // deserialize user
  passport.deserializeUser(function(EmployeeNo, done) {
    User.findById(EmployeeNo).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },
      function(req, username, password, done) {
        User.findAll({
          where: {
            EmployeeID: username,
            
          },
          limit: 1
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: 'That username is already taken',
            });
          } else {
            // var userPassword = generateHash(password);

            var data = {
              EmployeeID: username,

              Password: password,

              FirstName: req.body.firstname,

              LastName: req.body.lastname,
            };

            User.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );

  //LOCAL SIGNIN
  passport.use(
    'local-signin',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email

        usernameField: 'username',

        passwordField: 'password',

        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },
      function(req, username, password, done) {
        var User = user;

        var isValidPassword = function(userpass, password) {
          return password === userpass;
        };

        User.findAll({
          where: {
            EmployeeID: username,
          },
        })
          .then(function(user) {
            if (!user) {
              return done(null, false, {
                message: 'Email does not exist',
              });
            }

            if (!isValidPassword(user.Password, password)) {
              return done(null, false, {
                message: 'Incorrect password.',
              });
            }

            var userinfo = user.get();
            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log('Error:', err);

            return done(null, false, {
              message: 'Something went wrong with your Signin',
            });
          });
      }
    )
  );
};
