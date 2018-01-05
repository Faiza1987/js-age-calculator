(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgeCalculator = exports.AgeCalculator = function () {
  function AgeCalculator(born, gender, region) {
    _classCallCheck(this, AgeCalculator);

    this.born = born;
    this.gender = gender;
    this.region = region;

    var birthdate = this.born.split("-");
    var userYear = parseInt(birthdate[0]);
    var userDay = parseInt(birthdate[1]);
    var userMonth = parseInt(birthdate[2]);

    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1;
    var currentDay = today.getDate();

    this.ageInSeconds = (currentYear - userYear) * 31536000 + (currentMonth - userMonth) * 2592000 + (currentDay - userDay) * 86400;
  }

  _createClass(AgeCalculator, [{
    key: "mercuryAge",
    value: function mercuryAge() {
      var mercuryYearSeconds = 0.24 * 31536000;
      return Math.floor(this.ageInSeconds / mercuryYearSeconds);
    }
  }, {
    key: "venusAge",
    value: function venusAge() {
      var venusYearSeconds = 0.62 * 31536000;
      return Math.floor(this.ageInSeconds / venusYearSeconds);
    }
  }, {
    key: "marsAge",
    value: function marsAge() {
      var marsYearSeconds = 1.88 * 31536000;
      return Math.floor(this.ageInSeconds / marsYearSeconds);
    }
  }, {
    key: "jupiterAge",
    value: function jupiterAge() {
      var jupiterYearSeconds = 11.86 * 31536000;
      return Math.floor(this.ageInSeconds / jupiterYearSeconds);
    }
  }]);

  return AgeCalculator;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _ageCalculator = require('./../js/age-calculator.js');

$(document).ready(function () {
  $('#user-info').submit(function (event) {
    event.preventDefault();
    var born = $('#born').val();
    var gender = $('#gender').val();
    var region = $('#region').val();
    var newUser = new _ageCalculator.AgeCalculator(born, gender, region);

    var mercury = newUser.mercuryAge();
    $('#mercury-age').text(mercury);

    var venus = newUser.venusAge();
    $('#venus-age').text(venus);

    var mars = newUser.marsAge();
    $('#mars-age').text(mars);

    var jupiter = newUser.jupiterAge();
    $('#jupiter-age').text(jupiter);
  });
});

},{"./../js/age-calculator.js":1}]},{},[2]);
