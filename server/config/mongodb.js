import mongoose, { mongo, Mongoose } from "mongoose";
// import dotenv from 'dotenv';

const connectDB = async()=>{
    mongoose.connection.on('connected',()=>{
        console.log('DataBase connected');
    })
    await  mongoose.connect(`${process.env.MONGODB_URI}/Express`)
}

export default connectDB