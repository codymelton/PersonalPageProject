Bootstrap the backend using [Express Generator](npm install express-generator -g)

1) `sudo npm install express-generator -g`
  - only need to install globally once
  - To use -> `express nameOfApp`
2) `express blog`

WE ARE GOING TO COMMIT OFTEN

Let's make sure we ignore `node_modules`
`echo 'node_Modules/ >> .gitignore'`

Delete any unnecessary things the generator created
  - ie Views folder and any view engine middleware
  - public directory

Add a test endpoint to app.js,
```
app.get('/test', function(req,res){
  res.json({message: "App functioning properly"})
});
```

update server in bin/www to use port 3001
`var port = normalizePort(process.env.PORT || '3001');`

In package.json change `"start": "node ./bin/www"` -> `"start": "nodemon ./bin/www"`
this will make it so that the server automatically restarts with saved code changes.

Take the app for a spin and test the endpoint with PostMan

If the app is functional - commit your code.
** DONE **

#### Begin API Phase

  - Checkout to a safe branch
  - `git checkout -b articles`
  - Create article Model
  - Create routes folder, and `routes/articles.js`
  - Create Endpoints in `routes/articles` ONE AT A TIME, and continually test using PostMan
  - Once you are satisfied all CRUD routes work do the following:
  - `git add -A`
  - `git push origin articles` -> Note you pushed to your new branch
  - `git checkout master`
  - `git merge articles` -> brings your new code into articles
  - `git push origin master` -> sync your master branch with new code


#### Create React
  - Make about page
Once in your branch - Do you code for the about - once functional push your code to the about branch
`git add -A`
`git commit -m 'made about page'`
`git push origin about` -> important part!
`git checkout master`
`git merge about` -> brings your code from about into master
`git push origin master` -> push all new code to github

#### Blog Post Component

  - ArticleList - list of the articles
  -- ArticleCard - single view of an article
  -- CommentComponent

  - PostArticle

  - EditArticle

  - ViewArticle

npm run dev (get front and the backend running)
npm install --save bootstrap (do this in the client folder to install bootstrap in project.)

.env  SEED_DATABASE to false by default... if set to true and save then will clear the database and
create new data.  Also need to uncomment code in app.js in order for the seed to work.

Make sure and update config/database-seeder as database architecture/items change.

Add post dates...
Add ascending descending sort option.
