const Place = require('../models/Places')

module.exports.searchPlaces = async (req, res) => {
    const places = await Place.find({ sphera: req.query.sphera })
    res.status(200).json(places)
};