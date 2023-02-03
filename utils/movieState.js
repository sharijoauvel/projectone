const MOVIES_KEY = "movies";

function getIndexByMovieTitle(movieTitle, recentMovies){
for (let index = 0; index < recentMovies.length; index++) {
  const movie = recentMovies[index];
  if(movieTitle === movie.title){
    return index;
  } 
}
return -1;
}

/**
 * 
 * @param {*} movie - object contains movie title and poster. e.g. { title: "Avatar", posterURL: "http://abc.com/img.jpeg" }
 */
function addRecentMovie(movie) {
  const recentMoviesJSON = localStorage.getItem(MOVIES_KEY);
  if (recentMoviesJSON === null) {
    const recentMovies = [movie];
    localStorage.setItem(MOVIES_KEY, JSON.stringify(recentMovies));
  } else {
    const recentMovies = JSON.parse(recentMoviesJSON);
    // Remove movie, if already exists
    const movieIndex = getIndexByMovieTitle(movie.title, recentMovies);
    if(movieIndex > -1){
      recentMovies.splice(movieIndex, 1);
    }
    // List should contain only 4 movies
    recentMovies.unshift(movie);
    localStorage.setItem(MOVIES_KEY, JSON.stringify(recentMovies.slice(0,4)));
  }
}

/**
 * 
 * @returns Array of recent movies. e.g. [ { title: "Avatar", posterURL: "http://abc.com/img.jpeg"} ]
 */
function getRecentMovies() {
  const recentMovies = localStorage.getItem(MOVIES_KEY);
  if (recentMovies === null) {
    return [];
  } else {
    return JSON.parse(recentMovies);
  }
}

/**
 * Clears recent movies list from local storage
 */
function clearRecentMovies() {
    localStorage.removeItem(MOVIES_KEY);
}
