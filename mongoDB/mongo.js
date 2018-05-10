module.exports = function(mongoose){
	mongoose.connect('mongodb://localhost/testo');
	let Schema = mongoose.Schema;
	let user = require('../schemats/user')

	mongoose.connection.once('open',function(){
		console.log('jest')
	}).on('error',function(error){
		console.log('ERROR',error)
	})
}