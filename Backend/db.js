import chalk from "chalk";
import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`--------- connected to DB host ${conn.connection.host} ---------`)
        
    } catch (error) {
        console.log(chalk.black.bgRed(`Error in DB ${process.env.MONGO_URL}`));
    }
} 

export default connectDB;