const Place = require('../models/Places')
const Platform = require('../models/Platforms')

module.exports.catalogPlace = async (req, res) => {
    const place = await Place.findOne({ _id: req.query.id })
    console.log(place)
    const platforms = await Platform.find({ placeId: place._id })
    res.status(200).json({place: place, platforms: platforms})
};