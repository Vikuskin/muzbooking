const router = require('express').Router();
const controller = require('../controllers/account');
const passport = require('passport');
const fileMiddleware = require('../middleware/upload');

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    controller.accountContent
);
router.put(
    '/',
    passport.authenticate('jwt', { session: false }),
    controller.accountContentUpdate
);
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    fileMiddleware.array('images', 3),
    controller.accountPlatform
);
router.delete(
    '/',
    passport.authenticate('jwt', { session: false }),
    controller.accountPlatformDelete
);

module.exports = router;
