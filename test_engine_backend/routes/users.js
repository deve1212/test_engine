var express = require('express');
var router = express.Router();
const userModel = require('../models/users');
/* GET users listing. */
router.post('/register', function(req, res) {
 	userModel.create(req.body).then(function(user){
 		user.hashPassword(user.password)
 		res.send(user)
 	}).catch((err)=>{
 		res.send({message: err.message });
 	})

});

router.post('/login', function(req,res){
	const email = req.body.email;
	const password = req.body.password;
	userModel.find({email: req.body.email}).exec().then(user=>{
		console.log('usersdetails',user)
		if (user.length > 0)
			{	let result = user[0].comparePassword(password)
				
				res.send({user , passwordmatch: result})
			}
		else
			res.send({msg: 'user not found'})
	})
})




module.exports = router;
