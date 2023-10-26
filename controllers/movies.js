//const { response } = require('express')
const movieModel = require('./movies.js')

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
}


module.exports = new MovieController();