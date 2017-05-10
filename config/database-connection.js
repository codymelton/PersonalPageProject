var mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect("mongodb://localhost/my-blog")
  console.log("DATABASE IS OPERATIONAL");
}
