# Personal Portfolio Site
#### *synopsis*
This is a full stack javascript project, utilizing all the tools and technologies I have learned while attending BSCA.  The project will consist of a home page, which markets my current skill sets as a web developer, compete with an about me, and portfolio section

The project will also have a blogging engine, with a section for users to view blog posts, filter by category, and leave feedback via comments.

User authentication will also be implemented, as a means of who can create posts and leave comments.

### Install Instructions:
1. `git clone <url>`
2. ToDo: Finish instructions


#### Backend Overview
Technologies
  - NodeJS
  - ExpressJS
  - MongoDB
  - Mongo

  API

  To POST `/api/articles`

  ToDo - Document all of your endpoints, how to utilize them, and then expected response for each endpoint.

  Resources
    - Article
      -title
      -content


  Ex. Article Resource
  ```
  {
        title: "My first Blog Post",
        content: "Lorem ipsum and so on and so forth..."
  }
  ```

### Frontend Overview
Technologies
  - ReactJS
  - React Router
  - Bootstrap

  Pages
    - Home
    - Blog
      - Articles List
      - View Articles
      - Edit Article
    - Contact

  __ToDo: React Component Hierarchy Tree


#### Stage One
* Create functional Node/Express Application
* Implement CRUD RESTful API for Article Resources
* TDD: Implement at least 3 tests

#### Stage Two
* Create functional React App
* Implement Router, to get to each one of your `Container` comps
* Implement client side CRUD for Articles

#### Product Roadmap
* Seed Dev DB with fake data using [faker](https://github.com/Marak/faker.js)
* User Auth with [auth0](https://auth0.com/)
* Protecting routes/ functionality from non-authorized users.
* Forming Comments/ Articles relationships
* Designing Home page using [sketch](https://www.sketchapp.com)
* Update Article to have category & category relationships
* Migrate to production using [Heroku](https://www.heroku.com/)

### Phase Three

* Create Model Comment with field content
* Add Comment relationship to Article
* Implement API endpoint to create Comment on Article.
  *  make sure you populate the comment, on Article
* Implement Client side ability to view comments for an article.
* Implement Client side ability to post comment on an article.
