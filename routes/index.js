const router = require('express').Router();
const MovieController = require('../controllers/movies');
router.get('/movies', MovieController.view);



module.exports = router;