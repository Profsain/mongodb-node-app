const express = require('express'); // import express
const { connectToDb, getDb } = require('./db'); // import connectToDb and getDb from db.js

const app = express(); // create express app and middleware

let database; // hold database from connection

// connect to mongodb
connectToDb((err) => {
    if (!err) {
        // start express server
        app.listen(3000, () => {
            console.log('Server started at port 3000');
        });
        
        // update database
        database = getDb();
    }
});

// routes

app.get('/books', (req, res) => {
    res.json({message: 'Welcome. All books here'})
});
