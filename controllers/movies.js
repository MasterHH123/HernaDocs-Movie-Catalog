//const { response } = require('express')
const movieModel = require('./../models/movies')

class MovieController {
    view(req, res) {
        movieModel.find().then(response => {
            console.log('Response: ', response);
            res.send(response)
        }).catch(e => {
            res.sendStatus(500);
            console.log('Error: ', e);
        })
    }

    async create(req, res) {
        const movieData = req.body;

        try {
            const movie = await Movie.create(movieData);
            res.status(201).json(movie);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to create a new movie.'
            });
        }
    }
}


module.exports = new MovieController();