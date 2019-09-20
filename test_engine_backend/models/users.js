const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Bcrypt = require("bcryptjs");
const jwt  = require('jsonwebtoken');
const Schema = mongoose.Schema;
const User = new Schema({
	name: {
		type: String,
		required: [true,"Name field is required"]
	},
	email:{
		type: String,
		unique: true,
		match: [/\S+@\S+\.\S+/, 'is invalid'],
		required: [true, "Email is required field"]
	},
	password:{
		type: String,
		required: [true, "Password is required field"]
	},
	role:{
		type: String,
		default: "student"
	}
})
User.plugin(uniqueValidator , {message: 'Already exist in our database.'})

User.methods.hashPassword = function(password){
	this.password =  Bcrypt.hashSync(password, 10)
}

User.methods.comparePassword = function(password){
	

		if(Bcrypt.compareSync(password, this.password)) {
			return true;
		}
		else
		{
			return false;
		}		
}

const Users = mongoose.model('user',User);
module.exports = Users;
