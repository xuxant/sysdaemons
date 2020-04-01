const express = require('express');
require('colors');

// Import Modeles for the application
const Admins = require('./model/Admins');
// Import DB Connection to the application
const connectDB = require('./db/dbConnect');

const app = express();
connectDB();
// Body Parser
app.use(express.json());

const PORT = process.env.PORT;
const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.red
  )
);
