var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	if(req.isAuthenticated()){
	    res.render('users', {
	    	user:req.user
	        //isAuthenticated:req.isAuthenticated()
	    });
	}
	else{
		res.redirect('/login');
		req.session.messages = "Login successfully";
	}	
});


module.exports = router;
