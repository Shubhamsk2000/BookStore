import mongoose from 'mongoose';
import 'dotenv/config';
const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.log(err);
        throw err;
    }
}
export default connectDB;