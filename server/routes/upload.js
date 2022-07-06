const router = require('express').Router();
const fileMiddleware = require('../middleware/upload');

router.post('/', fileMiddleware.array('images', 3), (req, res) => {
    try {
        if (req.file) {
            res.json(req.file);
        }
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
