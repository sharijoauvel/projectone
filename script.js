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
   

  });

}

$("#find-movie").on("click", displayMovieInfo)