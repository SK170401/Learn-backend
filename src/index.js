import dotenv from 'dotenv';
import ConnnectDB from './db/app.js';

dotenv.config({
    path: './env'
})

ConnnectDB();