// import express from 'express'
// import dotenv from 'dotenv'
// import databaseConnection from './config/database.js';
// import cookieParser from 'cookie-parser';
// import userRoute from './routes/userRoute.js'
// import tweetRoute from './routes/tweetRoute.js'
// import cors from 'cors'
// import path from 'path'

// dotenv.config({
//     path : ".env"
// })


// databaseConnection();
// const app = express();

// const _dirname = path.resolve();

// // middleware
 
// app.use(express.urlencoded({
//     extended : true
// }));
// app.use(express.json());
// app.use(cookieParser());

// const corsOptions = {
//     origin : "http://localhost:5173",
//     credentials  : true
// }

// app.use(cors(corsOptions))

// //ApI

// app.use("/api/v1/user" ,userRoute);
// app.use("/api/v1/tweet" ,tweetRoute);

// app.use(express.static(path.join(_dirname, '/Frontend/dist')))
// app.get('*' ,(req,res) =>{
//     res.sendFile(path.resolve(_dirname,"Frontend", "dist", "index.html"))
// })




// app.listen(process.env.PORT, ()=>{
//     console.log(`Server is started at port ${process.env.PORT}`);
    
// })


import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './config/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import tweetRoute from './routes/tweetRoute.js';
import cors from 'cors';
import path from 'path';

// Load environment variables
dotenv.config({
    path: '.env',
});

// Initialize database connection
databaseConnection();

// Initialize Express app
const app = express();

// Correct usage of __dirname (note the double underscores)
const __dirname = path.resolve();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

// API routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/tweet', tweetRoute);

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Catch-all route to serve the index.html file for React Router
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is started at port ${process.env.PORT}`);
});
