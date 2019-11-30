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

	// Skill Area 
	$(function () {
		$(".my-progress-bar1").circularProgress({		
			width: "150px",
			height: "150px",
			line_width: 8,
			color: "#F9CA2B", 
			starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
			percent: 0, // percent starts from
			percentage: true,
			text: "",
		}).circularProgress('animate', 80, 5000);
		
		$(".my-progress-bar2").circularProgress({	
			width: "150px",
			height: "150px",
			line_width: 8,
			color: "#F9CA2B", 
			starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
			percent: 0, // percent starts from
			percentage: true,
			text: ""
		}).circularProgress('animate', 75, 5000);

		$(".my-progress-bar3").circularProgress({		
			width: "150px",
			height: "150px",
			line_width: 8,
			color: "#F9CA2B", 
			starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
			percent: 0, // percent starts from
			percentage: true,
			text: ""
		}).circularProgress('animate', 65, 5000);

		$(".my-progress-bar4").circularProgress({	
			width: "150px",
			height: "150px",
			line_width: 8,
			color: "#F9CA2B", 
			starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
			percent: 0, // percent starts from
			percentage: true,
			text: ""
		}).circularProgress('animate', 70, 5000);

		$(".my-progress-bar5").circularProgress({	
			width: "250px",
			height: "250px",
			line_width: 6,
			color: "#F9CA2B", 
			starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
			percent: 0, // percent starts from
			percentage: true,
			text: "Interface Design"
		}).circularProgress('animate', 95, 5000);

		$(".my-progress-bar6").circularProgress({	
			width: "250px",
			height: "250px",
			line_width: 6,
			color: "#F9CA2B", 
			starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
			percent: 0, // percent starts from
			percentage: true,
			text: "Prototype"
		}).circularProgress('animate', 85, 5000);

		$(".my-progress-bar7").circularProgress({	
			width: "250px",
			height: "250px",
			line_width: 6,
			color: "#F9CA2B", 
			starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
			percent: 0, // percent starts from
			percentage: true,
			text: "Photography"
		}).circularProgress('animate', 75, 5000);

		$(".my-progress-bar8").circularProgress({	
			width: "250px",
			height: "250px",
			line_width: 6,
			color: "#F9CA2B", 
			starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
			percent: 0, // percent starts from
			percentage: true,
			text: "Brainstorming"
		}).circularProgress('animate', 65, 5000);
		
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

	function basicmap() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.6700, -73.9400), // New York
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
		};
		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('contact-map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.6700, -73.9400),
			map: map,
			title: 'Cryptox'
		});
	}
	if ($('#contact-map').length != 0) {
		google.maps.event.addDomListener(window, 'load', basicmap);
	}
		
	
})(jQuery);	