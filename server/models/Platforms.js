const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const platformsSchema = new Schema({
    placeId: {
        ref: 'places',
        type: Schema.Types.ObjectId,
    },
    namePlatform: {
        type: String,
        required: true,
    },
    square: {
        type: Number,
        required: true,
    },
    rider: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
    services: {
        type: Array,
    },
    comfort: {
        type: Array,
    },
    images: {
        type: Array,
    },
});

module.exports = mongoose.model('platforms', platformsSchema);
