module.exports = function(mongoose){
	let Schema = mongoose.Schema;
	let user = require('../schemats/user')
	this.user = require('../schemats/user')

	this.connect = function(){
		mongoose.connect('mongodb://localhost/users');
	}

	this.disconnect = function(){
		mongoose.disconnect();
	}

	this.createUser = function(login,email,pass){
		this.connect()
			const newUser = new user({
				name: login,
				email: email,
				password: pass
			})

			newUser.save((err)=>{
				if(err) throw err;

				console.log(login+' został dodany')
			})
	}//end createUser

	this.login = function(login,pass,res){
		this.connect();
			this.user.find({name: login, password: pass}, function(err,doc){
				//console.log(doc[0].name)
				if(err) throw err;

				if(login==doc[0].name&&doc[0].password==pass){
					res.render('profil',{login:doc[0].name})
				}else{
					res.render('login',{error:"Złe hasło lub login."})
				}
			})

	}//end login
	this.disconnect();

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
