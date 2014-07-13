var express = require('express');
var router = express.Router();

/* GET photos page. */
router.get('/', function(req, res) {
	res.render('index', {title: 'Photos'});
});

module.exports = router;