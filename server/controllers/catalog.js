const Place = require('../models/Places');
const Platform = require('../models/Platforms');

module.exports.catalogPlace = async (req, res) => {
    try {
        const place = await Place.findOne({ _id: req.query.id });
        try {
            const platforms = await Platform.find({ placeId: place._id });
            res.status(200).json({ place: place, platforms: platforms });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Площадки объекта не найдены' });
        }
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: 'Такого объекта не существует' });
    }
};
