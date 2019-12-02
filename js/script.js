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

	

	function getPoint(point, i, a, smoothing) {
		let cp = (current, previous, next, reverse) => {
			let p = previous || current,
				n = next || current,
				o = {
					length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
					angle: Math.atan2(n[1] - p[1], n[0] - p[0])
				},
				angle = o.angle + (reverse ? Math.PI : 0),
				length = o.length * smoothing;
			return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
		},
			cps = cp(a[i - 1], a[i - 2], point, false),
			cpe = cp(point, a[i - 1], a[i + 1], true);
		return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
	}

	function getPath(update, smoothing, pointsNew) {
		let points = pointsNew ? pointsNew : [
			[4, 12],
			[12, update],
			[20, 12]
		],
			d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
		return `<path d="${d}" />`;
	}


	// GMaps
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