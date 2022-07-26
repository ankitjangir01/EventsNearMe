const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    poster: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    PIN: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Event = mongoose.model('events', eventSchema);
module.exports = Event;