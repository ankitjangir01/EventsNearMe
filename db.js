require('dotenv').config();
const mongoose = require('mongoose');

const connectToMongo = () => {
    const uri = process.env.MONGO_URI;
    try {
        mongoose.connect(uri, () => {
            console.log('connected to database successfully');
            console.log(mongoose.connection.readyState)
        })
    }
    catch (err) {
        console.log('database connection failed, error: ' + err);
    }
}

module.exports = connectToMongo;