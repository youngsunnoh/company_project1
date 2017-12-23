var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/services', function(req, res, next) {
    res.render('services');
});
router.get('/product', function(req, res, next) {
    res.render('product');
});
router.get('/about', function(req, res, next) {
    res.render('about');
});
router.get('/contact', function(req, res, next) {
    res.render('contact');
});

module.exports = router;
