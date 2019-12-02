/*
Template Name: Resume. - Personal CV/Resume & vCard Template
Author       : theme_crazy
Version      : 1.0
*/

(function($)
{
	
	"use strict";
	

	// Author Contact Tooltip 
	$('[data-toggle="tooltip"]').tooltip()
	
	// Preloader
	jQuery(window).on('load', function () {
		// preloader();

		// mCustomScrollbar
		jQuery(".header-inner").mCustomScrollbar({
			theme: "minimal-dark",
		});
		jQuery(".pt-page").mCustomScrollbar({
			theme: "minimal-dark",
		});

	});

	/*---------------------Hompage 1------------------------*/
	// Sidebar Opener
	$('#menu .mobile-menu-opener').on('click', function (e) {
		e.preventDefault();
		var div = $('#menu');
		if (div.css('left') === '-250px') {
			$('#menu').animate({
				left: '0px'
			});
		} else {
			$('#menu').animate({
				left: '-250px'
			});
		}
	});

	// Mobile Menu 
	$('#navbar li a').on('click', function (e) {
		e.preventDefault();
		if ($(window).width() < 767) {
			$('#menu').animate({
				left: '-250px'
			});
		} else {
			$('#menu').animate({
				left: '0'
			});
		}
	});

	// Content 
	$('.content').on('click', function (e) {
		//e.preventDefault();
		if ($(window).width() < 767) {
			$('#menu').animate({
				left: '-250px'
			});
		} else {
			$('#menu').animate({
				left: '0'
			});
		}
	});

	/*---------------------Hompage 2------------------------*/
	// Sidebar Opener
	$('#menu2 .mobile-menu-opener').on('click', function (e) {
		e.preventDefault();
		var div = $('#menu2');
		if (div.css('left') === '-142px') {
			$('#menu2').animate({
				left: '0px'
			});
		} else {
			$('#menu2').animate({
				left: '-142px'
			});
		}
	});

	// Mobile Menu 
	$('#navbar li a').on('click', function (e) {
		e.preventDefault();
		if ($(window).width() < 767) {
			$('#menu2').animate({
				left: '-142px'
			});
		} else {
			$('#menu2').animate({
				left: '0'
			});
		}
	});

	// Content 
	$('.content').on('click', function (e) {
		//e.preventDefault();
		if ($(window).width() < 767) {
			$('#menu2').animate({
				left: '-142px'
			});
		} else {
			$('#menu2').animate({
				left: '0'
			});
		}
	});

	


	// Language
	
	$("#skill1").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill2").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill3").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill4").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill5").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill6").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill7").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill8").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill9").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill10").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill11").barfiller({
		barColor: "#fff",
		duration: 3000,
	});
	$("#skill12").barfiller({
		barColor: "#fff",
		duration: 3000,
	});


	// Portfolio Filter 
	// Portfolio Masonary
	var $grid = $('.grid-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		}
	})
	// filter items on button click
	$('.grid-filter').on('click', 'li', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter: filterValue
		});
	});

	
	
})(jQuery);	