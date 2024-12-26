import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../users/userModel.js';
import Movie from '../movies/movieModel.js';

const router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (!req.user || !req.user.username) {
    return res.status(401).json({ error: 'Unauthorized: no user logged in' });
  }
  next();
}

router.post('/:username/favourites', ensureAuthenticated, asyncHandler(async (req, res) => {
  const { username } = req.params;
  const { tmdbId, title, poster_path, release_date, vote_average } = req.body;

  if (req.user.username !== username) {
    return res.status(403).json({ error: 'Forbidden: cannot modify another user\'s favourites' });
  }

  if (!tmdbId) {
    return res.status(400).json({ error: 'Missing required field: tmdbId' });
  }

  let foundMovie = await Movie.findOne({ id: parseInt(tmdbId, 10) });
  
  if (!foundMovie) {
    foundMovie = await Movie.create({
      id: parseInt(tmdbId, 10),
      title: title || "Untitled",
      poster_path: poster_path || "",
      release_date: release_date || "",
      vote_average: vote_average || 0
    })
  }


  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  if (!user.favourites) {
    user.favourites = [];
  }

  if (user.favourites.includes(foundMovie._id)) {
    return res.status(409).json({ error: 'Movie already in favourites' });
  }
  
  user.favourites.push(foundMovie._id);
  await user.save();

  return res.status(201).json({ message: 'Movie added to favourites', favourites: user.favourites });
}));

router.get('/:username/favourites',ensureAuthenticated,asyncHandler(async (req, res) => {
    const { username } = req.params;

    if (req.user.username !== username) {
      return res
        .status(403)
        .json({ error: "Forbidden: cannot read another user's favourites" });
    }

    const user = await User.findOne({ username }).populate('favourites');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ favourites: user.favourites });
  })
);

export default router;
