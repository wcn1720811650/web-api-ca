import React, { useState, useEffect } from "react";
import { Alert } from "@mui/material";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )
  
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error")
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);
  
  useEffect(() => {
    if (!username || !token) return;

    const fetchFavourites = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/favourites/${username}/favourites`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        if (response.ok) {   
          const data = await response.json();
          const fetchedMovieIds = data.favourites.map((movie) => movie.id);
          setFavorites(fetchedMovieIds);
        } else {
          console.error("Failed to fetch favourites from server");
        }
      } catch (err) {
        console.error("Error fetching favourites:", err);
      }
    };

    fetchFavourites();
  }, [username, token]);
  
  const addToFavorites = async (movie) => {
    const isFavorite = favorites.includes(movie.id);
    if (isFavorite) {
      setAlertMessage("You have added this movie")
      return;
    }
      
    if (!username || !token) {
      setAlertMessage("User not logged in.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/favourites/${username}/favourites`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ 
            tmdbId: parseInt(movie.id,10) ,
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            vote_average: movie.vote_average
          }),
          
        }
      );


      if(!response.ok) {
        const errorData = await response.json();
        console.error("Server error adding favourites:", errorData);
        setAlertMessage(errorData.error || "something error")
        return;
      }
      setFavorites((prevFavs) => [...prevFavs, movie.id]);
      console.log("Movie added to favourites on server.");
      setAlertSeverity("success")
      setAlertMessage("add successfully")
      
    }catch (err){
      console.error("Network error adding favourite:", err);
      setAlertSeverity("error")
      setAlertMessage("Network error")
    }
  }
  console.log(favorites);

      
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToMustWatch = (movieId) => {
    if (!mustWatch.includes(movieId)) {
      setMustWatch((prevMovies) => {
        const updatedMovies = [...prevMovies, movieId];
        console.log(updatedMovies);
        return updatedMovies;
      });
    }
  };

  //addReview
  const addReview = async (movieId, content) => {
    if (!username || !token) {
      setAlertSeverity("error");
      setAlertMessage("User not logged in")
      return;
    }
    if (!content) {
      setAlertSeverity("error");
      setAlertMessage("Please enter review content")
    }

    try {
      const response = await fetch(`http://localhost:8080/api/reviews/${movieId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          content,
        })
      });
      if (!response) {
        const errorData = await response.json();
        setAlertSeverity("error")
        setAlertMessage(errorData.error || "Failed to add review")
        return;
      }
      const newReview = await response.json()
      console.log("New Review:", newReview);

      setAlertSeverity("success");
      setAlertMessage("Review added successfully!")
      
    } catch (error) {
      setAlertSeverity("error");
      setAlertMessage("Network error while adding review")
    }
  }

  const handleCloseAlert = () => {
    setAlertMessage("");
  };



  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        mustWatch,
        addToMustWatch,
        addReview,
      }}
    >
      {props.children}

      {alertMessage && (
        <Alert
          severity={alertSeverity}    
          onClose={handleCloseAlert} 
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
        >
          {alertMessage}
        </Alert>
      )}
    </MoviesContext.Provider>
    
  );
};

export default MoviesContextProvider;