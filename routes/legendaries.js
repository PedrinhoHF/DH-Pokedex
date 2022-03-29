const express = require('express');
const router = express.Router();

const controller = require('../controller/legendariesController');

router.get('/pineco', controller.getOnelegendary);
router.get('/all', controller.getAllegendary);
router.post('/new',controller.postOnelegendary);
module.exports = router