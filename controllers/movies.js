//const { response } = require('express')
const movieModel = require('./../models/movies')

class MovieController {
    view(req, res) {
        movieModel.find().then(movies => {
            res.json(movies);
        }).catch(e => {
            console.error(e);
            res.status(500).json({
                error: 'There was an issue getting the movies.'
            });
        });
    }

    async create(req, res) {
        const movieData = req.body;

        try {
            const movie = new movieModel(movieData);
            await movie.save();
            res.status(201).json(movie);
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error: 'There was an error creating the movie.'
            });
        }
    }
}


module.exports = new MovieController();