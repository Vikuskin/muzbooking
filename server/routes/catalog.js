const router = require('express').Router();
const controller = require('../controllers/catalog');

router.get('/', controller.catalogPlace);

module.exports = router;
