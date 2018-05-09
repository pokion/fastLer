let express = require('express');
let mongo = require('mongodb');
let bodyParser = require('body-parser');
let mongoData = require('./mongoDB/mongo.js');
let controler = require('./pages/controler.js');

let app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'))

controler(app,bodyParser);

app.listen(8080,()=>{
	console.log('now app listen port: 8080');
});