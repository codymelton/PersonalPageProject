const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: {required: true, type: String}
});

CommentSchema.methods.loadData = function(data){
  this.comment = data.comment;
}

module.exports = mongoose.model('Comment', CommentSchema);
