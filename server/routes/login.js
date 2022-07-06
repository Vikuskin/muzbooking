const router = require('express').Router();
const controller = require('../controllers/login');

router.get('/', controller.login);

module.exports = router;
