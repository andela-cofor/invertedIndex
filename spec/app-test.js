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
module.exports=[
  {
    " ": " ",
    " ": " "
  },

  {
    " ": "",
    " ": " "
  }
]

},{}],4:[function(require,module,exports){
'use strict';

var invertedIndex = new InvertedIndex();

var Book = require('./book.json');
var News = require('./News');
var empty = require('./empty');

describe('Inverted index create method', function () {
  var result = invertedIndex.createIndex(Book, 'Book');
  var result2 = invertedIndex.createIndex(News, 'News');

  it('should return Object as typeof result', function () {
    expect(result instanceof Object).toBeTruthy();
  });

  it('should match result with alice: { 0: true }', function () {
    expect(result).toEqual(jasmine.objectContaining({
      alice: { 0: true }
    }));
  });

  it('should match result with alice: { 0: false }', function () {
    expect(result).not.toEqual(jasmine.objectContaining({
      alice: { 0: false }
    }));
  });

  it('should match result with alice: { 0: false }', function () {
    expect(result).toEqual(jasmine.objectContaining({
      of: { 0: true, 1: true }
    }));
  });

  it('should match resultt with party: { 0: true, 5: true }', function () {
    expect(result2).toEqual(jasmine.objectContaining({
      party: { 0: true, 5: true }
    }));
  });

  it('should match result with party: { 0: true, 5: true }', function () {
    expect(result2).not.toEqual(jasmine.objectContaining({
      party: { 0: true, 4: true }
    }));
  });

  describe('The inverted index search method', function () {
    var searchForAliceInAllFiles = invertedIndex.searchFiles(['alice'], 'All');
    var searchForPartyInAllFiles = invertedIndex.searchFiles(['party'], 'All');
    var searchForAliceInBook = invertedIndex.searchFiles(['alice'], 'Book');
    var searchForPartyInNews = invertedIndex.searchFiles(['party'], 'News');

    it('should return Object as type of search result', function () {
      expect(searchForAliceInAllFiles instanceof Object).toBeTruthy();
    });

    it('should match searchForAliceInAllFiles with alice: { 0: true }', function () {
      expect(searchForAliceInAllFiles.Book).toEqual(jasmine.objectContaining({
        alice: { 0: true }
      }));
    });

    it('should match searchForAliceInAllFiles with alice: { 0: false }', function () {
      expect(searchForAliceInAllFiles.Book).not.toEqual(jasmine.objectContaining({
        alice: { 0: false }
      }));
    });

    it('should matchsearchForPartyInAllFiles with party: { 0: true, 5: true }', function () {
      expect(searchForPartyInAllFiles.News).toEqual(jasmine.objectContaining({
        party: { 0: true, 5: true }
      }));
    });

    it('should match searchForPartyInAllFiles with party: { 0: true, 1: true }', function () {
      expect(searchForPartyInAllFiles.book).not.toEqual(jasmine.objectContaining({
        party: { 0: true, 1: true }
      }));
    });

    it('should return Object as type of searchResult3', function () {
      expect(searchForAliceInBook instanceof Object).toBeTruthy();
    });

    it('should match searchForAliceInBook with alice: { 0: true }', function () {
      expect(searchForAliceInBook.Book).toEqual(jasmine.objectContaining({
        alice: { 0: true }
      }));
    });

    it('should match searchForAliceInBook with alice: { 0: false }', function () {
      expect(searchForAliceInBook.Book).not.toEqual(jasmine.objectContaining({
        alice: { 0: false }
      }));
    });

    it('should return Object asype of searchResult4', function () {
      expect(searchForPartyInNews instanceof Object).toBeTruthy();
    });

    it('should match searchForPartyInNews with  party: { 0: true, 5: true }', function () {
      expect(searchForPartyInNews.News).toEqual(jasmine.objectContaining({
        party: { 0: true, 5: true }
      }));
    });
  });

  describe('the inverted index getIndex method', function () {
    var getCorrectBookIndex = invertedIndex.getIndex('Book');
    var getEmptyIndex = invertedIndex.getIndex();
    it('should return object as typeof getCorrectBookIndex', function () {
      expect(getCorrectBookIndex instanceof Object).toBeTruthy();
    });

    it('should return false for getEmptyIndex', function () {
      expect(getEmptyIndex).toBeFalsy();
    });
  });

  describe('the inverted index validate method', function () {

    var emptyFileContent = invertedIndex.isValid(empty);
    var correctFileContent = invertedIndex.isValid(Book[0]);

    it('should return false for an empty json file', function () {
      expect(emptyFileContent).toBeFalsy();
    });

    it('should return true for correctFileContent', function () {
      expect(correctFileContent).toBeTruthy();
    });
  });
});

},{"./News":1,"./book.json":2,"./empty":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9lbXB0eS5qc29uIiwic3BlYy9pbnZlcnRlZC1pbmRleC10ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1hBLElBQU0sZ0JBQWdCLElBQUksYUFBSixFQUF0Qjs7QUFHQSxJQUFNLE9BQU8sUUFBUSxhQUFSLENBQWI7QUFDQSxJQUFNLE9BQU8sUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFNLFFBQVEsUUFBUSxTQUFSLENBQWQ7O0FBRUEsU0FBUyw4QkFBVCxFQUF5QyxZQUFNO0FBQzdDLE1BQU0sU0FBUyxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsQ0FBZjtBQUNBLE1BQU0sVUFBVSxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsQ0FBaEI7O0FBRUEsS0FBRyx1Q0FBSCxFQUE0QyxZQUFNO0FBQ2hELFdBQU8sa0JBQWtCLE1BQXpCLEVBQWlDLFVBQWpDO0FBQ0QsR0FGRDs7QUFJQSxLQUFHLDZD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Q0FBSCxFQUFpRCxZQUFNO0FBQ3JELGFBQU8sZ0JBQVAsRUFBeUIsU0FBekI7QUFDRCxLQUZEOztBQUlBLE9BQUcsMkNBQUgsRUFBZ0QsWUFBTTtBQUNwRCxhQUFPLGtCQUFQLEVBQTJCLFVBQTNCO0FBQ0QsS0FGRDtBQUdELEdBWkQ7QUFhRCxDQXRJSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz1bXG4gICB7XCJ0aXRsZVwiOiBcIldoeSBQRFAgbG9zdCBPbmRvIOKAkyBLYXNoYW11XCIsXG4gICAgXCJ0ZXh0XCI6XCIgVGhlIHNlbmF0b3IgYWxzbyBjcnRpY2lzZWQgdGhlIFNlbmF0b3IgQWhtZWQgTWFrYXJmaS1sZWQgTmF0aW9uYWwgQ2FyZXRha2VyIENvbW1pdHRlZSBvZiB0aGUgcGFydHkgb3ZlciB0aGUgc3RhdGVtZW50IGNyZWRpdGVkIHRvIGl0cyBzcG9rZXNtYW4sIFByaW5jZSBEYXlvIEFkZXlleWUsIHdoZXJlIGhlIHRocmVhdGVuZWQgdG8gc2FuY3Rpb24gdGhvc2UgaW4gdGhlIGNhbXAgb2YgU2VuYXRvciBBbGkgTW9kdSBTaGVyaWZmLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBBa2VyZWRvbHUgcmVhcGVkIGZyb20gUERQ4oCZcyBtaXN0YWtlc1wiLFxuICAgIFwidGV4dFwiOlwiRm9yIE9sdXNlZ3VuIE1pbWlrbywgdGhlIG91dGdvaW5nIGdvdmVybm9yIG9mIE9uZG8gU3RhdGUsIFNhdHVyZGF5IGdvdmVybm9yc2hpcCBlbGVjdGlvbiB3YXMgbGlrZSBhIHdhci4gVGhvdWdoIGhlIGhhZCBmb3VnaHQgbWFueSBwb2xpdGljYWwgYmF0dGxlcyBiZWZvcmUsIGNvbWluZyBvdXQgdW5zY2F0aGVkIGluIGFsbW9zdCBhbGwsIGhlIHNhdyB0aGUgbGFzdCBlbGVjdGlvbiBhcyB0aGUgbW9zdCBpbXBvcnRhbnQgcG9saXRpY2FsIGJhdHRsZSBoZSBuZWVkZWQgdG8gd2luIGluIG9yZGVyIHRvIHNhZmVndWFyZCBoaXMgcG9saXRpY2FsIGZ1dHVyZS5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgY2FuIE5pZ2VyaWEgY3VyYiBidXlpbmcgb2Ygdm90ZXMgZHVyaW5nIGVsZWN0aW9uc1wiLFxuICAgIFwidGV4dFwiOlwiVGhlcmUgYXJlIGVsZWN0b3JhbCBsYXdzIHJlZ3VsYXRpbmcgc3VjaCBwcmFjdGljZS4gQnV0IHRoZXNlIHByb3Zpc2lvbnMgYXJlIG5vdCBzdWZmaWNpZW50bHkgZW5mb3JjZWQuIE91ciBlbGVjdGlvbnMgb3VnaHQgbm90IHRvIGJlIGEgcHJvZHVjdCBvZiBjb25zcGlyYWN5IGRlZmluZWQgYnkgY2FzaC1hbmQtY2FycnkgZGVtb2NyYWN5LiBXZSBzaG91bGQgbGV0IHRoZSBwb3B1bGFyIHdpbGwgdG8gYmUgZnVsbHkgZXhwcmVzc2VkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIlRoZSBXZWFsdGhpZXN0IFBhc3RvcnMgaW4gdGhlIFdvcmxkXCIsXG4gICAgXCJ0ZXh0XCI6XCJNYW55IG1heSBoYXZlIHRoZWlyIGRvdWJ0cyBhcyB0byB3aGV0aGVyIHRoZXNlIHZlcnkgcmljaCBwcmVhY2hlcnMgYXJlIHByZS1vcmRhaW5lZCBvciBzZWxmLXByb2NsYWltZWQsIGJ1dCBvbmUgdGhpbmcgaXMgZm9yIHN1cmUsIHNwcmVhZGluZyB0aGUgd29yZCBoYXMgZ3JlYXRseSBpbXBhY3RlZCBub3Qgb25seSB0aGUgZWFycyB3aG8gaGVhciBpdCwgYnV0IGFsc28gdGhlIGJhbmsgYWNjb3VudHMgb2YgdGhlIG1vdXRocyB3aG8gcHJlYWNoIGl0LiBPbmUgY2FuIHNheSB0aGVzZSBwYXN0b3JzIGFyZSBpbmRlZWQg4oCYYmxlc3NlZC7igJkgSGVyZSBhcmUgdGhlIHJpY2hlc3QgcGFzdG9ycyBpbiB0aGUgd29ybGQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiTWl4ZWQgcmVhY3Rpb25zIGdyZWV0IEFrZXJlZG9sdeKAmXMgdmljdG9yeVwiLFxuICAgIFwidGV4dFwiOlwiIEplZ2VkZSwgd2hvIHNwb2tlIHRvIGpvdXJuYWxpc3RzIGluIEFrdXJlLCB0aGUgc3RhdGUgY2FwaXRhbCBvbiBTdW5kYXksIG5laXRoZXIgY29tbWVuZGVkIG5vciBjb25kZW1uZWQgdGhlIGNvbmR1Y3Qgb2YgdGhlIHBvbGwsIGJ1dCBzYWlkIHRoYXQgaGlzIHJlYWN0aW9uIGFib3V0IHRoZSBlbGVjdGlvbiB3b3VsZCBzb29uIGJlIG1hZGUgcHVibGljLi5cIlxuXG59LFxue1widGl0bGVcIjogXCJXaHkgUERQIGxvc3QgT25kbyDigJMgS2FzaGFtdVwiLFxuICAgIFwidGV4dFwiOlwiIFRoZSBzZW5hdG9yIGFsc28gY3J0aWNpc2VkIHRoZSBTZW5hdG9yIEFobWVkIE1ha2FyZmktbGVkIE5hdGlvbmFsIENhcmV0YWtlciBDb21taXR0ZWUgb2YgdGhlIHBhcnR5IG92ZXIgdGhlIHN0YXRlbWVudCBjcmVkaXRlZCB0byBpdHMgc3Bva2VzbWFuLCBQcmluY2UgRGF5byBBZGV5ZXllLCB3aGVyZSBoZSB0aHJlYXRlbmVkIHRvIHNhbmN0aW9uIHRob3NlIGluIHRoZSBjYW1wIG9mIFNlbmF0b3IgQWxpIE1vZHUgU2hlcmlmZi5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgQWtlcmVkb2x1IHJlYXBlZCBmcm9tIFBEUOKAmXMgbWlzdGFrZXNcIixcbiAgICBcInRleHRcIjpcIkZvciBPbHVzZWd1biBNaW1pa28sIHRoZSBvdXRnb2luZyBnb3Zlcm5vciBvZiBPbmRvIFN0YXRlLCBTYXR1cmRheSBnb3Zlcm5vcnNoaXAgZWxlY3Rpb24gd2FzIGxpa2UgYSB3YXIuIFRob3VnaCBoZSBoYWQgZm91Z2h0IG1hbnkgcG9saXRpY2FsIGJhdHRsZXMgYmVmb3JlLCBjb21pbmcgb3V0IHVuc2NhdGhlZCBpbiBhbG1vc3QgYWxsLCBoZSBzYXcgdGhlIGxhc3QgZWxlY3Rpb24gYXMgdGhlIG1vc3QgaW1wb3J0YW50IHBvbGl0aWNhbCBiYXR0bGUgaGUgbmVlZGVkIHRvIHdpbiBpbiBvcmRlciB0byBzYWZlZ3VhcmQgaGlzIHBvbGl0aWNhbCBmdXR1cmUuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IGNhbiBOaWdlcmlhIGN1cmIgYnV5aW5nIG9mIHZvdGVzIGR1cmluZyBlbGVjdGlvbnNcIixcbiAgICBcInRleHRcIjpcIlRoZXJlIGFyZSBlbGVjdG9yYWwgbGF3cyByZWd1bGF0aW5nIHN1Y2ggcHJhY3RpY2UuIEJ1dCB0aGVzZSBwcm92aXNpb25zIGFyZSBub3Qgc3VmZmljaWVudGx5IGVuZm9yY2VkLiBPdXIgZWxlY3Rpb25zIG91Z2h0IG5vdCB0byBiZSBhIHByb2R1Y3Qgb2YgY29uc3BpcmFjeSBkZWZpbmVkIGJ5IGNhc2gtYW5kLWNhcnJ5IGRlbW9jcmFjeS4gV2Ugc2hvdWxkIGxldCB0aGUgcG9wdWxhciB3aWxsIHRvIGJlIGZ1bGx5IGV4cHJlc3NlZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJUaGUgV2VhbHRoaWVzdCBQYXN0b3JzIGluIHRoZSBXb3JsZFwiLFxuICAgIFwidGV4dFwiOlwiTWFueSBtYXkgaGF2ZSB0aGVpciBkb3VidHMgYXMgdG8gd2hldGhlciB0aGVzZSB2ZXJ5IHJpY2ggcHJlYWNoZXJzIGFyZSBwcmUtb3JkYWluZWQgb3Igc2VsZi1wcm9jbGFpbWVkLCBidXQgb25lIHRoaW5nIGlzIGZvciBzdXJlLCBzcHJlYWRpbmcgdGhlIHdvcmQgaGFzIGdyZWF0bHkgaW1wYWN0ZWQgbm90IG9ubHkgdGhlIGVhcnMgd2hvIGhlYXIgaXQsIGJ1dCBhbHNvIHRoZSBiYW5rIGFjY291bnRzIG9mIHRoZSBtb3V0aHMgd2hvIHByZWFjaCBpdC4gT25lIGNhbiBzYXkgdGhlc2UgcGFzdG9ycyBhcmUgaW5kZWVkIOKAmGJsZXNzZWQu4oCZIEhlcmUgYXJlIHRoZSByaWNoZXN0IHBhc3RvcnMgaW4gdGhlIHdvcmxkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIk1peGVkIHJlYWN0aW9ucyBncmVldCBBa2VyZWRvbHXigJlzIHZpY3RvcnlcIixcbiAgICBcInRleHRcIjpcIiBKZWdlZGUsIHdobyBzcG9rZSB0byBqb3VybmFsaXN0cyBpbiBBa3VyZSwgdGhlIHN0YXRlIGNhcGl0YWwgb24gU3VuZGF5LCBuZWl0aGVyIGNvbW1lbmRlZCBub3IgY29uZGVtbmVkIHRoZSBjb25kdWN0IG9mIHRoZSBwb2xsLCBidXQgc2FpZCB0aGF0IGhpcyByZWFjdGlvbiBhYm91dCB0aGUgZWxlY3Rpb24gd291bGQgc29vbiBiZSBtYWRlIHB1YmxpYy4uXCJcblxufVxuXVxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJ0aXRsZVwiOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInRleHRcIjogXCJBbGljZSBmYWxscyBpbnRvIGEgcmFiYml0IGhvbGUgYW5kIGVudGVycyBhIHdvcmxkIGZ1bGwgb2YgaW1hZ2luYXRpb24uXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidGV4dFwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG4gIH1cbl1cbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwiIFwiOiBcIiBcIixcbiAgICBcIiBcIjogXCIgXCJcbiAgfSxcblxuICB7XG4gICAgXCIgXCI6IFwiXCIsXG4gICAgXCIgXCI6IFwiIFwiXG4gIH1cbl1cbiIsImNvbnN0IGludmVydGVkSW5kZXggPSBuZXcgSW52ZXJ0ZWRJbmRleCgpO1xuXG5cbmNvbnN0IEJvb2sgPSByZXF1aXJlKCcuL2Jvb2suanNvbicpO1xuY29uc3QgTmV3cyA9IHJlcXVpcmUoJy4vTmV3cycpO1xuY29uc3QgZW1wdHkgPSByZXF1aXJlKCcuL2VtcHR5Jyk7XG5cbmRlc2NyaWJlKCdJbnZlcnRlZCBpbmRleCBjcmVhdGUgbWV0aG9kJywgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBpbnZlcnRlZEluZGV4LmNyZWF0ZUluZGV4KEJvb2ssICdCb29rJyk7XG4gIGNvbnN0IHJlc3VsdDIgPSBpbnZlcnRlZEluZGV4LmNyZWF0ZUluZGV4KE5ld3MsICdOZXdzJyk7XG5cbiAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzIHR5cGVvZiByZXN1bHQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJlc3VsdCBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICBleHBlY3QocmVzdWx0KS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICB9KSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICBleHBlY3QocmVzdWx0KS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHQgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgIG9mOiB7IDA6IHRydWUsIDE6IHRydWUgfVxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHR0IHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXN1bHQyKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICB9KSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXN1bHQyKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNDogdHJ1ZSB9XG4gICAgfSkpO1xuICB9KTtcbiAgXG4gIGRlc2NyaWJlKCdUaGUgaW52ZXJ0ZWQgaW5kZXggc2VhcmNoIG1ldGhvZCcsICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hGb3JBbGljZUluQWxsRmlsZXMgPSBpbnZlcnRlZEluZGV4XG4gICAgLnNlYXJjaEZpbGVzKFsnYWxpY2UnXSwgJ0FsbCcpO1xuICAgIGNvbnN0IHNlYXJjaEZvclBhcnR5SW5BbGxGaWxlcyA9IGludmVydGVkSW5kZXhcbiAgICAuc2VhcmNoRmlsZXMoWydwYXJ0eSddLCAnQWxsJyk7XG4gICAgY29uc3Qgc2VhcmNoRm9yQWxpY2VJbkJvb2sgPSBpbnZlcnRlZEluZGV4XG4gICAgLnNlYXJjaEZpbGVzKFsnYWxpY2UnXSwgJ0Jvb2snKTtcbiAgICBjb25zdCBzZWFyY2hGb3JQYXJ0eUluTmV3cyA9IGludmVydGVkSW5kZXhcbiAgICAuc2VhcmNoRmlsZXMoWydwYXJ0eSddLCAnTmV3cycpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzIHR5cGUgb2Ygc2VhcmNoIHJlc3VsdCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQWxsRmlsZXMgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoRm9yQWxpY2VJbkFsbEZpbGVzIHdpdGggYWxpY2U6IHsgMDogdHJ1ZSB9JywgXG4gICAgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaEZvckFsaWNlSW5BbGxGaWxlcy5Cb29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hGb3JBbGljZUluQWxsRmlsZXMgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoRm9yQWxpY2VJbkFsbEZpbGVzLkJvb2spLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgICAgICB9KSk7XG4gICAgfSk7XG4gICAgXG4gICAgaXQoJ3Nob3VsZCBtYXRjaHNlYXJjaEZvclBhcnR5SW5BbGxGaWxlcyB3aXRoIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JQYXJ0eUluQWxsRmlsZXMuTmV3cykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoRm9yUGFydHlJbkFsbEZpbGVzIHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9JywgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hGb3JQYXJ0eUluQWxsRmlsZXMuYm9vaykubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyB0eXBlIG9mIHNlYXJjaFJlc3VsdDMnLCBcbiAgICAgICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQm9vayBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hGb3JBbGljZUluQm9vayB3aXRoIGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQm9vay5Cb29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hGb3JBbGljZUluQm9vayB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLCBcbiAgICAgICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQm9vay5Cb29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXN5cGUgb2Ygc2VhcmNoUmVzdWx0NCcsIFxuICAgICAgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaEZvclBhcnR5SW5OZXdzIGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaEZvclBhcnR5SW5OZXdzIHdpdGggIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsIFxuICAgICAgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaEZvclBhcnR5SW5OZXdzLk5ld3MpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgndGhlIGludmVydGVkIGluZGV4IGdldEluZGV4IG1ldGhvZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGdldENvcnJlY3RCb29rSW5kZXggPSBpbnZlcnRlZEluZGV4LmdldEluZGV4KCdCb29rJylcbiAgICAgIGNvbnN0IGdldEVtcHR5SW5kZXggPSBpbnZlcnRlZEluZGV4LmdldEluZGV4KClcbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIG9iamVjdCBhcyB0eXBlb2YgZ2V0Q29ycmVjdEJvb2tJbmRleCcsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGdldENvcnJlY3RCb29rSW5kZXggaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICAgIH0pOyBcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIGdldEVtcHR5SW5kZXgnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChnZXRFbXB0eUluZGV4KS50b0JlRmFsc3koKTtcbiAgICAgIH0pOyBcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCd0aGUgaW52ZXJ0ZWQgaW5kZXggdmFsaWRhdGUgbWV0aG9kJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBlbXB0eUZpbGVDb250ZW50ID0gaW52ZXJ0ZWRJbmRleC5pc1ZhbGlkKGVtcHR5KTtcbiAgICAgIGNvbnN0IGNvcnJlY3RGaWxlQ29udGVudCA9IGludmVydGVkSW5kZXguaXNWYWxpZChCb29rWzBdKTtcbiAgICAgIFxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIGFuIGVtcHR5IGpzb24gZmlsZScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGVtcHR5RmlsZUNvbnRlbnQpLnRvQmVGYWxzeSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgZm9yIGNvcnJlY3RGaWxlQ29udGVudCcsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGNvcnJlY3RGaWxlQ29udGVudCkudG9CZVRydXRoeSgpO1xuICAgICAgfSk7IFxuICAgIH0pO1xuICB9KTtcbiJdfQ==
