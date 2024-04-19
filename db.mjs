import mongoose from 'mongoose';

const connectDB = () => {
    mongoose.connect(process.env.DSN);
    console.log("MongoDB successfully connected.");
}

export default connectDB;