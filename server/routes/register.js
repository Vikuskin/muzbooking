const router = require('express').Router();
const controller = require('../controllers/register');

router.post('/', controller.register);

module.exports = router;
