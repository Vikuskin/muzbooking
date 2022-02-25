const router = require('express').Router();
const fileMiddleware = require('../middleware/upload')

router.post('/', fileMiddleware.array('images', 3), (req, res) => {
    console.log('some text')
    try {
        if (req.file) {
            console.log(req.file)
            res.json(req.file)
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = router;