const router = require('express').Router();

const { Post, Comment, User } = require("../../models");
const sequelize = require("../../config/connection");
const withAuthorization = require('../../utils/auth');

// Get all posts
router.get("/", async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            // Including associated comments
            include: [
                {
                    model: Comment,
                    attributes: ["id", "text", "user_id", "post_id"]
                }
            ]
        });
        if (allPosts) {
            res.status(200).json(allPosts);
        } else {
            res.status(400).json({ message: "Posts cannot be found" });
        };
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Get a single post
router.get("/:id", async (req, res) => {
    try {
        const singlePost = await Post.findOne({
            where: {
                id: req.params.id
            },
            // Including associated comments
            include: [
                {
                    model: Comment,
                    attributes: ["id", "text", "user_id", "post_id"]
                }
            ]
        });
        if (singlePost) {
            res.status(200).json(singlePost);
        } else {
            res.status(400).json({ message: "That post was not found" });
        };
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Create a new post
router.post("/", withAuthorization, async (req, res) => {
    try {
        const createPost = await Post.create({
            title: req.body.title,
            text: req.body.text,
            user_id: req.session.user_id
        });
        if(createPost){
            res.json("Success");
        } else {
            res.status(400).json({ message: "Unable to create post"})
        }
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Update an existing post
router.put("/:id", withAuthorization, async (req, res) => {
    try {
        const updatePost = await Post.update(
            {
                title: req.body.title,
                text: req.body.text,
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (updatePost) {
            res.json(updatePost);
        } else {
            res.status(400).json({ message: "That post was not found" })
        };
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Delete an existing post
router.delete("/:id", withAuthorization, async (req, res) => {
    try {
        const destroyPost = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!destroyPost) {
            res.status(400).json({ message: "That post was not found" });
        } else {
            res.json(destroyPost);
        };
    }
    catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;