const mongoose = require('mongoose');
const colors = require("colors")
// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to database at ${mongoose.connection.host}`. bgWhite);
    } catch (error) {
        console.log('Database connection error:', error);
    }
};

module.exports = connectDB; 