const { Comment } = require("../models");

const commentData = [
    {
        text: `No comment`,
        user_id: 1,
        post_id: 2
    },
    {
        text: `WHAT?!?`,
        user_id: 2,
        post_id: 3
    },
    {
        text: `I have an idea so smart that my head would explode if I even began to know what I was talking about.`,
        user_id: 4,
        post_id: 3
    },
    {
        text: `Why you tottering fen sucked dewberry, I'm going to find something to strike you with, excuse me.`,
        user_id: 2,
        post_id: 4
    },
    {
        text: `You do? How?`,
        user_id: 4,
        post_id: 5
    },
    {
        text: `Well, you're hogging up all the... ugly!`,
        user_id: 6,
        post_id: 6
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;