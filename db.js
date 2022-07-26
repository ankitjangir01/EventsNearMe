require('dotenv').config();
const mongoose = require('mongoose');

const connectToMongo = () => {
    const uri = process.env.MONGO_URI;
    try{
    mongoose.connect(uri, () => {
        console.log('connected to database successfully');
    })}
    catch(err){
        if(err) console.log('database connection failed');
    }
}

module.exports = connectToMongo;