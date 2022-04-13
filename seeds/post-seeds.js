const { Post } = require("../models");

const postData = [
    {
        title: "Dry Martini",
        text: `Whose leg do you have to hump to get a dry martini around here?`,
        user_id: "1"
    },
    {
        title: "Hi",
        text: `Lois? Lois? Lois? Lois? Lois? Mom? Mom? Mom? Mommy? Mommy? Mommy? Momma? Momma? Momma? Ma? Ma? Ma? Ma? Mom? Mom? Mom? Mom? Mommy? Mommy? Momma? Momma? Momma?`,
        user_id: "2"
    },
    {
        title: "Happiness",
        text: `The secret to happiness is burying all your true feelings and living a life of bland compromise`,
        user_id: "3"
    },
    {
        title: "Bird",
        text: `B-b-b-bird, b-birdd's the word
        A-well, a bird, bird, bird, bird is the word
        A-well, a bird, bird, bird, well-a bird is the word`,
        user_id: "4"
    },
    {
        title: "Bullies",
        text: `Trust me, I know more about getting bullied than anyone.`,
        user_id: "5"
    },
    {
        title: "Peace",
        text: `I just want peace on Earth. That's better than Meg, right? So, I should get more than her.`,
        user_id: "6"
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;