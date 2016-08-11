$(document).ready(function(){

var topics = ['Tin Cup', 'Major Leauge', 'The Sandlot', 'A League of Their Own', 'Rudy', 'Jerry Maguire', 'White Men Can\'t Jump', 'Moneyball', 'Any Given Sunday', 'Space Jam', 'Happy Gilmore'];

function createButtons() {
	$('#movieButtons').empty();

	for (var i = 0; i < topics.length; i++) {
		var a = $('<button>')
		a.addClass('topic');
		a.attr('data-name', topics[i]);
		a.text(topics[i]);
		$('#movieButtons').append(a);
	}
}

$('#addMovie').on('click', function(){
	var movie = $('#movieInput').val().trim();
	topics.push(movie);
	createButtons();
	$('.topic').on('click', function() {

	$('#movies').empty();
	var movie = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg-13";

	$.ajax({
		url: queryURL,
		method: 'GET'
	})
	.done(function(response) {

		var results = response.data;

		for (var i = 0; i < results.length; i++) {
			var $movieDiv = $('<div>')
			var $text = $('<h2>').text("Rating: " + results[i].rating)
			var $movieImage = $('<img>')
			$movieImage.attr('src', results[i].images.fixed_height.url)
			$movieImage.attr('data-still', results[i].images.fixed_height_still.url)
			$movieImage.attr('data-animate', results[i].images.fixed_height.url)
			$movieImage.addClass('movieImage')

			$movieDiv.append($text)
			$movieDiv.append($movieImage)

			$('#movies').prepend($movieDiv)
		}

		$('.movieImage').on('click', function() {
			var $still = $(this).attr('data-still');
			var $animate = $(this).attr('data-animate');
			var $src = $(this).attr('src');

			if ($src === $animate) {
				$(this).attr('src', $still) 
			} else {
				$(this).attr('src', $animate)
			}

		});

	});

	});
	return false;
})

createButtons();

$('.topic').on('click', function() {

	$('#movies').empty();
	var movie = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg-13";

	$.ajax({
		url: queryURL,
		method: 'GET'
	})
	.done(function(response) {

		var results = response.data;

		for (var i = 0; i < results.length; i++) {
			var $movieDiv = $('<div>')
			var $text = $('<h2>').text("Rating: " + results[i].rating)
			var $movieImage = $('<img>')
			$movieImage.attr('src', results[i].images.fixed_height.url)
			$movieImage.attr('data-still', results[i].images.fixed_height_still.url)
			$movieImage.attr('data-animate', results[i].images.fixed_height.url)
			$movieImage.addClass('movieImage')

			$movieDiv.append($text)
			$movieDiv.append($movieImage)

			$('#movies').prepend($movieDiv)
		}

		$('.movieImage').on('click', function() {
			var $still = $(this).attr('data-still');
			var $animate = $(this).attr('data-animate');
			var $src = $(this).attr('src');

			if ($src === $animate) {
				$(this).attr('src', $still) 
			} else {
				$(this).attr('src', $animate)
			}

		});

	});

	});

});