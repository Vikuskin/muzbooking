const User = require('../models/Users');
const Place = require('../models/Places');
const Platform = require('../models/Platforms');
const fs = require('fs')

module.exports.accountContent = async (req, res) => {
    try {
        const place = await Place.findOne({
            email: req.user.email
        })
        const platform = await Platform.find({
            placeId: place._id
        })
        res.status(200).json({place: place, platform: platform})
    } catch (e) {
        console.log(e)
    }
};

module.exports.accountContentUpdate = async (req, res) => {
    try {
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
        if (place.modifiedCount) {
            const placeUpdate = await Place.findOne({ email: req.user.email })
            res.status(200).json(placeUpdate)
        } else {
           res.status(400).json(place) 
        }
    } catch (e) {
        console.log(e)
    }
};

module.exports.accountPlatform = async (req, res) => {
    try {
        if (req.body.idPlatform) {
            console.log(req.files)
            const platform = await Platform.findOne({
                _id: req.body.idPlatform
            })
            if (platform.images[0]) {
                platform.images.map(file => {
                    console.log(file.path)
                    fs.unlinkSync(file.path)
                })  
            }
            const updatePlatform = await Platform.updateOne({
                _id: req.body.idPlatform
            }, {
                $set: {
                    namePlatform: req.body.name,
                    square: req.body.square,
                    rider: req.body.rider,
                    products: JSON.parse(req.body.products),
                    services: JSON.parse(req.body.services),
                    comfort: JSON.parse(req.body.comfort),
                    images: req.files[0] ? req.files : ''
                }
            })
            if (updatePlatform.modifiedCount) {
                const updatePlatform = await Platform.findOne({ _id: req.body.idPlatform })
                console.log('success update')
                res.status(200).json(updatePlatform)
            } else {
               res.status(400).json(updatePlatform) 
            }
        } else {
            console.log(req.files)
            const place = await Place.findOne({
                email: req.user.email
            })
            const newPlatform = new Platform({
                namePlatform: req.body.name,
                square: req.body.square,
                rider: req.body.rider,
                products: JSON.parse(req.body.products),
                services: JSON.parse(req.body.services),
                comfort: JSON.parse(req.body.comfort),
                placeId: place._id,
                images: req.files[0] ? req.files : ''
            })
            await newPlatform.save()
            res.status(200).json(newPlatform) 
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.accountPlatformDelete = async (req, res) => {
    try {
        const platform = await Platform.findOne({
            _id: req.body.id
        })
        console.log(platform.images)
        if (platform.images[0]) {
            platform.images.map(file => {
                console.log(file.path)
                fs.unlinkSync(file.path)
            })  
        }
        const platformDelete = await Platform.deleteOne({
            _id: req.body.id
        })
        if (platformDelete.deletedCount === 1) {
            res.status(200).json('Deleted')
        } 
    } catch (e) {
        console.log(e)
    }
}