
$('.page-scroll').on('click', function(e){
	var	target = $(this).attr('href');
	var targetElement = $(target);

	$('html, body').animate({
		scrollTop: targetElement.offset().top-58
	})
	e.preventDefault();
});