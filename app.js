$(document).ready(function(){
	
/*Add item when button is clicked*/

	$("submit").click(function(){
		var item = $("inputfield").val();
		$('ul').append('<li>'+item+'</li>');
	});


});