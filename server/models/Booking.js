const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    placeId: {
        ref: 'places',
        type: Schema.Types.ObjectId,
    },
    platformId: {
        ref: 'platforms',
        type: Schema.Types.ObjectId,
    },
    product: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    nameClient: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    namePlatform: {
        type: String,
    },
});

module.exports = mongoose.model('booking', bookingSchema);
