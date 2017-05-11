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

  .post(function(req,res){
    var newArticle = new Article();
    newArticle.loadData(req.body);
    newArticle.save(function(err,data){
      if (err) {
        res.send(err);
      } else {
        res.json({ data, message: "Article Posted!"})
      }
    });
  });

  Router.route('/:article_id')
    .get(function(req,res){
      Article.findById(req.params.article_id, function(err,data){
        if (err) {
          res.send(err);
        } else {
          res.json(data);
        }
      });
    })

    .delete(function(req,res){
      Article.remove({_id: req.params.article_id}, function(err){
        if (err) {
          res.send(err);
        } else {
          res.json({message: "Article Removed!"})
        }
      });
    })

    .put(function(req,res){
      Article.findById(req.params.article_id, function(err, article){
        if (!article) return res.status(404);
        article.loadData(req.body);
        article.save(function(e){
          if (e) {
            res.send(e);
          } else {
            res.json({article, message: "Article Updated!"});
          }
        })
      });
    });

  module.exports = Router;
