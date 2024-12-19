import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getUpcomingMovies, getGenres, getNowPlayingMovies,
     getPopularMovies, getTrendingMovies, getCombinedCredits, 
     getMovieCredits, getMovieRecommendations, getMovieReviews } from '../tmdb-api';
import reviewsRouter from '../reviews/index.js';

const router = express.Router();

router.use('/:id/reviews', reviewsRouter);


router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));
router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));
router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/nowplaying', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));

router.get('/tmdb/popularmovies', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));

const validTimeWindows = ['day', 'week'];
router.get('/tmdb/trendingmovies/:timeWindow', asyncHandler(async (req, res) => {
    const { timeWindow } = req.params;
    if (!validTimeWindows.includes(timeWindow)) {
        return res.status(400).json({ message: 'Invalid time window. Use "day" or "week".' });
      }
    const trendingmovies = await getTrendingMovies( timeWindow );
    res.status(200).json(trendingmovies);
}));

router.get('/tmdb/person/:personId/combinedcredits', asyncHandler(async (req, res) => {
    const { personId } = req.params;
    const combinedCredits = await getCombinedCredits( personId );
    res.status(200).json(combinedCredits);
}));

router.get('/tmdb/:id/credits', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieCredits = await getMovieCredits( id );
    res.status(200).json(movieCredits);
}));

router.get('/tmdb/:id/recommendations', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieRecommendations = await getMovieRecommendations( id );
    res.status(200).json(movieRecommendations);
}));

router.get('/tmdb/:id/reviews', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieReviews = await getMovieReviews( id );
    res.status(200).json(movieReviews);
}));







export default router;