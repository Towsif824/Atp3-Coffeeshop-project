var express = require('express');
var userModel 	= require.main.require('./models/register');

var router = express.Router();

router.get('/', function(req, res){
	res.render('register/index');
});

router.post('/', function(req, res){
	
	var user = {
		name    : req.body.name,
		username: req.body.username,
		password: req.body.password,
		phone	: req.body.phone,
		email	: req.body.email,
		address : req.body.address,
		gender  : req.body.gender,
		image	: req.body.image,
		membership: req.body.membership
		

	}

	userModel.register(user, function(status){
		
		if(status){
			
			res.redirect('/login');	
		}else{
			res.send('invalid username/password');
		}
	});

});

module.exports = router;