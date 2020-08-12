var db = require('./db');

module.exports={

register : function(cus, callback){
	    var sql = "insert into customer values('','" + cus.name + "', '" + cus.username + "','" + cus.password + "', '"+cus.phone+"','" + cus.email + "', '" + cus.address + "','" + cus.gender + "', '"+cus.image+"','"+cus.membership+"')";
		db.execute(sql, function(status){
			callback(status);
			
		});
	},
}
