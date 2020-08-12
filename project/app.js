var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var register	= require('./controller/register');
var login 		= require('./controller/login');
var home 		= require('./controller/home');
var logout 		= require('./controller/logout');
var customer 	= require('./controller/customer');
var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));

app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/customer', customer);

/*app.get('/admin/user/:id/:name' , function(req,res){
	res.send(req.params.id+" " +req.params.name);
});*/

app.get('/', function(req, res){
	res.send("this is index page!<br> <a href='/login'> login</a></br> Not a user yet? why not signup today<a href='/register'>SignUp</a> ");
});

app.listen(3000, function(){
	console.log('express http server started at...3000');
});