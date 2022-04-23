var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginController');
const auth = require('../middlewares/auth')
const loginValidator = require('../middlewares/loginValidator')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{darkMode: req.session.darkMode});
});

router.get('/teste', function(req, res, next){
  res.send('teste')
}),

router.get('/login',loginController.index)

router.get('/dark-mode', (req, res)=>{
 req.session.darkMode = !req.session.darkMode;
 res.cookie('darkMode', req.session.darkMode);
 res.redirect('/')


});


module.exports = router;
