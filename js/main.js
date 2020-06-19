$(document).ready(function() {
	//add ripples plugin
	$('#header,.info').ripples({
		dropRadius: 25,
		perturbance: 0.1
	});

	//add change class to toggler btn
	$('.navbar-toggler').click(function() {
		$('.navbar-toggler').toggleClass('change');
	});

	//window scroll to section
	$(window).scroll(function() {
		let position = $(this).scrollTop();
		if (position >= 550) {
			$('.navbar').addClass('navbar-background');
			$('.navbar').addClass('fixed-top');
		} else {
			$('.navbar').removeClass('navbar-background');
			$('.navbar').removeClass('fixed-top');
		}
	});

	//smooth scroll
	$('.nav-item a, .header-link, #back-to-top').click(function(link) {
		link.preventDefault();
		let target = $(this).attr('href');
		$('html, body').stop().animate(
			{
				scrollTop: $(target).offset().top - 25
			},
			2000
		);
	});

	//window scroll (back to top btn)
	$(window).scroll(function() {
		let position = $(this).scrollTop();
		console.log(position);
		if (position >= 550) {
			$('#back-to-top').addClass('scrollTop');
		} else {
			$('#back-to-top').removeClass('scrollTop');
		}
	});

	//add magnific popup plugin
	$('.parent-container').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		// other options
		gallery: {
			// options for gallery
			enabled: true
		}
	});
});
