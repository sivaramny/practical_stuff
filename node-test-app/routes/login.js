var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
   res.render('login', { message: req.session.messages });
   req.session.messages = null;
});

module.exports = router;
