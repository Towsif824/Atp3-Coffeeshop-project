var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();




router.get('/AllFoodItem', function(req, res){

	userModel.getAllFood(function(results){
    console.log(results);
		res.render('home/allFood', { userList : results, username: req.session.username});
	});
});

router.get('/editProfile/:id', function(req, res){

	userModel.getById(req.params.id, function(result){
		res.render('customer/edit', {user: result});
	});

});

router.post('/editProfile/:id', function(req, res){

  var user = {
  	name 			: req.body.name,
  	username 		: req.body.username,
    password     	: req.body.password,
    phone     	 	: req.body.phone,
    email 			: req.body.email,
	address     	: req.body.address,
	id 			: req.params.id
	
	}

	userModel.updateCustomer(user, function(status){
		if(status){
			res.redirect('/home');
		}else{
			res.redirect('/customer/editProfile/'+req.params.id);
		}
	});
});

module.exports = router;