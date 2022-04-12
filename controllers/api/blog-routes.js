const router = require('express').Router();

const { Blog, Comment, User } = require("../../models");
const sequelize = require("../../config/connection");

// Get all blog posts
router.get("/", async (req, res) => {

});

// Get a single blog post
router.get("/:id", async (req, res) => {

});

// Create a new blog post
router.post("/", async (req, res) => {

})

// Update an existing blog post
router.put("/:id", async (req, res) => {

});

// Delete an existing blog post
router.delete("/:id", async (req, res) => {

});

module.exports = router;