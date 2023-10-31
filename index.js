const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const Movie = require('./models/movies');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('', routes);

app.get('', (req, res) => {
    res.send('API works!, from movies');
})

const mongoURL = process.env.Mongo_URI;

mongoose.connect(mongoURL).then(() =>{
    app.listen(3000, () => {
        console.log('app is running...');
    })
}).catch(err => {
    console.log('Error connecting to the database...', err);
});


app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'There was an issue getting the movies.'
        });
    }
});

app.post('/movies', async (req, res) => {
    const movieData = req.body;
    try {
        const movie = new Movie(movieData);
        await movie.save();
        res.status(201).json(movie);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: 'There was an error creating the movie.'
        });
    }
});
