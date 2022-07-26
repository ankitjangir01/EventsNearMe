const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile_photo: {
        type: String,
        default: 'https://res.cloudinary.com/eventsnearme/image/upload/v1657774124/profile%20photos/eventsnearme-profile-photo-default_nwuhvi.png'
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', userSchema);
module.exports = User;