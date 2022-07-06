const Place = require('../models/Places');
const Platform = require('../models/Platforms');

module.exports.searchPlaces = async (req, res) => {
    try {
        const places = await Place.find({ sphera: req.query.sphera });
        res.status(200).json(places);
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: 'Площадки не найдены' });
    }
};
