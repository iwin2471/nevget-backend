var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('test');
});

router.post('/', function(req, res, next) {
  res.json({test:'test'});
});
module.exports = router;
