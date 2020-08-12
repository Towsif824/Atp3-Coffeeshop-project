var db = require('./db');

module.exports ={

	  getByUsername: function(username, callback){
		var sql = "select * from manager where username="+username;
		db.getResults(sql, function(result){
      console.log('user module error')
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},	

	  validate: function(user, callback){
		var sql = "select * from customer where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}