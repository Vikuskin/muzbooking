const Place = require('../models/Places')
const Platform = require('../models/Platforms')
const Booking = require('../models/Booking')

module.exports.postBooking = async (req, res) => {
    const booking = new Booking({
        placeId: req.body.idPlace,
        platformId: req.body.idPlatform,
        namePlatform: req.body.id,
        product: req.body.chooseProduct,
        date: req.body.date,
        time: req.body.time,
        price: req.body.price,
        nameClient: req.body.name,
        comment: req.body.comment,
        phone: req.body.phone,
    })
    await booking.save()
    const place = await Place.findOne({
        _id: req.body.idPlace
    })
    const platforms = await Platform.find({ placeId: req.body.idPlatform })
    res.status(200).json({place: place, platforms: platforms})
};

module.exports.getBooking = async (req, res) => {
    const booking = await Booking.find({
        platformId: req.query.idPlatform,
        product: req.query.selectProduct
    })
    res.status(200).json(booking)
};