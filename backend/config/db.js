import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const database = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${database.connection.host}`);
        
        
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB;
