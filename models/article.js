var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title:  {required: true, type: String},
  author: String,
  body:   String,
  draft:  Boolean,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

ArticleSchema.methods.loadData = function(data){
  this.title    = data.title ? data.title : this.title;
  this.author   = data.author ? data.author : this.author;
  this.body     = data.body ? data.body : this.body;
  this.draft    = data.draft ? data.draft : this.draft;
}

module.exports = mongoose.model('Article', ArticleSchema);
