module.exports = function(app,bodyParser){
	let urlEncoder = bodyParser.urlencoded({ extended: false })

	app.get('/rejestracja',function(req,res){
		res.render('register',{});
	});
	app.get('/login',function(req,res){
		res.render('login',{});
	});

	app.post('/register', urlEncoder, function(req,res){
		console.log(req.body)
		res.render('registerS',{})
	})
	
};