module.exports = function(app,bodyParser,mongo){
	let urlEncoder = bodyParser.urlencoded({ extended: false })
	let err=[];

	app.get('/rejestracja',function(req,res){
		res.render('register',{err});
	});
	app.get('/login',function(req,res){
		res.render('login',{});
	});
	app.post('/login',function(req,res){
		//console.log(req.body.login)
	});


	app.post('/register', urlEncoder, function(req,res){

		req.check('login', 'Login >3 letters').isLength({min:3})
		req.check('email', 'Invalid email adress').isEmail();
		req.check('pass', 'Password is invalid').isLength({min:5}).equals(req.body.pass2);

		let errors = req.validationErrors();
		if(errors){
			
			errors.forEach(function(element,index,array){
				err.push(element.msg)
			})
			
			res.render('register',{err})
			err = [];
		}else{
			res.render('registerS')
			mongo.createUser(req.body.login,req.body.email,req.body.pass)
		}
	})
	
};