const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placesSchema = new Schema({
    userId: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }, 
    nameCompany: {
        type: String,
        required: true
    },
    phone: {
        type: Array,
        required: true
    },
    sphera: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    subway: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    images: {
        type: Array
    },
    timetable: {
        type: String,
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model('places', placesSchema)