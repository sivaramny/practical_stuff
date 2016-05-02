var express = require('express');
var router = express.Router();


/* Option -I
// get route
router.get('/', function(req, res) {
  res.send('I m foo');
});


// Passing Parameter
router.get('/:id', function(req, res) {
  res.send('I m foo with ID:'+req.params.id);
});
*/

/* Option - II */
router.get('/:id?', function(req, res){
	if(req.params.id){
		res.send('I m foo with ID:'+req.params.id);
	}
	else{
		res.send('I m foo');
	}
});

/* Passing optional parameter */
router.get('/:id/:op?', function(req, res){
	if(req.params.op){
		res.send('I m foo with ID:' + req.params.id + " Operation:" + req.params.op);
	}
	else{
		res.send('I m foo with ID:' + req.params.id);
	}
});

/* Passing no.of parameter */
router.get('/*', function(req, res){
	res.send('I m foo');
});

/* Put request */
router.put('/', function(req, res){
	res.send(req.body);
});

/* Put request */
router.post('/', function(req, res){
	res.send(req.body);
});


/* Put request */
router.delete('/', function(req, res){
	res.send(req.body);
});



module.exports = router;
