var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'Express About',
    author: 'Nishat Bagga'
});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Express Contact Me',
    author: 'NishatBagga ContactPage'
});
});

module.exports = router;
