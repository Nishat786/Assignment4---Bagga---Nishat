let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/index', { 
    title: 'Assignment#4' 
  });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { 
    title: 'About Me',
    author: 'Nishat Bagga'
 });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { 
    title: 'Contact Me',
    authors: ['Nishat Bagga']
 });
});

module.exports = router;


