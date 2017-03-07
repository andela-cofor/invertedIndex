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

/* eslint-disable no-undef*/
var correctBook = require('./book.json');
var wrongBook = require('./wrongFormat.json');
var zeroLength = require('./length.json');
var book = require('./News');

var invertedObject = new InvertedIndex();
var invertedUtil = new InvertedIndexUtil();

describe('Inverted Index test Suit', function () {
  describe('Testing Inverted index Util methods', function () {
    it('Should return false for wrong book format name and value rather than titile and text', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9jcmVhdGVJbmRleFRlc3QuanMiLCJzcGVjL2xlbmd0aC5qc29uIiwic3BlYy93cm9uZ0Zvcm1hdC5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDVkE7QUFDQSxJQUFNLGNBQWMsUUFBUSxhQUFSLENBQXBCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsb0JBQVIsQ0FBbEI7QUFDQSxJQUFNLGFBQWEsUUFBUSxlQUFSLENBQW5CO0FBQ0EsSUFBTSxPQUFPLFFBQVEsUUFBUixDQUFiOztBQUVBLElBQU0saUJBQWlCLElBQUksYUFBSixFQUF2QjtBQUNBLElBQU0sZUFBZSxJQUFJLGlCQUFKLEVBQXJCOztBQUVBLFNBQVMsMEJBQVQsRUFBcUMsWUFBTTtBQUN6QyxXQUFTLHFDQUFULEVBQWdELFlBQU07QUFDcEQsT0FBRyxzRkFBSCxFQUEyRixZQUFNO0FBQy9GLGFBQU8sYUFBYSxjQUFiLENBQTRCLFNBQTVCLENBQVAsRUFBK0MsU0FBL0M7QUFDRCxLQUZEOztBQUlBLE9BQUcsOENBQUgsRUFBbUQsWUFBTTtBQUN2RCxhQUFPLGFBQWEsY0FBYixD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LEVBQVcsR0FBRyxJQUFkO0FBRHVELE9BQXpCLENBQXZDO0FBR0QsS0FKRDtBQUtELEdBdEVEO0FBdUVELENBbEZEOzs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz1bXG4gICB7XCJ0aXRsZVwiOiBcIldoeSBQRFAgbG9zdCBPbmRvIOKAkyBLYXNoYW11XCIsXG4gICAgXCJ0ZXh0XCI6XCIgVGhlIHNlbmF0b3IgYWxzbyBjcnRpY2lzZWQgdGhlIFNlbmF0b3IgQWhtZWQgTWFrYXJmaS1sZWQgTmF0aW9uYWwgQ2FyZXRha2VyIENvbW1pdHRlZSBvZiB0aGUgcGFydHkgb3ZlciB0aGUgc3RhdGVtZW50IGNyZWRpdGVkIHRvIGl0cyBzcG9rZXNtYW4sIFByaW5jZSBEYXlvIEFkZXlleWUsIHdoZXJlIGhlIHRocmVhdGVuZWQgdG8gc2FuY3Rpb24gdGhvc2UgaW4gdGhlIGNhbXAgb2YgU2VuYXRvciBBbGkgTW9kdSBTaGVyaWZmLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBBa2VyZWRvbHUgcmVhcGVkIGZyb20gUERQ4oCZcyBtaXN0YWtlc1wiLFxuICAgIFwidGV4dFwiOlwiRm9yIE9sdXNlZ3VuIE1pbWlrbywgdGhlIG91dGdvaW5nIGdvdmVybm9yIG9mIE9uZG8gU3RhdGUsIFNhdHVyZGF5IGdvdmVybm9yc2hpcCBlbGVjdGlvbiB3YXMgbGlrZSBhIHdhci4gVGhvdWdoIGhlIGhhZCBmb3VnaHQgbWFueSBwb2xpdGljYWwgYmF0dGxlcyBiZWZvcmUsIGNvbWluZyBvdXQgdW5zY2F0aGVkIGluIGFsbW9zdCBhbGwsIGhlIHNhdyB0aGUgbGFzdCBlbGVjdGlvbiBhcyB0aGUgbW9zdCBpbXBvcnRhbnQgcG9saXRpY2FsIGJhdHRsZSBoZSBuZWVkZWQgdG8gd2luIGluIG9yZGVyIHRvIHNhZmVndWFyZCBoaXMgcG9saXRpY2FsIGZ1dHVyZS5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgY2FuIE5pZ2VyaWEgY3VyYiBidXlpbmcgb2Ygdm90ZXMgZHVyaW5nIGVsZWN0aW9uc1wiLFxuICAgIFwidGV4dFwiOlwiVGhlcmUgYXJlIGVsZWN0b3JhbCBsYXdzIHJlZ3VsYXRpbmcgc3VjaCBwcmFjdGljZS4gQnV0IHRoZXNlIHByb3Zpc2lvbnMgYXJlIG5vdCBzdWZmaWNpZW50bHkgZW5mb3JjZWQuIE91ciBlbGVjdGlvbnMgb3VnaHQgbm90IHRvIGJlIGEgcHJvZHVjdCBvZiBjb25zcGlyYWN5IGRlZmluZWQgYnkgY2FzaC1hbmQtY2FycnkgZGVtb2NyYWN5LiBXZSBzaG91bGQgbGV0IHRoZSBwb3B1bGFyIHdpbGwgdG8gYmUgZnVsbHkgZXhwcmVzc2VkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIlRoZSBXZWFsdGhpZXN0IFBhc3RvcnMgaW4gdGhlIFdvcmxkXCIsXG4gICAgXCJ0ZXh0XCI6XCJNYW55IG1heSBoYXZlIHRoZWlyIGRvdWJ0cyBhcyB0byB3aGV0aGVyIHRoZXNlIHZlcnkgcmljaCBwcmVhY2hlcnMgYXJlIHByZS1vcmRhaW5lZCBvciBzZWxmLXByb2NsYWltZWQsIGJ1dCBvbmUgdGhpbmcgaXMgZm9yIHN1cmUsIHNwcmVhZGluZyB0aGUgd29yZCBoYXMgZ3JlYXRseSBpbXBhY3RlZCBub3Qgb25seSB0aGUgZWFycyB3aG8gaGVhciBpdCwgYnV0IGFsc28gdGhlIGJhbmsgYWNjb3VudHMgb2YgdGhlIG1vdXRocyB3aG8gcHJlYWNoIGl0LiBPbmUgY2FuIHNheSB0aGVzZSBwYXN0b3JzIGFyZSBpbmRlZWQg4oCYYmxlc3NlZC7igJkgSGVyZSBhcmUgdGhlIHJpY2hlc3QgcGFzdG9ycyBpbiB0aGUgd29ybGQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiTWl4ZWQgcmVhY3Rpb25zIGdyZWV0IEFrZXJlZG9sdeKAmXMgdmljdG9yeVwiLFxuICAgIFwidGV4dFwiOlwiIEplZ2VkZSwgd2hvIHNwb2tlIHRvIGpvdXJuYWxpc3RzIGluIEFrdXJlLCB0aGUgc3RhdGUgY2FwaXRhbCBvbiBTdW5kYXksIG5laXRoZXIgY29tbWVuZGVkIG5vciBjb25kZW1uZWQgdGhlIGNvbmR1Y3Qgb2YgdGhlIHBvbGwsIGJ1dCBzYWlkIHRoYXQgaGlzIHJlYWN0aW9uIGFib3V0IHRoZSBlbGVjdGlvbiB3b3VsZCBzb29uIGJlIG1hZGUgcHVibGljLi5cIlxuXG59LFxue1widGl0bGVcIjogXCJXaHkgUERQIGxvc3QgT25kbyDigJMgS2FzaGFtdVwiLFxuICAgIFwidGV4dFwiOlwiIFRoZSBzZW5hdG9yIGFsc28gY3J0aWNpc2VkIHRoZSBTZW5hdG9yIEFobWVkIE1ha2FyZmktbGVkIE5hdGlvbmFsIENhcmV0YWtlciBDb21taXR0ZWUgb2YgdGhlIHBhcnR5IG92ZXIgdGhlIHN0YXRlbWVudCBjcmVkaXRlZCB0byBpdHMgc3Bva2VzbWFuLCBQcmluY2UgRGF5byBBZGV5ZXllLCB3aGVyZSBoZSB0aHJlYXRlbmVkIHRvIHNhbmN0aW9uIHRob3NlIGluIHRoZSBjYW1wIG9mIFNlbmF0b3IgQWxpIE1vZHUgU2hlcmlmZi5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgQWtlcmVkb2x1IHJlYXBlZCBmcm9tIFBEUOKAmXMgbWlzdGFrZXNcIixcbiAgICBcInRleHRcIjpcIkZvciBPbHVzZWd1biBNaW1pa28sIHRoZSBvdXRnb2luZyBnb3Zlcm5vciBvZiBPbmRvIFN0YXRlLCBTYXR1cmRheSBnb3Zlcm5vcnNoaXAgZWxlY3Rpb24gd2FzIGxpa2UgYSB3YXIuIFRob3VnaCBoZSBoYWQgZm91Z2h0IG1hbnkgcG9saXRpY2FsIGJhdHRsZXMgYmVmb3JlLCBjb21pbmcgb3V0IHVuc2NhdGhlZCBpbiBhbG1vc3QgYWxsLCBoZSBzYXcgdGhlIGxhc3QgZWxlY3Rpb24gYXMgdGhlIG1vc3QgaW1wb3J0YW50IHBvbGl0aWNhbCBiYXR0bGUgaGUgbmVlZGVkIHRvIHdpbiBpbiBvcmRlciB0byBzYWZlZ3VhcmQgaGlzIHBvbGl0aWNhbCBmdXR1cmUuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IGNhbiBOaWdlcmlhIGN1cmIgYnV5aW5nIG9mIHZvdGVzIGR1cmluZyBlbGVjdGlvbnNcIixcbiAgICBcInRleHRcIjpcIlRoZXJlIGFyZSBlbGVjdG9yYWwgbGF3cyByZWd1bGF0aW5nIHN1Y2ggcHJhY3RpY2UuIEJ1dCB0aGVzZSBwcm92aXNpb25zIGFyZSBub3Qgc3VmZmljaWVudGx5IGVuZm9yY2VkLiBPdXIgZWxlY3Rpb25zIG91Z2h0IG5vdCB0byBiZSBhIHByb2R1Y3Qgb2YgY29uc3BpcmFjeSBkZWZpbmVkIGJ5IGNhc2gtYW5kLWNhcnJ5IGRlbW9jcmFjeS4gV2Ugc2hvdWxkIGxldCB0aGUgcG9wdWxhciB3aWxsIHRvIGJlIGZ1bGx5IGV4cHJlc3NlZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJUaGUgV2VhbHRoaWVzdCBQYXN0b3JzIGluIHRoZSBXb3JsZFwiLFxuICAgIFwidGV4dFwiOlwiTWFueSBtYXkgaGF2ZSB0aGVpciBkb3VidHMgYXMgdG8gd2hldGhlciB0aGVzZSB2ZXJ5IHJpY2ggcHJlYWNoZXJzIGFyZSBwcmUtb3JkYWluZWQgb3Igc2VsZi1wcm9jbGFpbWVkLCBidXQgb25lIHRoaW5nIGlzIGZvciBzdXJlLCBzcHJlYWRpbmcgdGhlIHdvcmQgaGFzIGdyZWF0bHkgaW1wYWN0ZWQgbm90IG9ubHkgdGhlIGVhcnMgd2hvIGhlYXIgaXQsIGJ1dCBhbHNvIHRoZSBiYW5rIGFjY291bnRzIG9mIHRoZSBtb3V0aHMgd2hvIHByZWFjaCBpdC4gT25lIGNhbiBzYXkgdGhlc2UgcGFzdG9ycyBhcmUgaW5kZWVkIOKAmGJsZXNzZWQu4oCZIEhlcmUgYXJlIHRoZSByaWNoZXN0IHBhc3RvcnMgaW4gdGhlIHdvcmxkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIk1peGVkIHJlYWN0aW9ucyBncmVldCBBa2VyZWRvbHXigJlzIHZpY3RvcnlcIixcbiAgICBcInRleHRcIjpcIiBKZWdlZGUsIHdobyBzcG9rZSB0byBqb3VybmFsaXN0cyBpbiBBa3VyZSwgdGhlIHN0YXRlIGNhcGl0YWwgb24gU3VuZGF5LCBuZWl0aGVyIGNvbW1lbmRlZCBub3IgY29uZGVtbmVkIHRoZSBjb25kdWN0IG9mIHRoZSBwb2xsLCBidXQgc2FpZCB0aGF0IGhpcyByZWFjdGlvbiBhYm91dCB0aGUgZWxlY3Rpb24gd291bGQgc29vbiBiZSBtYWRlIHB1YmxpYy4uXCJcblxufVxuXVxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJ0aXRsZVwiOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInRleHRcIjogXCJBbGljZSBmYWxscyBpbnRvIGEgcmFiYml0IGhvbGUgYW5kIGVudGVycyBhIHdvcmxkIGZ1bGwgb2YgaW1hZ2luYXRpb24uXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidGV4dFwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG4gIH1cbl1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmKi9cbmNvbnN0IGNvcnJlY3RCb29rID0gcmVxdWlyZSgnLi9ib29rLmpzb24nKTtcbmNvbnN0IHdyb25nQm9vayA9IHJlcXVpcmUoJy4vd3JvbmdGb3JtYXQuanNvbicpO1xuY29uc3QgemVyb0xlbmd0aCA9IHJlcXVpcmUoJy4vbGVuZ3RoLmpzb24nKTtcbmNvbnN0IGJvb2sgPSByZXF1aXJlKCcuL05ld3MnKTtcblxuY29uc3QgaW52ZXJ0ZWRPYmplY3QgPSBuZXcgSW52ZXJ0ZWRJbmRleCgpO1xuY29uc3QgaW52ZXJ0ZWRVdGlsID0gbmV3IEludmVydGVkSW5kZXhVdGlsKCk7XG5cbmRlc2NyaWJlKCdJbnZlcnRlZCBJbmRleCB0ZXN0IFN1aXQnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdUZXN0aW5nIEludmVydGVkIGluZGV4IFV0aWwgbWV0aG9kcycsICgpID0+IHtcbiAgICBpdCgnU2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd3JvbmcgYm9vayBmb3JtYXQgbmFtZSBhbmQgdmFsdWUgcmF0aGVyIHRoYW4gdGl0aWxlIGFuZCB0ZXh0JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGludmVydGVkVXRpbC5qc29uRmlsZVJlYWRlcih3cm9uZ0Jvb2spKS50b0JlRmFsc3koKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3cm9uZyBsZW5ndGggb2YgYm9vaycsICgpID0+IHtcbiAgICAgIGV4cGVjdChpbnZlcnRlZFV0aWwuanNvbkZpbGVSZWFkZXIoemVyb0xlbmd0aCkpLnRvQmVGYWxzeSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnVGVzdGluZyBJbnZlcnRlZCBpbmRleCBjcmVhdGUgbWV0aG9kJywgKCkgPT4ge1xuICAgIGNvbnN0IG91dHB1dE9iamVjdCA9IGludmVydGVkT2JqZWN0LmNyZWF0ZUluZGV4KGNvcnJlY3RCb29rLCAnY29ycmVjdEJvb2snKTtcbiAgICBjb25zdCBvdXRwdXRPYmplY3QyID0gaW52ZXJ0ZWRPYmplY3QuY3JlYXRlSW5kZXgoYm9vaywgJ2Jvb2snKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyBvYmplY3QgdHlwZSBvZiBvdXRwdXRPYmplY3QnLCAoKSA9PiB7XG4gICAgICBleHBlY3Qob3V0cHV0T2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBvdXRwdXRPYmplY3Qgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChvdXRwdXRPYmplY3QpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBvdXRwdXRPYmplY3Qgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qob3V0cHV0T2JqZWN0KS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBvdXRwdXRPYmplY3Qgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qob3V0cHV0T2JqZWN0KS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIG9mOiB7IDA6IHRydWUsIDE6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ21hdGNoZXMgb3V0cHV0T2JqZWN0IHdpdGggdGhlIGV4cGVjdCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qob3V0cHV0T2JqZWN0MikudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIG91dHB1dE9iamVjdCB3aXRoIHRoZSBleHBlY3QgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KG91dHB1dE9iamVjdDIpLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDQ6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VhcmNoT2JqZWN0ID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydhbGljZSddLCAnQWxsJyk7XG4gICAgY29uc3Qgc2VhcmNoT2JqZWN0MiA9IGludmVydGVkT2JqZWN0LnNlYXJjaEZpbGVzKFsncGFydHknXSwgJ0FsbCcpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaE9iamVjdCk7XG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoT2JqZWN0Mi5ib29rKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyBvYmplY3QgdHlwZSBvZiBzZWFyY2hPYmplY3QgZm9yIEFsbCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIHNlYXJjaE9iamVjdCB3aXRoIHRoZSBleHBlY3QgYWxpY2U6IHsgMDogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaE9iamVjdC5jb3JyZWN0Qm9vaykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIHNlYXJjaE9iamVjdCB3aXRoIHRoZSBleHBlY3QgYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QuY29ycmVjdEJvb2spLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIHNlYXJjaE9iamVjdDIgd2l0aCB0aGUgZXhwZWN0IHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QyLmJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBzZWFyY2hPYmplY3QyIHdpdGggdGhlIGV4cGVjdCBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoT2JqZWN0Mi5ib29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwiXCI6IFwiXCIsXG4gICAgXCJcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJcIjogXCJcIixcbiAgICBcIlwiOiBcIlwiXG4gIH1cbl0iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHsgIFwibmFtZVwiIDogXCJBbGljZSBpbiBXb25kZXJsYW5kXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIkFsaWNlIGZhbGxzIGludG8gYSByYWJiaXQgaG9sZSBhbmQgZW50ZXJzIGEgd29ybGQgZnVsbCBvZiBpbWFnaW5hdGlvbi5cIlxuICB9XG4sXG4gICB7IFwibmFtZVwiOiBcIlRoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG5cbiAgIH1cbl0iXX0=
