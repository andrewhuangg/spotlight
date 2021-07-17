const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: String,
    imageHero: String,
    imageTitle: String,
    imagePin: String,
    trailer: String,
    video: String,
    year: String,
    limit: Number,
    genre: String,
    isSeries: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Movie', MovieSchema);
