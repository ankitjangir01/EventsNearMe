const path = require('path');
const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 5000;
const app = express();
connectToMongo();

//middlewares
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    limits: { fileSize: 1024*1024*2}
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/build/index.html');
})

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//------------------for hosting on heroku--------------
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
    });
   }
   //------------------for hosting-------------

app.listen(PORT, ()=>{
    console.log("listening on port " + PORT);
})