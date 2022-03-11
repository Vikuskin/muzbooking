const User = require('../models/Users');
const Place = require('../models/Places');
const Platform = require('../models/Platforms');
const Booking = require('../models/Booking');
const fs = require('fs');

module.exports.accountContent = async (req, res) => {
    try {
        const place = await Place.findOne({
            email: req.user.email,
        });
        const platform = await Platform.find({
            placeId: place._id,
        });
        res.status(200).json({ place: place, platform: platform });
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: 'Контент не найден' });
    }
};

module.exports.accountContentUpdate = async (req, res) => {
    try {
        const place = await Place.updateOne(
            {
                email: req.user.email,
            },
            {
                $set: {
                    city: req.body.city,
                    nameCompany: req.body.nameCompany,
                    phone: req.body.phone,
                    sphera: req.body.sphera,
                    address: req.body.address,
                    subway: req.body.subway,
                    description: req.body.description,
                    timetable: req.body.timetable,
                    price: req.body.price,
                },
            }
        );
        if (place.modifiedCount) {
            const placeUpdate = await Place.findOne({ email: req.user.email });
            res.status(200).json(placeUpdate);
        } else {
            res.status(400).json({ message: 'Ошибка при обновлении' });
        }
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: e });
    }
};

module.exports.accountPlatform = async (req, res) => {
    try {
        if (req.body.idPlatform) {
            const platform = await Platform.findOne({
                _id: req.body.idPlatform,
            });
            if (platform.images[0]) {
                platform.images.map((file) => {
                    fs.unlinkSync(file.path);
                });
            }
            if (req.files[0]) {
                await Place.updateOne(
                    {
                        email: req.user.email,
                    },
                    {
                        $set: {
                            images: req.files,
                        },
                    }
                );
            }
            const updatePlatform = await Platform.updateOne(
                {
                    _id: req.body.idPlatform,
                },
                {
                    $set: {
                        namePlatform: req.body.name,
                        square: req.body.square,
                        rider: req.body.rider,
                        products: JSON.parse(req.body.products),
                        services: JSON.parse(req.body.services),
                        comfort: JSON.parse(req.body.comfort),
                        images: req.files[0] ? req.files : '',
                    },
                }
            );
            if (updatePlatform.modifiedCount) {
                const updatePlatform = await Platform.findOne({
                    _id: req.body.idPlatform,
                });
                res.status(200).json(updatePlatform);
            } else {
                res.status(400).json({ message: 'Ошибка при обновлении' });
            }
        } else {
            try {
                const place = await Place.findOne({
                    email: req.user.email,
                });
                if (req.files[0]) {
                    await Place.updateOne(
                        {
                            email: req.user.email,
                        },
                        {
                            $set: {
                                images: req.files,
                            },
                        }
                    );
                }

                const newPlatform = new Platform({
                    namePlatform: req.body.name,
                    square: req.body.square,
                    rider: req.body.rider,
                    products: JSON.parse(req.body.products),
                    services: JSON.parse(req.body.services),
                    comfort: JSON.parse(req.body.comfort),
                    placeId: place._id,
                    images: req.files[0] ? req.files : '',
                });
                await newPlatform.save();
                res.status(200).json(newPlatform);
            } catch (e) {
                console.group(e);
                res.status(400).json({ message: e });
            }
        }
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: e });
    }
};

module.exports.accountPlatformDelete = async (req, res) => {
    try {
        const platform = await Platform.findOne({
            _id: req.body.id,
        });
        if (platform.images[0]) {
            platform.images.map((file) => {
                fs.unlinkSync(file.path);
            });
        }
        const platformDelete = await Platform.deleteOne({
            _id: req.body.id,
        });
        if (platformDelete.deletedCount === 1) {
            res.status(200).json('Deleted');
        }
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: e });
    }
};

module.exports.accountOrders = async (req, res) => {
    console.log('111')
    try {
        const place = await Place.findOne({
            email: req.user.email,
        });
        const booking = await Booking.find({
            placeId: place._id
        })
        res.status(200).json({booking: booking, place: place});
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: e });
    }
};
