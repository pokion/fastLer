let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let bcrypt = require('bcrypt')
let mongoData = require('./mongoDB/mongo.js');
let controler = require('./pages/controler.js');

let app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'))


mongoData(mongoose,bcrypt)

controler(app,bodyParser);

app.listen(8080,()=>{
	console.log('now app listen port: 8080');
});