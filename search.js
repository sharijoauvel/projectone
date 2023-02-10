//function to display movie information on
var movieInput = $("#movie-input")
var findMovieButton = $("#find-movie")
function displayMovieInfo(event) {
  event.preventDefault()
  var movie = movieInput.val()
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=df97ab33"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    $("#poster").append("<img src='" + response.Poster +"' />")
    $("#title").text(response.Title)
    $("#year").text(response.Year)
    $("#released").text(response.Released)
    $("#plot").text(response.Plot)
    $("#actors").text(response.Actors)
    $("#rated").text(response.Rated)
    $("#director").text(response.Director)
    $("#runTime").text(response.Runtime)
    $("#genre").text(response.Genre)
    $("#language").text(response.Language)
    
     

  });

}

$("#find-movie").on("click", displayMovieInfo)

//Below functions are for recent movies
addRecentMovie({
  title: "Avatar",
  posterURL:
    "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
});
addRecentMovie({
  title: "Cars",
  posterURL:
    "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
});
addRecentMovie({
  title: "Kung Fu Panda",
  posterURL:
    "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
});
addRecentMovie({
  title: "WALL-E",
  posterURL:
    "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
});

function renderRecentMovies() {
  const recentMoviesListRow = document.getElementById("recent-movies-list-row");

  recentMoviesListRow.innerHTML = "";
  const recentMovies = getRecentMovies();
  recentMovies.forEach((movie) => {
    const movieCardHTML = `<div class="col">
      <div class="card movie-card">
        <img src="${movie.posterURL}" class="card-img-top poster" alt="${
      movie.title + " poster"
    }" />
        <div class="card-body">
          <h5 class="movie-title card-text">${movie.title}</h5>
        </div>
      </div>
    </div>`;
    recentMoviesListRow.insertAdjacentHTML("beforeend", movieCardHTML);
  });
}

window.onload = function () {
  renderRecentMovies();
};

function clearRecentMoviesAndReloadRecentMovies() {
  clearRecentMovies();
  renderRecentMovies();

  var myModalEl = document.getElementById("staticBackdrop");
  var modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();
}