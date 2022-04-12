const express = require('express');
const { sequelize } = require('./config/connection');
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
