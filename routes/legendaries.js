const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const legendaryValidator = require('../middlewares/legendaryValidator');

const controller = require('../controller/legendariesController');

router.get('/all', controller.getAllegendary);
router.post('/', auth, legendaryValidator, controller.create);

router.get('/', controller.getOnelegendary);


module.exports = router;