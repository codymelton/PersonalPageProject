const User = require("../models/user");

module.exports = function(app, passport){
  app.post("/api/signup", function(req, res, next){
    const authenticator = passport.authenticate("local-signup", function(err, user,info){
      if (err) return next(err.message);
      if(!user){
        return res.status(404).json(info.message)
      } else {
          user.save(function(err){
            if (err) throw err;
            req.logIn(user, function(err){
              if (err) res.json({error: err.message})
              return res.json(user);
            });
          });
      }
    })
    authenticator(req, res, next);
  });

  app.get("/api/logout", function(req, res, next){
    req.session.destroy();
    return res.json({
      loggedOut: "Successfully logged out! 🖖"
    })
  });

  app.post("/api/login", function(req, res, next){
    const authenticator = passport.authenticate("local-login",function(err, user, info){
      if (err) res.json({error: err.message});
      if (!user){
        return res.status(404).json(info.message);
      }
      req.logIn(user, function(err){
        if (err) res.json({error: err.message});
        return res.json({
          message: "Success you have logged in! 👍",
          user:    user
        });
      })
    })
    authenticator(req, res, next);
  });
}
