var mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
  if (process.env.NODE_ENV === 'test' ) {
    mongoose.connect("mongodb://localhost/test-my-blog");
    console.log("TEST DATABASE OPERATIONAL");
  } else {
    mongoose.connect("mongodb://localhost/my-blog")
    console.log("DATABASE OPERATIONAL");
  }

}
