var express   = require('express');
var Router    = express.Router();
var Article   = require('../models/article');
var async     = require('async');

Router.route('/')
  .get(function(req,res){
    Article.find(function(err, data){
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Your articles are here!",data});
      }
    });
  })

  module.exports = Router;
