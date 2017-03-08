(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
   {"title": "Why PDP lost Ondo – Kashamu",
    "text":" The senator also crticised the Senator Ahmed Makarfi-led National Caretaker Committee of the party over the statement credited to its spokesman, Prince Dayo Adeyeye, where he threatened to sanction those in the camp of Senator Ali Modu Sheriff."

},

 {"title": "How Akeredolu reaped from PDP’s mistakes",
    "text":"For Olusegun Mimiko, the outgoing governor of Ondo State, Saturday governorship election was like a war. Though he had fought many political battles before, coming out unscathed in almost all, he saw the last election as the most important political battle he needed to win in order to safeguard his political future."

},

 {"title": "How can Nigeria curb buying of votes during elections",
    "text":"There are electoral laws regulating such practice. But these provisions are not sufficiently enforced. Our elections ought not to be a product of conspiracy defined by cash-and-carry democracy. We should let the popular will to be fully expressed."

},

 {"title": "The Wealthiest Pastors in the World",
    "text":"Many may have their doubts as to whether these very rich preachers are pre-ordained or self-proclaimed, but one thing is for sure, spreading the word has greatly impacted not only the ears who hear it, but also the bank accounts of the mouths who preach it. One can say these pastors are indeed ‘blessed.’ Here are the richest pastors in the world."

},

 {"title": "Mixed reactions greet Akeredolu’s victory",
    "text":" Jegede, who spoke to journalists in Akure, the state capital on Sunday, neither commended nor condemned the conduct of the poll, but said that his reaction about the election would soon be made public.."

},
{"title": "Why PDP lost Ondo – Kashamu",
    "text":" The senator also crticised the Senator Ahmed Makarfi-led National Caretaker Committee of the party over the statement credited to its spokesman, Prince Dayo Adeyeye, where he threatened to sanction those in the camp of Senator Ali Modu Sheriff."

},

 {"title": "How Akeredolu reaped from PDP’s mistakes",
    "text":"For Olusegun Mimiko, the outgoing governor of Ondo State, Saturday governorship election was like a war. Though he had fought many political battles before, coming out unscathed in almost all, he saw the last election as the most important political battle he needed to win in order to safeguard his political future."

},

 {"title": "How can Nigeria curb buying of votes during elections",
    "text":"There are electoral laws regulating such practice. But these provisions are not sufficiently enforced. Our elections ought not to be a product of conspiracy defined by cash-and-carry democracy. We should let the popular will to be fully expressed."

},

 {"title": "The Wealthiest Pastors in the World",
    "text":"Many may have their doubts as to whether these very rich preachers are pre-ordained or self-proclaimed, but one thing is for sure, spreading the word has greatly impacted not only the ears who hear it, but also the bank accounts of the mouths who preach it. One can say these pastors are indeed ‘blessed.’ Here are the richest pastors in the world."

},

 {"title": "Mixed reactions greet Akeredolu’s victory",
    "text":" Jegede, who spoke to journalists in Akure, the state capital on Sunday, neither commended nor condemned the conduct of the poll, but said that his reaction about the election would soon be made public.."

}
]

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

var invertedObject = new InvertedIndex();
var invertedUtil = new InvertedIndexUtil();

// const InvertedIndex = require('../public/js/invertedIndex');
// const InvertedIndexUtil = require('../public/js/InvertedIndexUtil');
var correctBook = require('./book.json');
var wrongBook = require('./wrongFormat.json');
var zeroLength = require('./length.json');
var book = require('./News');

describe('Inverted Index test Suit', function () {
  describe('Testing Inverted index Util methods', function () {
    it('Should return false for wrong book format ', function () {
      expect(invertedUtil.jsonFileReader(wrongBook)).toBeFalsy();
    });

    it('Should return false for wrong length of book', function () {
      expect(invertedUtil.jsonFileReader(zeroLength)).toBeFalsy();
    });
  });

  describe('Testing Inverted index create method', function () {
    var outputObject = invertedObject.createIndex(correctBook, 'correctBook');
    var outputObject2 = invertedObject.createIndex(book, 'book');

    it('should return Object as object type of outputObject', function () {
      expect(outputObject instanceof Object).toBeTruthy();
    });

    it('matches outputObject with the expect alice: { 0: true }', function () {
      expect(outputObject).toEqual(jasmine.objectContaining({
        alice: { 0: true }
      }));
    });

    it('matches outputObject with the expect alice: { 0: false }', function () {
      expect(outputObject).not.toEqual(jasmine.objectContaining({
        alice: { 0: false }
      }));
    });

    it('matches outputObject with the expect alice: { 0: false }', function () {
      expect(outputObject).toEqual(jasmine.objectContaining({
        of: { 0: true, 1: true }
      }));
    });

    it('matches outputObject with the expect party: { 0: true, 5: true }', function () {
      expect(outputObject2).toEqual(jasmine.objectContaining({
        party: { 0: true, 5: true }
      }));
    });

    it('matches outputObject with the expect party: { 0: true, 5: true }', function () {
      expect(outputObject2).not.toEqual(jasmine.objectContaining({
        party: { 0: true, 4: true }
      }));
    });

    var searchObject = invertedObject.searchFiles(['alice'], 'All');
    var searchObject2 = invertedObject.searchFiles(['party'], 'All');
    var searchObject3 = invertedObject.searchFiles(['alice'], 'correctBook');
    var searchObject4 = invertedObject.searchFiles(['party'], 'book');
    console.log(searchObject3);
    console.log(searchObject);
    // console.log(searchObject2.book);

    it('should return Object as object type of searchObject for All', function () {
      expect(searchObject instanceof Object).toBeTruthy();
    });

    it('matches searchObject with the expect alice: { 0: true }', function () {
      expect(searchObject.correctBook).toEqual(jasmine.objectContaining({
        alice: { 0: true }
      }));
    });

    it('matches searchObject with the expect alice: { 0: false }', function () {
      expect(searchObject.correctBook).not.toEqual(jasmine.objectContaining({
        alice: { 0: false }
      }));
    });

    it('matches searchObject2 with the expect party: { 0: true, 5: true }', function () {
      expect(searchObject2.book).toEqual(jasmine.objectContaining({
        party: { 0: true, 5: true }
      }));
    });

    it('matches searchObject2 with the expect party: { 0: true, 1: true }', function () {
      expect(searchObject2.book).not.toEqual(jasmine.objectContaining({
        party: { 0: true, 1: true }
      }));
    });

    it('should return Object as object type of searchObject for correctBook', function () {
      expect(searchObject3 instanceof Object).toBeTruthy();
    });

    it('matches searchObject3 with the expect alice: { 0: true }', function () {
      expect(searchObject3.correctBook).toEqual(jasmine.objectContaining({
        alice: { 0: true }
      }));
    });

    it('matches searchObject3 with the expect alice: { 0: false }', function () {
      expect(searchObject3.correctBook).not.toEqual(jasmine.objectContaining({
        alice: { 0: false }
      }));
    });

    it('should return Object as object type of searchObject for book', function () {
      expect(searchObject4 instanceof Object).toBeTruthy();
    });

    it('matches searchObject4 with the expect party: { 0: true, 5: true }', function () {
      expect(searchObject4.book).toEqual(jasmine.objectContaining({
        party: { 0: true, 5: true }
      }));
    });
  });
});

},{"./News":1,"./book.json":2,"./length.json":4,"./wrongFormat.json":5}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9jcmVhdGVJbmRleFRlc3QuanMiLCJzcGVjL2xlbmd0aC5qc29uIiwic3BlYy93cm9uZ0Zvcm1hdC5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDVkEsSUFBTSxpQkFBaUIsSUFBSSxhQUFKLEVBQXZCO0FBQ0EsSUFBTSxlQUFlLElBQUksaUJBQUosRUFBckI7O0FBRUE7QUFDQTtBQUNBLElBQU0sY0FBYyxRQUFRLGFBQVIsQ0FBcEI7QUFDQSxJQUFNLFlBQVksUUFBUSxvQkFBUixDQUFsQjtBQUNBLElBQU0sYUFBYSxRQUFRLGVBQVIsQ0FBbkI7QUFDQSxJQUFNLE9BQU8sUUFBUSxRQUFSLENBQWI7O0FBSUEsU0FBUywwQkFBVCxFQUFxQyxZQUFNO0FBQ3pDLFdBQVMscUNBQVQsRUFBZ0QsWUFBTTtBQUNwRCxPQUFHLDRDQUFILEVBQWlELFlBQU07QUFDckQsYUFBTyxhQUFhLGNBQWIsQ0FBNEIsU0FBNUIsQ0FBUCxFQUErQyxTQUEvQztBQUNELEtBRkQ7O0FBSUEsT0FBRyw4Q0FBSCxFQUFtRCxZQUFNO0FBQ3ZELGFBQU8sYUFBYSxj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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz1bXG4gICB7XCJ0aXRsZVwiOiBcIldoeSBQRFAgbG9zdCBPbmRvIOKAkyBLYXNoYW11XCIsXG4gICAgXCJ0ZXh0XCI6XCIgVGhlIHNlbmF0b3IgYWxzbyBjcnRpY2lzZWQgdGhlIFNlbmF0b3IgQWhtZWQgTWFrYXJmaS1sZWQgTmF0aW9uYWwgQ2FyZXRha2VyIENvbW1pdHRlZSBvZiB0aGUgcGFydHkgb3ZlciB0aGUgc3RhdGVtZW50IGNyZWRpdGVkIHRvIGl0cyBzcG9rZXNtYW4sIFByaW5jZSBEYXlvIEFkZXlleWUsIHdoZXJlIGhlIHRocmVhdGVuZWQgdG8gc2FuY3Rpb24gdGhvc2UgaW4gdGhlIGNhbXAgb2YgU2VuYXRvciBBbGkgTW9kdSBTaGVyaWZmLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBBa2VyZWRvbHUgcmVhcGVkIGZyb20gUERQ4oCZcyBtaXN0YWtlc1wiLFxuICAgIFwidGV4dFwiOlwiRm9yIE9sdXNlZ3VuIE1pbWlrbywgdGhlIG91dGdvaW5nIGdvdmVybm9yIG9mIE9uZG8gU3RhdGUsIFNhdHVyZGF5IGdvdmVybm9yc2hpcCBlbGVjdGlvbiB3YXMgbGlrZSBhIHdhci4gVGhvdWdoIGhlIGhhZCBmb3VnaHQgbWFueSBwb2xpdGljYWwgYmF0dGxlcyBiZWZvcmUsIGNvbWluZyBvdXQgdW5zY2F0aGVkIGluIGFsbW9zdCBhbGwsIGhlIHNhdyB0aGUgbGFzdCBlbGVjdGlvbiBhcyB0aGUgbW9zdCBpbXBvcnRhbnQgcG9saXRpY2FsIGJhdHRsZSBoZSBuZWVkZWQgdG8gd2luIGluIG9yZGVyIHRvIHNhZmVndWFyZCBoaXMgcG9saXRpY2FsIGZ1dHVyZS5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgY2FuIE5pZ2VyaWEgY3VyYiBidXlpbmcgb2Ygdm90ZXMgZHVyaW5nIGVsZWN0aW9uc1wiLFxuICAgIFwidGV4dFwiOlwiVGhlcmUgYXJlIGVsZWN0b3JhbCBsYXdzIHJlZ3VsYXRpbmcgc3VjaCBwcmFjdGljZS4gQnV0IHRoZXNlIHByb3Zpc2lvbnMgYXJlIG5vdCBzdWZmaWNpZW50bHkgZW5mb3JjZWQuIE91ciBlbGVjdGlvbnMgb3VnaHQgbm90IHRvIGJlIGEgcHJvZHVjdCBvZiBjb25zcGlyYWN5IGRlZmluZWQgYnkgY2FzaC1hbmQtY2FycnkgZGVtb2NyYWN5LiBXZSBzaG91bGQgbGV0IHRoZSBwb3B1bGFyIHdpbGwgdG8gYmUgZnVsbHkgZXhwcmVzc2VkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIlRoZSBXZWFsdGhpZXN0IFBhc3RvcnMgaW4gdGhlIFdvcmxkXCIsXG4gICAgXCJ0ZXh0XCI6XCJNYW55IG1heSBoYXZlIHRoZWlyIGRvdWJ0cyBhcyB0byB3aGV0aGVyIHRoZXNlIHZlcnkgcmljaCBwcmVhY2hlcnMgYXJlIHByZS1vcmRhaW5lZCBvciBzZWxmLXByb2NsYWltZWQsIGJ1dCBvbmUgdGhpbmcgaXMgZm9yIHN1cmUsIHNwcmVhZGluZyB0aGUgd29yZCBoYXMgZ3JlYXRseSBpbXBhY3RlZCBub3Qgb25seSB0aGUgZWFycyB3aG8gaGVhciBpdCwgYnV0IGFsc28gdGhlIGJhbmsgYWNjb3VudHMgb2YgdGhlIG1vdXRocyB3aG8gcHJlYWNoIGl0LiBPbmUgY2FuIHNheSB0aGVzZSBwYXN0b3JzIGFyZSBpbmRlZWQg4oCYYmxlc3NlZC7igJkgSGVyZSBhcmUgdGhlIHJpY2hlc3QgcGFzdG9ycyBpbiB0aGUgd29ybGQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiTWl4ZWQgcmVhY3Rpb25zIGdyZWV0IEFrZXJlZG9sdeKAmXMgdmljdG9yeVwiLFxuICAgIFwidGV4dFwiOlwiIEplZ2VkZSwgd2hvIHNwb2tlIHRvIGpvdXJuYWxpc3RzIGluIEFrdXJlLCB0aGUgc3RhdGUgY2FwaXRhbCBvbiBTdW5kYXksIG5laXRoZXIgY29tbWVuZGVkIG5vciBjb25kZW1uZWQgdGhlIGNvbmR1Y3Qgb2YgdGhlIHBvbGwsIGJ1dCBzYWlkIHRoYXQgaGlzIHJlYWN0aW9uIGFib3V0IHRoZSBlbGVjdGlvbiB3b3VsZCBzb29uIGJlIG1hZGUgcHVibGljLi5cIlxuXG59LFxue1widGl0bGVcIjogXCJXaHkgUERQIGxvc3QgT25kbyDigJMgS2FzaGFtdVwiLFxuICAgIFwidGV4dFwiOlwiIFRoZSBzZW5hdG9yIGFsc28gY3J0aWNpc2VkIHRoZSBTZW5hdG9yIEFobWVkIE1ha2FyZmktbGVkIE5hdGlvbmFsIENhcmV0YWtlciBDb21taXR0ZWUgb2YgdGhlIHBhcnR5IG92ZXIgdGhlIHN0YXRlbWVudCBjcmVkaXRlZCB0byBpdHMgc3Bva2VzbWFuLCBQcmluY2UgRGF5byBBZGV5ZXllLCB3aGVyZSBoZSB0aHJlYXRlbmVkIHRvIHNhbmN0aW9uIHRob3NlIGluIHRoZSBjYW1wIG9mIFNlbmF0b3IgQWxpIE1vZHUgU2hlcmlmZi5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgQWtlcmVkb2x1IHJlYXBlZCBmcm9tIFBEUOKAmXMgbWlzdGFrZXNcIixcbiAgICBcInRleHRcIjpcIkZvciBPbHVzZWd1biBNaW1pa28sIHRoZSBvdXRnb2luZyBnb3Zlcm5vciBvZiBPbmRvIFN0YXRlLCBTYXR1cmRheSBnb3Zlcm5vcnNoaXAgZWxlY3Rpb24gd2FzIGxpa2UgYSB3YXIuIFRob3VnaCBoZSBoYWQgZm91Z2h0IG1hbnkgcG9saXRpY2FsIGJhdHRsZXMgYmVmb3JlLCBjb21pbmcgb3V0IHVuc2NhdGhlZCBpbiBhbG1vc3QgYWxsLCBoZSBzYXcgdGhlIGxhc3QgZWxlY3Rpb24gYXMgdGhlIG1vc3QgaW1wb3J0YW50IHBvbGl0aWNhbCBiYXR0bGUgaGUgbmVlZGVkIHRvIHdpbiBpbiBvcmRlciB0byBzYWZlZ3VhcmQgaGlzIHBvbGl0aWNhbCBmdXR1cmUuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IGNhbiBOaWdlcmlhIGN1cmIgYnV5aW5nIG9mIHZvdGVzIGR1cmluZyBlbGVjdGlvbnNcIixcbiAgICBcInRleHRcIjpcIlRoZXJlIGFyZSBlbGVjdG9yYWwgbGF3cyByZWd1bGF0aW5nIHN1Y2ggcHJhY3RpY2UuIEJ1dCB0aGVzZSBwcm92aXNpb25zIGFyZSBub3Qgc3VmZmljaWVudGx5IGVuZm9yY2VkLiBPdXIgZWxlY3Rpb25zIG91Z2h0IG5vdCB0byBiZSBhIHByb2R1Y3Qgb2YgY29uc3BpcmFjeSBkZWZpbmVkIGJ5IGNhc2gtYW5kLWNhcnJ5IGRlbW9jcmFjeS4gV2Ugc2hvdWxkIGxldCB0aGUgcG9wdWxhciB3aWxsIHRvIGJlIGZ1bGx5IGV4cHJlc3NlZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJUaGUgV2VhbHRoaWVzdCBQYXN0b3JzIGluIHRoZSBXb3JsZFwiLFxuICAgIFwidGV4dFwiOlwiTWFueSBtYXkgaGF2ZSB0aGVpciBkb3VidHMgYXMgdG8gd2hldGhlciB0aGVzZSB2ZXJ5IHJpY2ggcHJlYWNoZXJzIGFyZSBwcmUtb3JkYWluZWQgb3Igc2VsZi1wcm9jbGFpbWVkLCBidXQgb25lIHRoaW5nIGlzIGZvciBzdXJlLCBzcHJlYWRpbmcgdGhlIHdvcmQgaGFzIGdyZWF0bHkgaW1wYWN0ZWQgbm90IG9ubHkgdGhlIGVhcnMgd2hvIGhlYXIgaXQsIGJ1dCBhbHNvIHRoZSBiYW5rIGFjY291bnRzIG9mIHRoZSBtb3V0aHMgd2hvIHByZWFjaCBpdC4gT25lIGNhbiBzYXkgdGhlc2UgcGFzdG9ycyBhcmUgaW5kZWVkIOKAmGJsZXNzZWQu4oCZIEhlcmUgYXJlIHRoZSByaWNoZXN0IHBhc3RvcnMgaW4gdGhlIHdvcmxkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIk1peGVkIHJlYWN0aW9ucyBncmVldCBBa2VyZWRvbHXigJlzIHZpY3RvcnlcIixcbiAgICBcInRleHRcIjpcIiBKZWdlZGUsIHdobyBzcG9rZSB0byBqb3VybmFsaXN0cyBpbiBBa3VyZSwgdGhlIHN0YXRlIGNhcGl0YWwgb24gU3VuZGF5LCBuZWl0aGVyIGNvbW1lbmRlZCBub3IgY29uZGVtbmVkIHRoZSBjb25kdWN0IG9mIHRoZSBwb2xsLCBidXQgc2FpZCB0aGF0IGhpcyByZWFjdGlvbiBhYm91dCB0aGUgZWxlY3Rpb24gd291bGQgc29vbiBiZSBtYWRlIHB1YmxpYy4uXCJcblxufVxuXVxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJ0aXRsZVwiOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInRleHRcIjogXCJBbGljZSBmYWxscyBpbnRvIGEgcmFiYml0IGhvbGUgYW5kIGVudGVycyBhIHdvcmxkIGZ1bGwgb2YgaW1hZ2luYXRpb24uXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidGV4dFwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG4gIH1cbl1cbiIsImNvbnN0IGludmVydGVkT2JqZWN0ID0gbmV3IEludmVydGVkSW5kZXgoKTtcbmNvbnN0IGludmVydGVkVXRpbCA9IG5ldyBJbnZlcnRlZEluZGV4VXRpbCgpO1xuXG4vLyBjb25zdCBJbnZlcnRlZEluZGV4ID0gcmVxdWlyZSgnLi4vcHVibGljL2pzL2ludmVydGVkSW5kZXgnKTtcbi8vIGNvbnN0IEludmVydGVkSW5kZXhVdGlsID0gcmVxdWlyZSgnLi4vcHVibGljL2pzL0ludmVydGVkSW5kZXhVdGlsJyk7XG5jb25zdCBjb3JyZWN0Qm9vayA9IHJlcXVpcmUoJy4vYm9vay5qc29uJyk7XG5jb25zdCB3cm9uZ0Jvb2sgPSByZXF1aXJlKCcuL3dyb25nRm9ybWF0Lmpzb24nKTtcbmNvbnN0IHplcm9MZW5ndGggPSByZXF1aXJlKCcuL2xlbmd0aC5qc29uJyk7XG5jb25zdCBib29rID0gcmVxdWlyZSgnLi9OZXdzJyk7XG5cblxuXG5kZXNjcmliZSgnSW52ZXJ0ZWQgSW5kZXggdGVzdCBTdWl0JywgKCkgPT4ge1xuICBkZXNjcmliZSgnVGVzdGluZyBJbnZlcnRlZCBpbmRleCBVdGlsIG1ldGhvZHMnLCAoKSA9PiB7XG4gICAgaXQoJ1Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdyb25nIGJvb2sgZm9ybWF0ICcsICgpID0+IHtcbiAgICAgIGV4cGVjdChpbnZlcnRlZFV0aWwuanNvbkZpbGVSZWFkZXIod3JvbmdCb29rKSkudG9CZUZhbHN5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd3JvbmcgbGVuZ3RoIG9mIGJvb2snLCAoKSA9PiB7XG4gICAgICBleHBlY3QoaW52ZXJ0ZWRVdGlsLmpzb25GaWxlUmVhZGVyKHplcm9MZW5ndGgpKS50b0JlRmFsc3koKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ1Rlc3RpbmcgSW52ZXJ0ZWQgaW5kZXggY3JlYXRlIG1ldGhvZCcsICgpID0+IHtcbiAgICBjb25zdCBvdXRwdXRPYmplY3QgPSBpbnZlcnRlZE9iamVjdC5jcmVhdGVJbmRleChjb3JyZWN0Qm9vaywgJ2NvcnJlY3RCb29rJyk7XG4gICAgY29uc3Qgb3V0cHV0T2JqZWN0MiA9IGludmVydGVkT2JqZWN0LmNyZWF0ZUluZGV4KGJvb2ssICdib29rJyk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgb2JqZWN0IHR5cGUgb2Ygb3V0cHV0T2JqZWN0JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KG91dHB1dE9iamVjdCBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ21hdGNoZXMgb3V0cHV0T2JqZWN0IHdpdGggdGhlIGV4cGVjdCBhbGljZTogeyAwOiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qob3V0cHV0T2JqZWN0KS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ21hdGNoZXMgb3V0cHV0T2JqZWN0IHdpdGggdGhlIGV4cGVjdCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KG91dHB1dE9iamVjdCkubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ21hdGNoZXMgb3V0cHV0T2JqZWN0IHdpdGggdGhlIGV4cGVjdCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KG91dHB1dE9iamVjdCkudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBvZjogeyAwOiB0cnVlLCAxOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIG91dHB1dE9iamVjdCB3aXRoIHRoZSBleHBlY3QgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KG91dHB1dE9iamVjdDIpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBvdXRwdXRPYmplY3Qgd2l0aCB0aGUgZXhwZWN0IHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChvdXRwdXRPYmplY3QyKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA0OiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlYXJjaE9iamVjdCA9IGludmVydGVkT2JqZWN0LnNlYXJjaEZpbGVzKFsnYWxpY2UnXSwgJ0FsbCcpO1xuICAgIGNvbnN0IHNlYXJjaE9iamVjdDIgPSBpbnZlcnRlZE9iamVjdC5zZWFyY2hGaWxlcyhbJ3BhcnR5J10sICdBbGwnKTtcbiAgICBjb25zdCBzZWFyY2hPYmplY3QzID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydhbGljZSddLCAnY29ycmVjdEJvb2snKTtcbiAgICBjb25zdCBzZWFyY2hPYmplY3Q0ID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydwYXJ0eSddLCAnYm9vaycpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaE9iamVjdDMpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaE9iamVjdCk7XG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoT2JqZWN0Mi5ib29rKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyBvYmplY3QgdHlwZSBvZiBzZWFyY2hPYmplY3QgZm9yIEFsbCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIHNlYXJjaE9iamVjdCB3aXRoIHRoZSBleHBlY3QgYWxpY2U6IHsgMDogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaE9iamVjdC5jb3JyZWN0Qm9vaykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIHNlYXJjaE9iamVjdCB3aXRoIHRoZSBleHBlY3QgYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QuY29ycmVjdEJvb2spLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIHNlYXJjaE9iamVjdDIgd2l0aCB0aGUgZXhwZWN0IHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QyLmJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBzZWFyY2hPYmplY3QyIHdpdGggdGhlIGV4cGVjdCBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoT2JqZWN0Mi5ib29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyBvYmplY3QgdHlwZSBvZiBzZWFyY2hPYmplY3QgZm9yIGNvcnJlY3RCb29rJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaE9iamVjdDMgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIHNlYXJjaE9iamVjdDMgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QzLmNvcnJlY3RCb29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ21hdGNoZXMgc2VhcmNoT2JqZWN0MyB3aXRoIHRoZSBleHBlY3QgYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QzLmNvcnJlY3RCb29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgb2JqZWN0IHR5cGUgb2Ygc2VhcmNoT2JqZWN0IGZvciBib29rJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaE9iamVjdDQgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIHNlYXJjaE9iamVjdDQgd2l0aCB0aGUgZXhwZWN0IHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3Q0LmJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcIlwiOiBcIlwiLFxuICAgIFwiXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwiXCI6IFwiXCIsXG4gICAgXCJcIjogXCJcIlxuICB9XG5dIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7ICBcIm5hbWVcIiA6IFwiQWxpY2UgaW4gV29uZGVybGFuZFwiLFxuICAgIFwidmFsdWVcIjogXCJBbGljZSBmYWxscyBpbnRvIGEgcmFiYml0IGhvbGUgYW5kIGVudGVycyBhIHdvcmxkIGZ1bGwgb2YgaW1hZ2luYXRpb24uXCJcbiAgfVxuLFxuICAgeyBcIm5hbWVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidmFsdWVcIjogXCJBbiB1bnVzdWFsIGFsbGlhbmNlIG9mIG1hbiwgZWxmLCBkd2FyZiwgd2l6YXJkIGFuZCBob2JiaXQgc2VlayB0byBkZXN0cm95IGEgcG93ZXJmdWwgcmluZy5cIlxuXG4gICB9XG5dIl19
