$(document).ready(function(){

	var button = $("#button");					   
	var audio = $('#player audio').get(0);
  
	button.mousedown(function() {
	  $(this).addClass("pressed");
    audio.load();
	  audio.play();  
	});
  
	button.mouseup(function() {
	  $(this).removeClass("pressed");
	});
});
