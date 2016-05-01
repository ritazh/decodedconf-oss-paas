var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var presentationTitle = "";
	if(process.env.PRESENTATION_TITLE == ""){
		presentationTitle = "Default Title";
	}else{
		presentationTitle =	process.env.PRESENTATION_TITLE;
	}
  res.render('index', { title: presentationTitle});
});

module.exports = router;
