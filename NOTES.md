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
