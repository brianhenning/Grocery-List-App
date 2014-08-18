$(document).ready(function(){
	
/*Add item when button is clicked*/

	$('#submit').click(function(){
		var item = $('#inputfield').val();
		$('ul').append('<li>'+item+'</li>');
		$('#inputfield').val('');
	});

	$(document).keyup(function(e){
		if (e.which==13) {
			$('#submit').click();
		}
	});

/*Strike out list item when clicked*/

	$(document).on("click", "li", function() {
  		$(this).toggleClass("done");
	});

/*Remove list item when double clicked*/

	$(document).on("dblclick", "li", function() {
		$(this).fadeOut(400);
	});

/*Cursor hovers inside main div (interface)*/

	$('#interface').mouseenter(function() {
		$(this).css('background-color', '#E6CC80');
	});

/*Cursor leaves main div (interface)*/

	$('#interface').mouseleave(function() {
		$(this).css('background-color', '#CFB873');
	});

/*Clear all items off list*/

	$('#removeall').click(function() {
		$('li').remove();
	});
});