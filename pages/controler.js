module.exports = function(app,bodyParser,mongo,mongoose){
	let user = require('../schemats/user')
	let urlEncoder = bodyParser.urlencoded({ extended: false })

	app.get('/',function(req,res){
		res.render('home',{error: null});
	});
	app.get('/profil',function(req,res){
			res.render('profil',{error: null});
		});
		app.get('/rank',function(req,res){
			res.render('rank',{error: null});
		});

	app.get('/login',function(req,res){
		res.render('login',{error: null});
	});

	app.post('/login',urlEncoder,function(req,res){
		mongo.login(req.body.login, req.body.pass, res);
	});

	app.get('/rejestracja',function(req,res){
		res.render('register',{err:[]});
	});

	app.post('/register', urlEncoder, function(req,res){
				let missErr = [];
				req.check('login', 'must Login >3 letters').isLength({min:3})
				req.check('email', 'Invalid email adress').isEmail();
				req.check('pass', 'Password is invalid').isLength({min:5}).equals(req.body.pass2);

				let errors = req.validationErrors();

				if(errors){
					errors.forEach(function(element,index,array){
						missErr.push(element.msg)
					})
					res.render('register',{err:missErr})
				}else{
					mongoose.connect('mongodb://localhost/users');
						user.findOne({$or:[{name:req.body.login},{email:req.body.email}]},function(err,doc){
							if(err) throw err;
							console.log(doc)
								if(doc){
									if(doc.name==req.body.login) missErr.push('Ten login jest już zajęty.')
									if(doc.email==req.body.email) missErr.push('Ten email jest już zajęty.')
									res.render('register',{err:missErr})

								}else{
									res.render('registerS')
									mongo.createUser(req.body.login,req.body.email,req.body.pass)
								}
						})

				}
			})
			mongoose.disconnect();

};
