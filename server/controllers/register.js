const bcrypt = require('bcryptjs')
const User = require('../models/Users');
const Place = require('../models/Places');
const errorHandler = require('../utils/errorHandler')

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
        res.status(409).json({
            message: 'Такой email уже существует.'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email, 
            password: bcrypt.hashSync(password, salt),
        })
        try {
            await user.save(async () => {
                const place = new Place({
                    city: req.body.city, 
                    nameCompany: req.body.nameCompany, 
                    phone: req.body.phone, 
                    sphera: req.body.sphera,
                    address: req.body.address,
                    subway: req.body.subway,
                    description: '',
                    email: req.body.email,
                    userId: user._id,
                    timetable: '',
                    price: 0
                })
                try {
                    await place.save()
                    res.status(201).json(user) 
                } catch (e) {
                    errorHandler(res, e)
                }
            })
        } catch(e) {
            errorHandler(res, e)
        }
        
    }
};
