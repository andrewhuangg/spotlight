const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const connectDB = require('./config/db');

// LOAD ENV VARS
dotenv.config({ path: './config/config.env' });

// CONNECT TO DATABASE
connectDB();

// LOAD ROUTERS
const auth = require('./routes/auth');
const users = require('./routes/users');
const app = express();

// EXPRESS MIDDLEWARE
app.use(express.json());

// MOUNT ROUTERS
app.use('/api/auth', auth);
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
