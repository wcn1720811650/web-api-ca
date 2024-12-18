import express from 'express';
import asyncHandler from 'express-async-handler';
import Reviews from './reviewModel.js';
import movieModel from '../movies/movieModel.js';

const router = express.Router({ mergeParams: true });

async function getMovieByTMDBId(res, id) {
  const movieId = parseInt(id, 10);
  if (Number.isNaN(movieId)) {
    res.status(400).json({ error: 'Invalid Movie ID' });
    return null;
  }

  const movie = await movieModel.findByMovieDBId(movieId);
  if (!movie) {
    res.status(404).json({ error: 'Movie not found' });
    return null;
  }

  return movie;
}


router.post('/', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { content, url } = req.body;
  
  if (!req.user || !req.user.username) {
    return res.status(401).json({ error: 'Unauthorized: no user logged in' });
  }

  if (!content) {
    return res.status(400).json({ error: 'Missing required field: content' });
  }
  if (!url) {
    return res.status(400).json({ error: 'Missing required field: url' });
  }

  const movie = await getMovieByTMDBId(res, id);
  if (!movie) return; 

  try {
    const newReview = await Reviews.create({
      author: req.user.username,  
      author_details: {
        username: req.user.username
      },
      content,
      url,
      movie: movie._id
    });

    return res.status(201).json(newReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}));



router.get('/', asyncHandler(async (req, res) => {
  try {
    const reviews = await Reviews.find();
    return res.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}));

export default router;
