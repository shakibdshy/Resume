/*
Template Name: JUK. - Personal CV/Resume & vCard Template
Author       : theme_crazy
Version      : 1.0
*/

(function($)
{
	
	"use strict";
	// Preloader
	jQuery(window).on('load', function() {
		preloader();
		
		// mCustomScrollbar
		jQuery(".header-inner").mCustomScrollbar();
		jQuery(".pt-page").mCustomScrollbar();		
		
	});
	// Author Contact Tooltip 
	$('[data-toggle="tooltip"]').tooltip()
	
	// mCustomScrollbar
	$(window).on("load", function () {
		$(".sidebar").mCustomScrollbar();
	});
	// Sidebar Opener
	$('#menu .mobile-menu-opener').on('click', function (e) {
		e.preventDefault();
		var div = $('#menu');
		if (div.css('left') === '-220px') {
			$('#menu').animate({
				left: '0px'
			});
		} else {
			$('#menu').animate({
				left: '-220px'
			});
		}
	});

	// Mobile Menu 
	$('#navbar li a').on('click', function (e) {
		e.preventDefault();
		if ($(window).width() < 767) {
			$('#menu').animate({
				left: '-220px'
			});
		} else {
			$('#menu').animate({
				left: '0'
			});
		}
	});

	$('.content').on('click', function (e) {
		//e.preventDefault();
		if ($(window).width() < 767) {
			$('#menu').animate({
				left: '-220px'
			});
		} else {
			$('#menu').animate({
				left: '0'
			});
		}
	});

	// Portfolio Filter 
	jQuery('#filter-list button').on("click", function () {
		jQuery('#filter-list button').removeClass('active');
		jQuery(this).addClass('active');
	});
	if (jQuery('.gallery-outer .gallery-items').length > 0) {
		jQuery('.gallery-outer .gallery-items').filterizr();
	}
	// Animation section
	if(jQuery('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		}
		);
		wow.init();
	}
		

	// Preload
	function preloader(){
		jQuery(".preloaderimg").fadeOut();
		jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
			jQuery(this).remove();
		});
	}
	
})(jQuery);	