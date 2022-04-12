const router = require("express").router();
const blogRoutes = require("./blog-routes");
const commentRoutes = require("./comment-routes");
const userRoutes = require("./user-routes");

router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

module.exports = router;