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
		$(this).addClass('highlighted');
		console.log("That's perfect wachin!");
		console.log(data);
	}

	function ERROR(){
		$('#sec').append("<p> Server Error!" + "</p>")
		$('#sec').css('color', 'red');
		console.log("¡ERROR!");
	}



	$('#sec').click(function(){
		var searching = {
		q: 'Rolling Stones', type: 'album'
	};
	console.log(searching);
	});



	$.ajax({
		url:'https://api.spotify.com/v1/search?' + $.param(searching), dataType: 'json',
		goodwork: function (data){
			console.dir(data);
		}
	});
	.error(ERRORR);
});