const { User } = require("../models");

const userData =[
    {
        username: "Brian_Griffin",
        email: "BrianG@gmail.com",
        password: "Password1"
    },
    {
        username: "Stewie_Griffin",
        email: "StewieG@gmail.com",
        password: "Password2"
    },
    {
        username: "Lois_Griffin",
        email: "LoisG@gmail.com",
        password: "Password3"
    },
    {
        username: "Peter_Griffin",
        email: "PeterG@gmail.com",
        password: "Password4"
    },
    {
        username: "Meg_Griffin",
        email: "MegG@gmail.com",
        password: "Password5"
    },
    {
        username: "Chris_Griffin",
        email: "ChrisG@gmail.com",
        password: "Password6"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;