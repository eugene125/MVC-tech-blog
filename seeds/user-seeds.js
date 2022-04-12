const { User } = require("../models");

const userData =[
    {
        first_name: "Brian",
        last_name: "Griffin",
        email: "BryanG@gmail.com",
        password: "Password1"
    },
    {
        first_name: "Stewie",
        last_name: "Griffin",
        email: "StewieG@gmail.com",
        password: "Password2"
    },
    {
        first_name: "Lois",
        last_name: "Griffin",
        email: "LoisG@gmail.com",
        password: "Password3"
    },
    {
        first_name: "Peter",
        last_name: "Griffin",
        email: "PeterG@gmail.com",
        password: "Password4"
    },
    {
        first_name: "Meg",
        last_name: "Griffin",
        email: "MegG@gmail.com",
        password: "Password5"
    },
    {
        first_name: "Chris",
        last_name: "Griffin",
        email: "ChrisG@gmail.com",
        password: "Password6"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;