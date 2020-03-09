$(document).ready(function(){
	$('.slider-home').slick({
		autoplay: true,
		dots: true
	});

	$('.slider-depoimentos').slick({
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
		    breakpoint: 480,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1
		    }
		  }
	  ]
	});
});