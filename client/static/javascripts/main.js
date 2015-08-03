$(document).ready(function(){
// Initialize stellar.js for parallax effect:
	$.stellar();

// WOW.js working in conjunction with Animate.css:
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 100,
		mobile: true,
		live: true
	});
	wow.init();

// Tooltip:
	$('[data-tooltip="tooltip"]').tooltip();

// Modal:
	// Car Make
	$('.light_icons').hide();
	$('.carTog').click(function(){
		$('.light_info, .light_icons').hide();
		$('.' + $(this).data('id')).toggle();
	});

	// Make Selected
	$('.bmw_light').click(function(){
		$('#miniSelected').hide();
		$('#bmwSelected').show();
	});
	$('.mini_light').click(function(){
		$('#bmwSelected').hide();
		$('#miniSelected').show();
	});

	// Make lights
	$('.light_info').hide();
	$('.tog').click(function(){
		$('.light_info').hide();
		$('.' + $(this).data('id')).toggle();
	});

	// Clear when modal is closed
	$('[data-dismiss="modal"]').click(function(){
		$('.light_info, .light_icons, #bmwSelected, #miniSelected').hide();
	});

// For nav bar: 
	var winHeight = $(window).height(),
		showNav = winHeight - $('nav').outerHeight(true),
		animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		jello = 'animated jello';

	$(window).bind('scroll',function(){
		var navHeight = $('.nav').height();
		($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');
	});

	$(window).scroll(function(){
		var scrollVal = $(this).scrollTop();
		if(scrollVal > showNav){
			$('nav').slideDown();
		} else {
			$('nav').slideUp();
		}
	});

	$('#toTop').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1200);
	        return false;
	      }
	    }
	  });

	$('#toTop').hover(function(){
		$('#logo').addClass(jello).one(animationEnd, function(){
			$(this).removeClass(jello);
		});
	});

// Shop Reviews Carousel:
	$('#quote-carousel').carousel({
		pause: false,
		interval: 15000
	});

// Instagram feed:
	var userFeed = new Instafeed({
		get: 'user',
		userId: 1765479990,
		accessToken: '1765479990.467ede5.5373d2910670417394cfeabb0a03fdcf',
		links: true,
		sortBy: 'random',
		resolution: 'standard_resolution',
		after: function(){
			var images = $('#instafeed').find('img');
			$(images.slice(4, images.length)).remove();
			$.each(images, function(index, image){
				var delay = (index * 75) + 'ms';
				$(image).css('-webkit-animation-delay', delay);
				$(image).css('-moz-animation-delay', delay);
				$(image).css('-ms-animation-delay', delay);
				$(image).css('-o-animation-delay', delay);
				$(image).css('animation-delay', delay);
				$(image).addClass('wow fadeInRight');
			});
		},
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
	});
	userFeed.run();

});