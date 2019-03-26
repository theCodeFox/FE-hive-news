# **theCodeFox-News**
Allows user to create their own articles or read other users articles and comments. They can comment and vote on what they like or dislike and make changes to their articles or comments including deleting what is no longer needed.

There are 3 levels of access:
1. `Anonymous` *(when you first arrive or log out)*
2. `Member` *(when you sign up as a member - please try out cooljmessy as they have multiple articles and comments)*
3. `Admin` *(has full access to all functionality including a users page for ease of use - please use jessjelly)*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

***

### **Hosted sites and Repos**
**`Front-end`**
* [Netlify - theCodeFox-News](https://thecodefox-news.netlify.com/)
* [GitHub - theCodeFox-NC-Knews](https://github.com/theCodeFox/theCodeFox-NC-Knews)

**`Back-end`**
* [Heroku - theCodeFox-NC-Knews](https://be-hive-news.herokuapp.com/api)
* [GitHub - theCodeFox-BE2-NC-Knews](https://github.com/theCodeFox/BE-hive-news)

***

## **Getting Started**
1. Fork from **`GitHub`**: https://github.com/theCodeFox/theCodeFox-NC-Knews
2. `Clone into the directory that you will be working from`
3. Install all dependancies and dev-dependancies *(see Installing below)*
4. **`npm start`** - runs the app in the development mode *(Open [http://localhost:3000](http://localhost:3000) to view it in the browser, it will reload if you make edits)*
5. **`npm test`** - launches the test runner in the interactive watch mode. I have used jest and cypress
6. **`npm run build`** - builds the app for production to the `build` folder.
7. `Deploy` *(see Deployment below)*
8. Play around and most importantly... **_have fun!_**

***NOTE**: though I have left `npm eject` in, **DO NOT USE** as is a one-way operation and will remove the single build dependency from your project*

### **Prerequisites**

`Below is examples of what I used,` (alternatives are available). If you find something that you prefer, please drop me the suggestion on GitHub!
* Command Line Interface: `iTerm/bash`
* Source Code Editor: `Visual Studio Code`
* End-to-End Testing: `Cypress`
* JavaScript Librarys: `React, Reach/Router, Local-Storage`, `Axios`
* Deployment Platform: `Netlify`

### **Installing**

Once you have cloned the repo then cd into the directory. 

From here:

**Install dependancies**

```
npm install @reach/router axios local-storage react react-dom react-image react-scripts
```

**Add browserslist to Package JSON**

```JSON
  {
      "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
  }
```

*Optional dependancies*

```
extention (VSC) - eslint
```

*Your Package JSON should look something like this:*

```JSON
{
  "name": "codefox-nc-knews",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reach/router": "^1.2.1",
    "axios": "^0.18.0",
    "local-storage": "^1.4.2",
    "react": "^16.8.4",
    "react-dom": "^16.8.4",
    "react-image": "^2.0.0",
    "react-scripts": "2.1.8"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

**Don't forget a gitignore file!**

```ruby
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
# dependencies
/node_modules
/.pnp
.pnp.js
# testing
/coverage
# production
/build
# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### **User Stories used for end to end tests**

1. As a user, I should be able to view a list of all articles.
2. As a user, I should be able to view a list of all articles on a specific topic.
3. As a user, I should be able to view an individual article.
4. As a user, I should be able to view an individual article's comments.
5. As a user, I should be able to sort articles by: 
    - date created
    - topic
    - votes
6. As a user with no access to my laptop, I should be able to use the site on my mobile without sacrificing style or functionality.
7. **As a user, I should be able to login to the site.**
8. **As a hiring partner with no knowledge of the users in the database, it should be very clear to me how I can login to the site.**
9. As a logged in user, I should be able to post a new article to an existing topic.
10. As a logged in user, I should be able to post a new article to a new topic.
11. As a logged in user, I should be able to post a new comment to an existing article.
12. **As a logged in user, I should be able to vote on an article.**
13. **As a logged in user, I should be able to vote on a comment.**
14. As a logged in user, I should be able to delete my own articles.
15. As a logged in user, I should be able to delete my own comments.

## **Deployment using Netlify**

1. Add a file, `_redirects` (no file extension) to your `public` directory.
2. This file should contain the redirect rule: `/* /index.html 200`.
3. Use command `npm run build` in your terminal.
4. Create a Netlify Account.
5. Install Netlify's CLI in terminal:
```
npm install netlify-cli -g
```
6. Use command `netlify deploy` in terminal and follow prompts to authorise with GitHub.
7. Provide a deploy path: `./build`
8. Your draft version should now be deployed on a url, e.g.<br>
`https://5c13ab16055b9be1725868e6--your-site-name.netlify.com`.<br>
Test it out, make sure that everything is working as expected.
9. Use command `netlify deploy --prod` in your terminal and specify `./build` as your build path again *(This will deploy the site to your actual url: `https://your-site-name.netlify.com`.)*

*Good luck!*
***

## **Contributing**

This is a course project for study purposes. Rights go to Northcoders who provided the course and assisted with studying.

`As a solo sprint there is to be no contributing.`
***
## **Versioning**
* Visual Studio Code - 15.0
* npm - 6.8.0

```json
{
  "name": "codefox-nc-knews",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reach/router": "^1.2.1",
    "axios": "^0.18.0",
    "local-storage": "^1.4.2",
    "react": "^16.8.4",
    "react-dom": "^16.8.4",
    "react-image": "^2.0.0",
    "react-scripts": "2.1.8"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```
***
## **Authors**

* **Kay Fox** - *Initial work* - [theCodeFox](https://github.com/theCodeFox)
***
## **License**

This project is licensed under the **ISC** License
***
## **Acknowledgments**

* **NorthCoders!** (https://northcoders.com) - A massive thank you for all assistance, teaching, lectures and above all patience.