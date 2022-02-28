const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        console.log(req.user)
        const dir = 'images/' + req.user._id + '/'
        console.log(dir)
        fs.mkdir(dir, (err) => {
            console.log(err)
        })
            
        cb(null, dir)
    },
    fileName(req, file, cb) {
        cb(null, new Date().toISOString() + '-' + file.originalName)
    }
})

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})