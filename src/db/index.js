import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const ConnectDB = async () => {
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected to MongoDB successfully !!! \n DB HOST: ${conectionInstance.connection.host}`)

    } catch (error) {
        console.log("Connection to MongoDB failed:", error);
        process.exit(1);
    }
};

export default ConnectDB;