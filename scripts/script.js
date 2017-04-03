$(document).ready(function(){

	//Event Listener for my-img hover
	$('.my-img').on('mouseenter', function(){
		$(this).css('border', '2px solid #249bcb');
		$(this).css('padding','15px 15px 15px 15px');
		//change color of corresponding content and link
		$(this).closest('#about-me').find('.about-me-content-container').css('color', '#b5afb1');
		//$(this).closest('.row').find('.about-me-content-container').css('color', '#249bcb');
	});

	//Event Listener for mouseleave or default css
	$('.my-img').on('mouseleave', function(){
		$(this).css('border', '0px solid #249bcb');
		$(this).css('padding','5px 5px 5px 5px');
		$(this).closest('#about-me').find('.about-me-content-container').css('color', '#c4dce6');
		//$(this).closest('.row').find('.about-me-content-container').css('color', '#c4dce6')
	});


	//Event listener for portfolio projects
	$('.portfolio-projects').on('mouseenter', function(){
		$(this).find('.project-description').css('color', '#b5afb1');
	});

	//Event listener for mouseleave or default css
	$('.portfolio-projects').on('mouseleave', function(){
		$(this).find('.project-description').css('color', '#c4dce6');
	});


	//Event listener for contact me section
	$('.hover-container').on('mouseenter', function(){
		$(this).find('.contact-me-content').css('color', '#0e7aa9');
		$(this).find('.contact-me-extra').css('color', '#b5afb1');
	});

	$('.hover-container').on('mouseleave', function(){
		$(this).find('.contact-me-content').css('color', '#249bcb');
		$(this).find('.contact-me-extra').css('color', '#c4dce6');
	});


});