require('dotenv').config();
const express = require('express');
const Event = require('../models/Event');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'eventsnearme',
    api_key: process.env.CLDNRY_API_KEY,
    api_secret: process.env.CLDNRY_API_SECRET
});

//-----------------get all events api--------------------
router.get('/allevents', async (req, res) => {
    let success = false;
    try {
        console.log("fetching all events");
        const allevents = await Event.find({});
        success = true;
        res.json({ success, allevents });
    }
    catch (err) {
        res.status(400).json({ success: success, error: "no events found" });
    }
})

//----------------------get specific event from _id ----------------------------
router.post('/geteventbyid', async (req, res) => {
    let success = false;
    try {
        const event = await Event.find({'_id': req.body.eventid});
        success = true;
        res.json({ success, event });
    }
    catch (err) {
        res.status(400).json({ success: success, error: "no event found" });
    }
})


//------------------------add event-------------------------------------
router.post('/addevent', async (req, res) => {
    let success = false;
    try {
        let event_poster_url = 'https://res.cloudinary.com/eventsnearme/image/upload/v1658493187/events-posters/addevents-default-poster_n7xzco.jpg';
        if (req.files) {
            let image = req.files.eventPoster;
            await cloudinary.uploader.upload(image.tempFilePath, { folder: "events-posters" }, (err, result) => {
                if (err) res.send("error uploading event poster");
                event_poster_url = result.secure_url;
            })
        }
        const event = new Event({
            poster: event_poster_url,
            title: req.body.title,
            description: req.body.description,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            PIN: req.body.PIN,
            country: req.body.country,
            days: req.body.days,
            date: req.body.date
        });
        await event.save();
        success = true;
        res.redirect(302, '/');
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ 'success': success, 'error': 'internal server error' });
    }
})

//----------------------------search event based on location----------------------------------
router.post('/searchevent', async (req, res) => {
    let success = false;
    try {
        const searchResult = await Event.find({'city': req.body.city});
        success = true;
        res.json({success, searchResult});
    } catch (error) {
        res.status(400).json({success, error});
    }
})


module.exports = router;