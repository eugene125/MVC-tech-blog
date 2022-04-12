const router = require('express').Router();

const { Comment } = require("../../models");

// Get all comments
router.get("/", async (req, res) => {

});

// Create a new comment
router.post("/", async (req, res) => {

})

// Update an existing comment
router.put("/:id", async (req, res) => {

});

// Delete an existing comment
router.delete("/:id", async (req, res) => {

});

module.exports = router;