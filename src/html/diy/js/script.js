$(function(){
	$('.matchHeight').matchHeight();
});

$(function(){
	var fadeSpeed = 1500;
	$('.thumbnail').on('inview' , function(){
		$(this).animate({opacity:'1',marginTop:'0px'},fadeSpeed);
	});
});
