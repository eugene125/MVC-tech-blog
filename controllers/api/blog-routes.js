const router = require('express').Router();

const { Blog, Comment, User } = require("../../models");
const sequelize = require("../../config/connection");

// Get all blog posts
router.get("/", async (req, res) => {
    try {
        const allBlogs = await Blog.findAll({
            // Including associated comments
            include: [
                {
                    model: Comment,
                    attributes: ["id", "text", "user_id", "blog_id"]
                }
            ]
        });
        if (allBlogs) {
            res.status(200).json(allBlogs);
        } else {
            res.status(400).json({ message: "Blogs cannot be found" });
        };
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Get a single blog post
router.get("/:id", async (req, res) => {
    try {
        const singleBlog = await Blog.findOne({
            where: {
                id: req.params.id
            },
            // Including associated comments
            include: [
                {
                    model: Comment,
                    attributes: ["id", "text", "user_id", "blog_id"]
                }
            ]
        });
        if (singleBlog) {
            res.status(200).json(singleBlog);
        } else {
            res.status(400).json({ message: "That blog was not found" });
        };
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Create a new blog post
router.post("/", async (req, res) => {
    try {
        const createBlog = await Category.create({
            title: req.body.title,
            text: req.body.text,
            user_id: req.body.user_id
        });
        res.json(createBlog);
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Update an existing blog post
router.put("/:id", async (req, res) => {
    try {
        const updateBlog = await Blog.update(
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
        if (updateBlog) {
            res.json(updateBlog);
        } else {
            res.status(400).json({ message: "That blog was not found" })
        };
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Delete an existing blog post
router.delete("/:id", async (req, res) => {
    try {
        const destroyBlog = await Blog.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!destroyBlog) {
            res.status(400).json({ message: "That blog was not found" });
        } else {
            res.json(destroyBlog);
        };
    }
    catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;