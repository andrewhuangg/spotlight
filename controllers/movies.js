const Movie = require('../models/movie');

// @desc      Create movie
// @route     POST /api/movies
// @access    Private

exports.createMovie = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const movieExists = await Movie.findOne({ title: req.body.title });
      if (movieExists) {
        return res.status(400).json({ error: 'momvie already exists' });
      }

      if (!movieExists) {
        const newMovie = await Movie.create(req.body);
        res.status(200).json(newMovie);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc      Update movie
// @route     PUT /api/movies/:id
// @access    Private

exports.updateMovie = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(400).json({ error: 'movie does not exist' });
      }
      if (movie) {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedMovie);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc      Delete movie
// @route     DELETE /api/movies/:id
// @access    Private

exports.deleteMovie = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json({ error: 'movie deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc      Fetch movie
// @route     GET /api/movies/:id
// @access    Private

exports.getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(400).json({ error: 'movie does not exist' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc      Fetch random movies or series
// @route     GET /api/movies/random | /api/movies/random?type=series
// @access    Private

exports.getRandomMovies = async (req, res, next) => {
  try {
    const type = req.query.type;
    let movie;
    if (type === 'series') {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } }, //return one random series
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } }, //return one random movie
      ]);
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc      Fetch all movies
// @route     GET /api/movies
// @access    Private

exports.getMovies = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const movies = await Movie.find();
      res.status(200).json(movies);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
