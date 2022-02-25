const router = require('express').Router();
const controller = require('../controllers/search');

router.get('/', controller.searchPlaces);

module.exports = router;