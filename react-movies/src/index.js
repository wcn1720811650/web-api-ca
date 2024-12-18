import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import MovieRecommendationPage from "./pages/movieRecommendationPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import TredingPage from "./pages/trendingTodayPage";
import MovieCreditPage from "./pages/movieCreditPage";
import CombinedCreditsPage from "./pages/combinedCreditsPage";
import LoginPage from "./pages/loginPage"
import RegisterPage from "./pages/registerPage"

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    }
  }
})
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ConditionHeader/>
        <MoviesContextProvider>
        <Routes>
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/credits/:id" element={ <MovieCreditPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/trending/:timeWindow" element={<TredingPage />} />
          <Route path="/recommendations/:recommendationId" element={<MovieRecommendationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/login" /> } />
          <Route path="/" element={<Navigate to="/login" />}/>
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/nowplaying" element={<NowPlayingMoviesPage />} />
          <Route path="/movies/popular" element={<PopularMoviesPage />} />
          <Route path="/person/:id/combined_credits" element={<CombinedCreditsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const ConditionHeader = () =>{
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }
  return <SiteHeader/>
}
const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);