(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }
]

},{}],2:[function(require,module,exports){
module.exports=[
  {
    "": "",
    "": ""
  },
  {
    "": "",
    "": ""
  }
]
},{}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable no-undef*/
var correctBook = require('./book.json');
var wrongBook = require('./wrongFormat.json');
var zeroLength = require('./length.json');

var invertedIndexUtilObj = new InvertedIndexUtil();
var invertedObj = new InvertedIndex();

describe('Test Suit', function () {
  console.log(typeof book === 'undefined' ? 'undefined' : _typeof(book));
  describe('Testing Inverted index create Methods', function () {
    it('should return false', function () {
      expect(invertedObj.createIndex(correctBook).toEqual(Object));
    });
  });
});

},{"./book.json":1,"./length.json":2,"./wrongFormat.json":4}],4:[function(require,module,exports){
module.exports=[
  {  "name" : "Alice in Wonderland",
    "value": "Alice falls into a rabbit hole and enters a world full of imagination."
  }
,
   { "name": "The Lord of the Rings: The Fellowship of the Ring.",
    "value": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."

   }
]
},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL2Jvb2suanNvbiIsInNwZWMvbGVuZ3RoLmpzb24iLCJzcGVjL3VwbG9hZF9zcGVjLmpzIiwic3BlYy93cm9uZ0Zvcm1hdC5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVEE7QUFDQSxJQUFNLGNBQWMsUUFBUSxhQUFSLENBQXBCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsb0JBQVIsQ0FBbEI7QUFDQSxJQUFNLGFBQWEsUUFBUSxlQUFSLENBQW5COztBQUVBLElBQU0sdUJBQXVCLElBQUksaUJBQUosRUFBN0I7QUFDQSxJQUFNLGNBQWMsSUFBSSxhQUFKLEVBQXBCOztBQUVBLFNBQVMsV0FBVCxFQUFzQixZQUFNO0FBQzFCLFVBQVEsR0FBUixRQUFtQixJQUFuQix5Q0FBbUIsSUFBbkI7QUFDQSxXQUFTLHVDQUFULEVBQWtELFlBQU07QUFDdEQsT0FBRyxxQkFBSCxFQUEwQixZQUFNO0FBQzlCLGFBQU8sWUFBWSxXQUFaLENBQXdCLFdBQXhCLEVBQXFDLE9BQXJDLENBQTZDLE1BQTdDLENBQVA7QUFDRCxLQUZEO0FBR0QsR0FKRDtBQUtELENBUEQ7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwidGl0bGVcIjogXCJBbGljZSBpbiBXb25kZXJsYW5kXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5cIixcbiAgICBcInRleHRcIjogXCJBbiB1bnVzdWFsIGFsbGlhbmNlIG9mIG1hbiwgZWxmLCBkd2FyZiwgd2l6YXJkIGFuZCBob2JiaXQgc2VlayB0byBkZXN0cm95IGEgcG93ZXJmdWwgcmluZy5cIlxuICB9XG5dXG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcIlwiOiBcIlwiLFxuICAgIFwiXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwiXCI6IFwiXCIsXG4gICAgXCJcIjogXCJcIlxuICB9XG5dIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYqL1xuY29uc3QgY29ycmVjdEJvb2sgPSByZXF1aXJlKCcuL2Jvb2suanNvbicpO1xuY29uc3Qgd3JvbmdCb29rID0gcmVxdWlyZSgnLi93cm9uZ0Zvcm1hdC5qc29uJyk7XG5jb25zdCB6ZXJvTGVuZ3RoID0gcmVxdWlyZSgnLi9sZW5ndGguanNvbicpO1xuXG5jb25zdCBpbnZlcnRlZEluZGV4VXRpbE9iaiA9IG5ldyBJbnZlcnRlZEluZGV4VXRpbCgpO1xuY29uc3QgaW52ZXJ0ZWRPYmogPSBuZXcgSW52ZXJ0ZWRJbmRleCgpO1xuXG5kZXNjcmliZSgnVGVzdCBTdWl0JywgKCkgPT4ge1xuICBjb25zb2xlLmxvZyh0eXBlb2YgYm9vaylcbiAgZGVzY3JpYmUoJ1Rlc3RpbmcgSW52ZXJ0ZWQgaW5kZXggY3JlYXRlIE1ldGhvZHMnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoaW52ZXJ0ZWRPYmouY3JlYXRlSW5kZXgoY29ycmVjdEJvb2spLnRvRXF1YWwoT2JqZWN0KSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHsgIFwibmFtZVwiIDogXCJBbGljZSBpbiBXb25kZXJsYW5kXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIkFsaWNlIGZhbGxzIGludG8gYSByYWJiaXQgaG9sZSBhbmQgZW50ZXJzIGEgd29ybGQgZnVsbCBvZiBpbWFnaW5hdGlvbi5cIlxuICB9XG4sXG4gICB7IFwibmFtZVwiOiBcIlRoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG5cbiAgIH1cbl0iXX0=
