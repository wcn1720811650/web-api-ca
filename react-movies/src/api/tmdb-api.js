export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response)=>{
      if(!response.ok) {
        return response.json().then((error)=>{
          throw new Error(error.status_message || "Something went wrong")
        });
      }
      return response.json();
    })
    .catch((error)=>{
      throw error
    });
  };
  
  export const getMovie = (args) => {
    const [, idpart] = args.queryKey;
    const {id} = idpart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong ");
          });
        }
        return response.json();
    })
    .catch((error)=>{
      throw error
    });
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) =>{
      if (!response.ok) {
        return response.json().then((error)=>{
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
      .catch((error)=>{
        throw error
      });
  };
  
  export const getMovieImages = ({queryKey}) => {
    const [,idPart] = queryKey;
    const {id} = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error)=>{
          throw new Error(error.status_message || "Something went wrong") 
        });
      }
      return response.json()
    })
      .catch((error)=>{
        throw error
      })
  };

  export const getMovieReviews = ({queryKey}) => {
    const [, idPart] = queryKey;
    const {id} = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((response)=>{
        if (!response.ok) {
          return response.json().then((error)=>{
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json()
      })
      .catch((error)=>{
        throw error
      });
  };

  export const getMovieRecommendations = ({queryKey}) => {
    console.log(queryKey);
    const [, idPart] = queryKey;
    const {id} = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((response)=>{
        if (!response.ok) {
          return response.json().then((error)=>{
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error)=>{
        throw error
      });
  };

  export const getMovieCredits = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const {id} = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getCombinedCredits = ({ queryKey }) => {
    console.log(queryKey);
    const [, idPart] = queryKey;
    const { personId } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  

  export const getTrendingMovies = ({ queryKey }) => {
    const [, {timeWindow}] = queryKey;
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((response)=>{
        if (!response.ok) {
          return response.json().then((error)=>{
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json()
      })
      .catch((error)=>{
        throw error
      });
  };

  export const getNowPlayingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((response)=>{
        if (!response.ok) {
          return response.json().then((error)=>{
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json()
      })
      .catch((error)=>{
        throw error
      });
  };

  export const getPopularMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((response)=>{
        if (!response.ok) {
          return response.json().then((error)=>{
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json()
      })
      .catch((error)=>{
        throw error
      });
  };
  

  