const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cookieParser = require('cookie-parser')

dotenv.config({path: './config.env'});

// Database connection
require('./db/conn.js')

app.use(express.json());
app.use(cookieParser());

// Router 
app.use('/api/', require('./router/route'));

const PORT = process.env.PORT || 5000

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
}

app.listen(PORT, () => {console.log(`Server started at ${PORT}`)});