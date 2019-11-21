/*
Template Name: JUK. - Personal CV/Resume & vCard Template
Author       : theme_crazy
Version      : 1.0
*/

(function($)
{
	
	"use strict";
	// Preloader
	// jQuery(window).on('load', function() {
	// 	preloader();
		
	// 	// mCustomScrollbar
	// 	jQuery(".header-inner").mCustomScrollbar();
	// 	jQuery(".pt-page").mCustomScrollbar();		
		
	// });

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

	// Skill Area 
	new WOW().init();

	// Language
	$("#english").percircle();
	$("#french").percircle();
	$("#arabic").percircle();
	$("#bengali").percircle();
	$("#design").percircle();
	$("#prototype").percircle();
	$("#photography").percircle();
	$("#brainstorming").percircle();
	$("#creative").percircle();


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