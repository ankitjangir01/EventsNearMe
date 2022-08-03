require('dotenv').config();
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

cloudinary.config({
    cloud_name: 'eventsnearme',
    api_key: process.env.CLDNRY_API_KEY,
    api_secret: process.env.CLDNRY_API_SECRET,
    secure: true
});

//route-1: /createuser--------------------------------
router.post('/createuser', async (req, res) => {
    let success = false;
    try {
        var file_url = 'https://res.cloudinary.com/eventsnearme/image/upload/v1657774124/profile%20photos/eventsnearme-profile-photo-default_nwuhvi.png'
        if (req.files) {
            const file = req.files.profilePhoto;
            await cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
                if (err) return err;
                file_url = result.url;
            })
        }

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success: success, error: "user with this email already exists" });
        }

        //the following line will hash the password with salt of 10 rounds
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            profile_photo: file_url,
            age: req.body.age,
            password: passwordHash
        });
        success = true;
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: success, error: "internal server error" });
    }
})

//---------------------------login
router.post('/login', async (req, res) => {
    let success = false;
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ success, error: "incorrect credentials" });
        //compare entered password with the saved password hash in database
        let compare = await bcrypt.compare(password, user.password);
        if (!compare) return res.status(400).json({ success, error: "incorrect credentials" });
        //if compare returns true, then provide user with the json web token and payload
        const payload = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(payload, process.env.JWT_SECRET);
        success = true;
        res.json({ success, authToken });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ success, error: err.message });
    }
})


module.exports = router;