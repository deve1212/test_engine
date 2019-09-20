var express = require('express');
var router = express.Router();
const subjectModel = require('../models/subject');


router.get('/list',function(req , res) {
	subjectModel.find({}, { __v: 0 ,_id:0}).exec().then(subjects=>{
		if (subjects.length > 0)
			{	
				res.send({subjects})
			}
		else
			res.send({msg: 'No subject exists in database'})
	}).catch((err)=>{
		res.send({err ,message: "Some error occurred"})
	})
})

module.exports = router;

