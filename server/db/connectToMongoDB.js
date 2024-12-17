import mongoose from 'mongoose';
const uri = 'mongodb+srv://sanranj591:Esgv4771@cluster0.92myo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectToMongoDB = async () => {
    try {
    
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
       
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectToMongoDB;
