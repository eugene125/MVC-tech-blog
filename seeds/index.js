const seedUsers = require("./user-seeds");
const seedBlogs = require("./blog-seeds");
const seedComments = require("./comments-seeds");

const sequelize = require("../config/connection");
require('dotenv').config();


const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedBlogs();
    await seedComments();

    process.exit(0)
};

seedAll();