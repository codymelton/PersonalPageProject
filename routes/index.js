// This makes this easier to have user types and other features that I will want

const express = require('express');
const ArticleRoutes = require('./articles/articles');

module.exports = (app) => {
  app.post('/api/articles', ArticleRoutes.makeNew);
  app.get('/api/articles', ArticleRoutes.getAll); // get all
  app.put('/api/articles/:article_id', ArticleRoutes.editById);
  app.delete('/api/articles/:article_id', ArticleRoutes.deleteById);
  app.get('/api/articles/:article_id', ArticleRoutes.getById); // get by id
}
