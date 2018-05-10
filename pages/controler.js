module.exports = function(app,bodyParser,mongo){
	let urlEncoder = bodyParser.urlencoded({ extended: false })

	app.get('/rejestracja',function(req,res){
		res.render('register',{});
	});
	app.get('/login',function(req,res){
		res.render('login',{});
	});


	app.post('/register', urlEncoder, function(req,res){

		req.check('login', 'Login >3 letters').isLength({min:3})
		req.check('email', 'Invalid email adress').isEmail();
		req.check('pass', 'Password is invalid').isLength({min:5}).equals(req.body.pass2);

		let errors = req.validationErrors();
		if(errors){
			let err=[];
			errors.forEach(function(element,index,array){
				err.push(element.msg)
			})
			console.log(err)
			res.render('register',{err})
		}else{
			res.render('registerS')
			mongo.createUser(req.body.login,req.body.email,req.body.pass)
		}
	})
	
};