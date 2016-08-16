/*=========================================
=            Create Bundle CSS            =
=========================================*/
//anything imported into bundle.scss is but into dist/bundle.scss
//you probably don't ever need to touch this.
require('../scss/bundle.scss');


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
require('./_navigation.js');
require('./_slider.js');


// TODO - Use NPM or BOWER
// Hammer js
