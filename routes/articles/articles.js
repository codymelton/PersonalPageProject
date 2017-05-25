var Article   = require('../../models/article');
var Comment   = require('../../models/comment');
var async     = require('async');

exports.getAll = (req,res) => {
    Article.find()
    .populate('comments')
    .exec((err, data)=>{
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
    newArticle.save((err,data) =>{
      if (err) {
        res.send(err);
      } else {
        res.json({ data, message: "Article Posted!"})
      }
    });
  };

  exports.getById = (req,res) => {
      console.log(req.params.article_id);
      Article.findById(req.params.article_id)
        .populate('comments')
        .exec((err,article) =>{
        console.log("Found entry", article);
        if (err) {
          res.send(err);
        } else {
          res.json({data: article});
        }
      });
    };

  exports.deleteById = (req,res) => {
      Article.remove({_id: req.params.article_id},(err) => {
        if (err) {
          res.send(err);
        } else {
          Article.find((err, articles)=>{
            if (err) res.json({error: err});
            res.json({message: "Article Removed!", data: articles});
          });

        }
      });
    };

  exports.editById = (req,res) => {
      Article.findById(req.params.article_id, (err, article) => {
        if (!article) return res.status(404);
        article.loadData(req.body);
        article.save((e) => {
          if (e) {
            res.send(e);
          } else {
            res.json({article, message: "Article Updated!"});
          }
        })
      });
    };

  exports.makeComment = (req,res) => {
    Article.findById(req.params.article_id, (err, article) => {
      if (err) throw err;
      const newComment = new Comment();
      newComment.loadData(req.body);
      newComment.save((err, savedComment) => {
        if (err) throw err;
        article.comments.push(savedComment);
        article.save((err, savedArticle) => {
          if(err) throw err;
          res.send({ data: savedArticle })
        })
      })
    })
  }
