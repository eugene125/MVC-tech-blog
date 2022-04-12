const express = require('express');
const routes = require("./controllers");
const database = require("./models");
const sequelize = require('./config/connection');
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/6public`));

/* 
const sess = {
  secret:
  cookie: {
      maxAge: value in miliseconds
        // Security measure to make sure cookies are inaccessible
      httpOnly: true
        // secure indicates whether you are using https for your website
      secure: false
      sameSite: "strict"
  }
  resave: false
  saveUninitialized: true
  store: new SequelizeStore({
    database: sequelize,
  })
}
*/


app.use(routes);
// app.use(session(sess))

// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );

const main = async () => {
  console.log(`Starting application on ${PORT}`);
  await sequelize.sync({ force: false });
  app.listen(PORT)
}
main();

/* 
Sessions:
  What data does the server need to remember about a visitor from one request to another

  // Only when changing data or creating new data
  req.session.save(() => {
    req.session.loggedIn = true;
  })

  To verify login, find a single user, vertify the email, veryify the password, then set their login status to true.


Cookies:
  Cookies are pieces of data held in your browser
  Unlike local storage, cookies are meant to store small amounts of data that will "expire"

  User signs up or logs in
  Express verifies the user and creates a sessions
  Express stores taht session in the database
    This happens because we set up seqeulize store
  A unique id is generated for that session
  Express creates a cookie with that unqiue id
  Express attaches that cookie to the response header
  The browser receives the response and stores the cookie

  Browser makes any request
  The session cookie is automatically attached to the request (via the header)
  When the server receives the request, it can look at the cookie and match it with the session


Middleware:
  simply software that can be injected into the routing process. A way of authenticating a person no matter what route they are taking


*/