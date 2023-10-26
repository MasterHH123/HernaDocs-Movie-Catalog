const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

app.get('', (req, res) => {
    res.send('API works!');
})

const mongoURL = 'mongodb+srv://Niffy:m20RKPaDjecybcVL@cluster0.hzp6hgv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURL).then(() =>{
    app.listen(3000, () => {
        console.log('app is running...');
    })
}).catch(err => {
    console.log('Error connecting to the database...', err);
})

