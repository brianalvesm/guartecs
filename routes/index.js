var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Guartecs' });
});

router.get('/empresa', function(req, res, next) {
  res.render('empresa', { title: 'Guartecs - Empresa' });
});

module.exports = router;
