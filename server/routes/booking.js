const router = require('express').Router();
const controller = require('../controllers/booking');

router.post('/', controller.postBooking);
router.get('/', controller.getBooking);

module.exports = router;
