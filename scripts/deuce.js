$(document).ready(function(){

  var mobile = (navigator.userAgent.match(/Android/i) || 
                navigator.userAgent.match(/webOS/i) ||
		            navigator.userAgent.match(/iPhone/i) ||
		            navigator.userAgent.match(/iPod/i) ||
		            navigator.userAgent.match(/BlackBerry/));
	var button = $("#button");					   
	var audio = $('#player audio').get(0);
  
	button.mousedown(function() {
	  $(this).addClass("pressed");
    if (mobile) {
      audio.load();
    }
	  audio.play();  
	});
  
	button.mouseup(function() {
	  $(this).removeClass("pressed");
	});
});
