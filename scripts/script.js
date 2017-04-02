$(document).ready(function(){

	//Event Listener for my-img
	$('.my-img').on('mouseenter', function(){
		$(this).css('border', '2px solid #249bcb');
		$(this).css('padding','15px 15px 15px 15px');
		//change color of corresponding content
		$(this).closest('#about-me').find('.about-me-content-container').css('color', '#b5afb1');
		//$(this).closest('.row').find('.about-me-content-container').css('color', '#249bcb');
	});

	$('.my-img').on('mouseleave', function(){
		$(this).css('border', '0px solid #249bcb');
		$(this).css('padding','5px 5px 5px 5px');
		$(this).closest('#about-me').find('.about-me-content-container').css('color', '#c4dce6')
		//$(this).closest('.row').find('.about-me-content-container').css('color', '#c4dce6')
	});

});