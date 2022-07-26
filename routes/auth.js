require('dotenv').config();
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

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
        const file = req.files.profile_photo;
        let file_url;
        await cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
            // console.log(result);
            file_url = result.url;
        })

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success: success, error: "user with this email already exists" });
        }

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            profile_photo: file_url,
            age: req.body.age,
            password: req.body.password
        });
        success = true;
        res.json({ success });
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ success: success, error: "internal server error" });
    }
})


module.exports = router;