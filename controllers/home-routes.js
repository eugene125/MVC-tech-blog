const { Post, User, Comment } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try {    
      const postData = await Post.findAll({
        include: [User],
      });

      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('landing_page', { layout: "index", posts: posts});
    } catch (err) {
      res.status(500).json(err);
    }
  }); 

  router.get('/post/:id', async (req, res) => {
    try {     
      const postData = await Post.findOne({
     
        where: {id: req.params.id},
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      if (postData) {
    
        const post = postData.get({ plain: true });
   
        console.log(post);
        res.render('single-post', { post, loggedIn: req.session.loggedIn});
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    res.render('login', {layout: "index"});
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    res.render('sign_up', {layout: "index"});
  });
  
  module.exports = router;