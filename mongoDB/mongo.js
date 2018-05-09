module.exports = function(mongoose){
	mongoose.connect('mongodb://localhost/testo')

	mongoose.connection.once('open',function(){
		console.log('jest')
	}).on('error',function(error){
		console.log('ERROR',error)
	})
}