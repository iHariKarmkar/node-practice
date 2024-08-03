const mongoose = require('mongoose')
require('dotenv').config();

// const mongoURL = 'mongodb://127.0.0.1:27017/test' // Local server
const mongoURL = process.env.MONGODB_URL  // Atlas server

// mongodb+srv://harikarmkar2014:<password>@nodepractice.v6dkr36.mongodb.net/

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to mongoDB server')
})

db.on('error', ()=>{console.log('error connecting the database')})

module.exports = db;