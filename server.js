const express = require('express');
const session = require("express-session");
const routes = require("./controllers");
const database = require("./models");
const sequelize = require('./config/connection');
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {
//     maxAge: 100000
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     database: sequelize
//   })
// };

app.use(routes);
// app.use(session(sess))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);