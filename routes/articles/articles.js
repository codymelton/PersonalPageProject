var Article   = require('../../models/article');
var async     = require('async');

exports.getAll = (req,res) => {
    Article.find(function(err, data){
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Your articles are here!",data});
      }
    });
  }

exports.makeNew = (req,res) => {
    var newArticle = new Article();
    newArticle.loadData(req.body);
    newArticle.save(function(err,data){
      if (err) {
        res.send(err);
      } else {
        res.json({ data, message: "Article Posted!"})
      }
    });
  };

  exports.getById = (req,res) => {
      Article.findById(req.params.article_id, function(err,data){
        if (err) {
          res.send(err);
        } else {
          res.json(data);
        }
      });
    };

  exports.deleteById = (req,res) => {
      Article.remove({_id: req.params.article_id}, function(err){
        if (err) {
          res.send(err);
        } else {
          res.json({message: "Article Removed!"});
        }
      });
    };

  exports.editById = (req,res) => {
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
    };
