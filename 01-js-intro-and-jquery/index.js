$(document).ready(function (){
	$('#sec').hide();
	$('#sec').fadeIn(2000);
	$('.alias').focus();
	$('button').click(function (){
		var nombre = $(".alias").val();
		$.get("http://bootcamp.aws.af.cm/welcome/" + nombre, respond).error(ERROR);
	});
	function respond (data) {
		$('#sec').append("<p> The server says:" + data.response + "</p>");
		/*$(this).addClass('highlighted');*/
		console.log("That's perfect wachin!");
		console.log(data);
	}

	function ERROR(){
		$('#sec').append("<p> Server Error!" + "</p>")
		$('#sec').css('color', 'red');
		console.log("¡ERROR!");
	}


		var searching = {
		q: 'Rolling Stones', type: 'album'
	};
	console.log(searching);

	function searching(searching){
		console.log('searching for...');
		console.dir(searching);


		$.ajax({
		url:'https://api.spotify.com/v1/search?' + $.param(searching), dataType: 'json',
		goodwork: function (data){
			console.dir(data);

			/*for (item in data['results']){
				$('#h2').append('<li>' + data['results'][item]['text'] + '</li>');
			}*/
		}});

		$.ajax({method: "GET", url: "https://api.spotify.com/v1/search?q=Rolling%20Stones&type=album"}).done(function(msg){console.log(msg.albums.items)});
	};

});