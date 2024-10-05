import express from 'express';
import connectDB from './db/connectDB.js';
const app = express();
import apiRoutes from './routes/apiRoutes.js'
const PORT = 3000;

app.use(express.json());
// all routs for api 
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
})









// start the server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (err) {
        console.log("Failed to start the server ", err);
        process.exit(1); //server will not start if db connection fails
    }
}
startServer();