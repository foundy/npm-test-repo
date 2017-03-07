var express = require('express');
var router = express.Router();
var testPkg1 = require('npm-test-package1');
var testPkg2 = require('npm-test-package2');

/* GET home page. */
router.get('/', function(req, res, next) {
  testPkg1();
  testPkg2();
  res.render('index', { title: 'Express' });
});

module.exports = router;
