const router = require('express').Router();
const { Post, User } = require ("../models");

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { "user_id": req.session.user_id },
            include: [User]
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', {layout: 'index', posts: posts});
    } catch (err) {
        console.error(err);
        res.redirect('login');
    }
});

router.get('/new', (req, res) => {
    res.render('new-post', {layout: 'index'});
});

router.get('/edit/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });
            console.log(post);

            res.render('edit-post', { layout: 'dashboard', post });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;