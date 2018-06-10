let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
let expressSession = require('express-session');
let mongoData = require('./mongoDB/mongo.js');
let controler = require('./pages/controler.js');
let adminPanel = require('./adminPanel.js');

let app = express();
 


app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'))
app.use(expressValidator())
app.use(expressSession({secret: 'max', saveUninitaialized: false, resave: false}))


let mongo = new mongoData(mongoose)

controler(app,bodyParser,mongo,mongoose);
adminPanel(app)

app.listen(8080,()=>{
	console.log('now app listen port: 8080');
});