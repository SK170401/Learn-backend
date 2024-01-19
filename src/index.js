import dotenv from 'dotenv';
import ConnectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './env'
})

ConnectDB()
    .then(() => {
        app.on('Erorr', () => {
            console.log(`Server could't connect to ${process.env.PORT} due to an error`)
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️  Server listening on ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("Connection to database failed"), error
    })