const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const Subject = new Schema({
	name: {
		type: String,
		required: [true,"Name field is required"]
	},
	code:{
		type: String,
		unique: true,
		required: [true, "subject code is required field"]
	}
})
Subject.plugin(uniqueValidator , {message: 'Already exist in our database.'})

const subjects = mongoose.model('subject',Subject);
module.exports = subjects;
