import mongoose from "mongoose";
require('dotenv').config();
// const Benefit = require("./../modules/benefit ");

export const connectMongoDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://generalwilysion:RM0VuzA9au6iOLUW@cluster0.v3dzvfw.mongodb.net/new-testing?retryWrites=true&w=majority");
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
