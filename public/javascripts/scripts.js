$(document).ready(function(){

  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});

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
