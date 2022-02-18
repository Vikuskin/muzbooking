const User = require('../models/Users');
const Place = require('../models/Places')

module.exports.accountContent = async (req, res) => {
    try {
        const place = await Place.findOne({
            email: req.user.email
        })
        console.log(place)
        res.status(200).json(place)
    } catch (e) {
        console.log(e)
    }
};

module.exports.accountContentUpdate = async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.user.email)
        const place = await Place.updateOne({
            email: req.user.email
        }, {
            $set: {
                city: req.body.city, 
                nameCompany: req.body.nameCompany, 
                phone: req.body.phone, 
                sphera: req.body.sphera,
                address: req.body.address,
                subway: req.body.subway,
                description: req.body.description
            }
        })
        console.log(place)
        if (place.modifiedCount) {
            const placeUpdate = await Place.findOne({ email: req.user.email })
            console.log(placeUpdate)
            res.status(200).json(placeUpdate)
        } else {
           res.status(400).json(place) 
        }
    } catch (e) {
        console.log(e)
    }
};