module.exports = function(mongoose){
	mongoose.connect('mongodb://localhost/users');
	let Schema = mongoose.Schema;
	let user = require('../schemats/user')

	this.createUser = function(login,email,pass){
		const newUser = new user({
			name: login,
			email: email,
			password: pass
		})

		newUser.save((err)=>{
			if(err) throw err;

			console.log(login+' został dodany')
		})
	}

	this.login = function(login,pass,res){
		user.find({name: login, password: pass}, function(err,doc){
			//console.log(doc[0].name)
			if(login==doc[0].name&&doc[0].password==pass){
				res.render('profil',{login:doc[0].name})
			}else{
				res.render('login',{error:"Złe hasło lub login."})
			}
		})
	}
}