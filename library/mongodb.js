import mongoose from "mongoose";
require('dotenv').config();
// const Benefit = require("./../modules/benefit ");

export const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongoose connect successfully....')
    } catch (error) {
        console.log('error connect mongoose');
    }
}

export const disconnectMongoDb = async () => {
    try {
        await mongoose.disconnect();
        console.log('mongoose disconnect successfully....')
    } catch (error) {
        console.log('error disconnect mongoose')
        throw error;
    }
}
