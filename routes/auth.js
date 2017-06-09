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

  app.get('/api/get_user', function(req, res, next){ //endpoint makes more sense as "get_user" rather than "login"
     if(req.user){ //only exists (part of the req object) if someone has successfully logged in
       console.log('user IS logged in');
       res.json({user: req.user, isAuthed: true}) //if the user is in, show them
     } else { //otherwise user gets an error (pop up message) and can't login
       console.log('NOT logged in');
       res.json({
         isAuthed: false,
         message: 'You are not logged in!'
       })
     }
   });
}
