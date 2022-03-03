const Place = require('../models/Places')
const Platform = require('../models/Platforms')
const Booking = require('../models/Booking')

module.exports.postBooking = async (req, res) => {
    console.log(req.body)
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
    res.status(200).json(booking)
};