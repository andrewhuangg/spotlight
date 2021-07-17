const express = require('express');
const {
  getRandomMovies,
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movies');
const { protect } = require('../middleware/protect');
const router = express.Router();

router.route('/random').get(protect, getRandomMovies);
router.route('/:id').get(protect, getMovie).put(protect, updateMovie).delete(protect, deleteMovie);
router.route('/').get(protect, getMovies).post(protect, createMovie);

module.exports = router;
