import mongoose from 'mongoose'


export const connectDB = async () => {
    try {
        const database = await mongoose.connect( process.env.MONGO_URI)
        console.log(`MongoDB connected: ${database.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}