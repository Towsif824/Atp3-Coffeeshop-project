var express 	= require('express');
var multer 		=require('multer');
var path 		= require('path');
var fileUpload  = require('express-fileUpload');
var ejs  		= require('ejs');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var register	= require('./controller/register');
var login 		= require('./controller/login');
var home 		= require('./controller/home');
var logout 		= require('./controller/logout');
var customer 	= require('./controller/customer');
var http = require('http');
var fs = require('fs');
var app 		= express();



/*var upload = multer({
	storage: storage,
	fileFilter: function(req, file, cb){
		checkFileType(file,cb);
	}
}).single('image');

function checkFileType(file, cb){
	const filetypes =/jpeg|jpg|png|gif/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const minetype = filetypes.test(file.minetype);

	if(minetype && extname){
		return cb(null,true);

	}else{
		cb('Error: Images only!');
	}
}*/

//config
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/customer', customer);


app.get('/', function(req, res){
	res.send("this is index page!<br> <a href='/login'> login</a></br> Not a user yet? why not signup today<a href='/register'>SignUp</a> ");
});
/*app.post('/upload', function(req, res){
	upload(req, res , (err) =>{
		if(err){
			res.render('register/index', {
				msg: err
			});
		}else {
			if(req.file == undefined){
				res.render('register/index', {
				msg: "Error: No file selected!"
			});
			}else {
				res.render('register/index', {
					msg: 'File uploaded!',
					file: `uploads/${req.file.filename}`
				});
			}
		}
	});
});*/
app.listen(3000, function(){
	console.log('express http server started at...3000');
});