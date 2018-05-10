const mongoose = require('mongoose')

const user = mongoose.Schema({
	name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  created_at: Date
})

user.pre('save', function(next) {   
  if (!this.created_at)    this.created_at = new Date; next();
});

const User = module.exports = mongoose.model('User', user);
