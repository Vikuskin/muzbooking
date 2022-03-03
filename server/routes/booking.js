const router = require('express').Router();
const controller = require('../controllers/booking');

router.post('/', controller.postBooking);

module.exports = router;