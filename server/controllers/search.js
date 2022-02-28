const Place = require('../models/Places')
const Platform = require('../models/Platforms')

module.exports.searchPlaces = async (req, res) => {
    const places = await Place.find({ sphera: req.query.sphera })
    res.status(200).json(places)
};