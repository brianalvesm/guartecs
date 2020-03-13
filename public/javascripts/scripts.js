$(document).ready(function(){

  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});

	(function ($) {
		$('.owl-heroslider').owlCarousel({
	    items:1,
	    margin:10,
	    loop:true,
	    nav:true,
	    autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true
		});

    $('.owl-depoimentos').owlCarousel({
	    items:3,
	    margin:10,
	    responsive : {
			  // breakpoint from 0 up
			  0 : {
			  		items:1,
			  		center:true,
			  		loop:true,
			  		stagePadding: 60
			  },
			  // breakpoint from 1024 up
			  1024 : {
			  		items:3,
			      center:false,
			  		loop:false
			  }
			}
    });
  })(jQuery);

	var removeFloat = function() {
		if ($(window).width() < 640) {
			$('.remove-float-left-mobile').removeClass('float-left');
			$('.remove-float-right-mobile').removeClass('float-right');
		} else {
			$('.remove-float-left-mobile').addClass('float-left');
			$('.remove-float-right-mobile').addClass('float-right');
		}
	};

	$(window).resize(function() {
	  removeFloat();
	});

	removeFloat();

});
