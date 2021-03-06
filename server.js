const morgan = require('morgan');
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
const movies = require('./routes/movies');
const lists = require('./routes/lists');
const app = express();

// EXPRESS MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

// MOUNT ROUTERS
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/movies', movies);
app.use('/api/lists', lists);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
