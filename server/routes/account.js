const router = require('express').Router();
const controller = require('../controllers/account');
const passport = require('passport')

router.get('/', passport.authenticate('jwt', {session: false}), controller.accountContent);
router.put('/', passport.authenticate('jwt', {session: false}), controller.accountContentUpdate);
router.post('/', passport.authenticate('jwt', {session: false}), controller.accountPlatform)
router.delete('/', passport.authenticate('jwt', {session: false}), controller.accountPlatformDelete)

module.exports = router;