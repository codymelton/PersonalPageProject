const faker = require('faker');
const Article = require('../models/article');

module.exports = () => {

  // This function will remove the data that was previously in the database.
  Article.remove(err => {
    if (err) {
      console.log(err, "ERROR REMOVING ARTICLES");
    } else {
      console.log("OLD ARTICLES ARE DELETED");
    }
  });

  // Generates 20 new data items.
  for (var i = 0; i < 20; i++) {
    var fakeNewArticle = new Article({
      title: faker.random.words(),
      author: faker.name.firstName() + " " + faker.name.lastName(),
      body: faker.lorem.paragraphs(),
      draft: faker.lorem.paragraphs()
    });
    fakeNewArticle.save();
  }
}
