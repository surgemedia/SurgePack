/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/*=========================================
	=            Create Bundle CSS            =
	=========================================*/
	//anything imported into bundle.scss is but into dist/bundle.scss
	//you probably don't ever need to touch this.
	__webpack_require__(1);


	/*========================================
	=            Create Bundle.js            =
	========================================*/
	//anything included below will be included in the bundle.js
	var bower_dir = '../../bower_components/';
	var node_dir = '../../node_modules/';

	//NPM

	//Bower
	import $ from 'jquery';
	// var bootstrap = require("bootstrap");
	import owlCarousel from "owl-carousel-2-beta";




	//CUSTOM
	__webpack_require__(46);
	__webpack_require__(47);


	// TODO - Use NPM or BOWER
	// Hammer js


/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 46:
/***/ function(module, exports) {

	/*=============================================
	= Enabling multi-level navigation =
	===============================================*/
	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
	  event.preventDefault();
	  event.stopPropagation();
	  $(this).parent().siblings().removeClass('open');
	  $(this).parent().toggleClass('open');
	});


/***/ },

/***/ 47:
/***/ function(module, exports) {

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});


/***/ }

/******/ });