var db = require('./db');

module.exports ={

	  getById: function(id, callback){
		var sql = "select * from customer where c_id="+id;
		db.getResults(sql, function(result){
      console.log('user module error')
			if(result.length > 0){
				callback(result[0]);
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
	},
	getByUsername: function(username, callback){
		var sql = "select * from customer where username='"+username+"'";
		db.getResults(sql, function(result){
      console.log('user module error')
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	  getAllFood:function(callback){
		var sql = "select * from food";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	updateCustomer: function(user,callback){
    var sql = "update customer set name='"+user.name+"', username='"+user.username+"', password='"+user.password+"', phone='"+user.phone+"', email='"+user.email+"' , address='"+user.address+"' where c_id='"+user.id+"'";
    db.execute(sql, function(status){
      if(status){
        callback(true);
      }else{
        callback(false);
      }
    });
  },

  insertComment: function(user,c_id, callback){
		var sql = "insert into comments values('', '"+user.comment+"', '"+user.id+"','"+c_id+"')";

		console.log(sql);

		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

  getcmtByFoodId: function(id,callback){
    var sql = "select * from comments where id='"+id+"'";
    db.getResults(sql, function(results){
      if(results.length > 0){
        callback(results);
      }else{
        callback([]);
      }
    });
  },

    deleteCustomer: function(id, callback){
		var sql = "delete from customer where c_id="+id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByIdFood: function(id, callback){
		var sql = "select * from food where id="+id;
		db.getResults(sql, function(result){
      console.log('user module error')
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
}
