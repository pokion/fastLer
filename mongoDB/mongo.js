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

	this.find = function(login,pass){
		let k = user.find({name: login, password: pass})
		console.log(k)
	}
}