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
	id 				: req.params.id
	
	}

	userModel.updateCustomer(user, function(status){
		if(status){
			res.redirect('/home');
		}else{
			res.redirect('/customer/editProfile/'+req.params.id);
		}
	});
});

router.get('/delete/:id', function(req, res){

	userModel.getById(req.params.id, function(result){
		res.render('customer/delete', {user: result});
	});

});

router.post('/delete/:id', function(req, res){

	userModel.deleteCustomer(req.params.id, function(status){
		if(status){
			res.redirect('/');
		}else{
			res.redirect('/home/index');
		}
	});
});

router.get('/comment/:id', function(req, res){

		userModel.getcmtByFoodId(req.params.id, function(results){
			userModel.getById(req.params.id, function(result){
				userModel.getByIdFood(req.params.id, function(foods){
					res.render('comment/index', {cmtList:results, user: result, food : foods});
				});
				
			});
		});
});

router.post('/comment/:id', function(req, res){
	userModel.getByUsername(req.session.username, function(result){
		console.log(result[0].c_id);
		var user={
				comment		:req.body.comment,
				id 			:req.params.id
				}

		userModel.insertComment(user,result[0].c_id, function(status){

			if(status){
				res.redirect('/customer/AllFoodItem');
			}else{
				res.redirect('/home');
			}
		});
	});
});




module.exports = router;