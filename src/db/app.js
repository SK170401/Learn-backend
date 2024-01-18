import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export const ConnnectDB = async () => {
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to MongoDB successfully !!! \n DB HOST: ${conectionInstance.connection.host}`)

    } catch (error) {
        console.log("Connection to MongoDB failed:", error);
        throw error;
    }
};

export default ConnnectDB;