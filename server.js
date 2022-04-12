const express = require('express');
const session = require("express-session");
const routes = require("./controllers");
const database = require("./models");
const sequelize = require('./config/connection');
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

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

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// const main = async () => {
//   console.log(`Starting application on ${PORT}`);
//   await sequelize.sync({ force: false });
//   app.listen(PORT)
// }
// main();