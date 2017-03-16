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

var invertedObject = new InvertedIndex();

var correctBook = require('./book.json');
var wrongBook = require('./wrongFormat.json');
var zeroLength = require('./length.json');
var book = require('./News');
var emptyFile = require('./empty');
var rightFile = require('./rightBook');

describe('Inverted Index test Suit', function () {
  describe('Inverted index create method', function () {
    var result = invertedObject.createIndex(correctBook, 'correctBook');
    var result2 = invertedObject.createIndex(book, 'book');

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
      var searchResult = invertedObject.searchFiles(['alice'], 'All');
      var searchResult2 = invertedObject.searchFiles(['party'], 'All');
      var searchResult3 = invertedObject.searchFiles(['alice'], 'correctBook');
      var searchResult4 = invertedObject.searchFiles(['party'], 'book');

      it('should return Object as type of search result', function () {
        expect(searchResult instanceof Object).toBeTruthy();
      });

      it('should match searchResult with alice: { 0: true }', function () {
        expect(searchResult.correctBook).toEqual(jasmine.objectContaining({
          alice: { 0: true }
        }));
      });

      it('should match searchResult with alice: { 0: false }', function () {
        expect(searchResult.correctBook).not.toEqual(jasmine.objectContaining({
          alice: { 0: false }
        }));
      });

      it('should match searchResult2 with party: { 0: true, 5: true }', function () {
        expect(searchResult2.book).toEqual(jasmine.objectContaining({
          party: { 0: true, 5: true }
        }));
      });

      it('should match searchResult2 with party: { 0: true, 1: true }', function () {
        expect(searchResult2.book).not.toEqual(jasmine.objectContaining({
          party: { 0: true, 1: true }
        }));
      });

      it('should return Object as type of searchResult3', function () {
        expect(searchResult3 instanceof Object).toBeTruthy();
      });

      it('should match searchResult3 with alice: { 0: true }', function () {
        expect(searchResult3.correctBook).toEqual(jasmine.objectContaining({
          alice: { 0: true }
        }));
      });

      it('should match searchResult3 with alice: { 0: false }', function () {
        expect(searchResult3.correctBook).not.toEqual(jasmine.objectContaining({
          alice: { 0: false }
        }));
      });

      it('should return Object asype of searchResult4', function () {
        expect(searchResult4 instanceof Object).toBeTruthy();
      });

      it('should match searchResult4 with  party: { 0: true, 5: true }', function () {
        expect(searchResult4.book).toEqual(jasmine.objectContaining({
          party: { 0: true, 5: true }
        }));
      });
    });

    describe('the inverted index getIndicies method', function () {
      var getIndeciesFile = invertedObject.getIndex('correctBook');
      var getIndeciesFile2 = invertedObject.getIndex();
      it('should return object as typeof getIndeciesFile', function () {
        expect(getIndeciesFile instanceof Object).toBeTruthy();
      });

      it('should return false for getAllIndecies2', function () {
        expect(getIndeciesFile2).toBeFalsy();
      });
    });

    describe('the inverted index validate method', function () {

      var emptyJsonFile = invertedObject.validateFile(emptyFile);
      var rightBook = invertedObject.validateFile(correctBook[0]);

      it('should return false for an empty json file', function () {
        expect(emptyJsonFile).toBeFalsy();
      });

      it('should return true', function () {
        console.log(rightBook);
        expect(rightBook).toBeTruthy();
      });
    });
  });
});

},{"./News":1,"./book.json":2,"./empty":3,"./length.json":5,"./rightBook":6,"./wrongFormat.json":7}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
module.exports=[
  {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  }
]

},{}],7:[function(require,module,exports){
module.exports=[
  {  "name" : "Alice in Wonderland",
    "value": "Alice falls into a rabbit hole and enters a world full of imagination."
  }
,
   { "name": "The Lord of the Rings: The Fellowship of the Ring.",
    "value": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."

   }
]
},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9lbXB0eS5qc29uIiwic3BlYy9pbnZlcnRlZC1pbmRleC10ZXN0LmpzIiwic3BlYy9sZW5ndGguanNvbiIsInNwZWMvcmlnaHRCb29rLmpzb24iLCJzcGVjL3dyb25nRm9ybWF0Lmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDWEEsSUFBTSxpQkFBaUIsSUFBSSxhQUFKLEVBQXZCOztBQUdBLElBQU0sY0FBYyxRQUFRLGFBQVIsQ0FBcEI7QUFDQSxJQUFNLFlBQVksUUFBUSxvQkFBUixDQUFsQjtBQUNBLElBQU0sYUFBYSxRQUFRLGVBQVIsQ0FBbkI7QUFDQSxJQUFNLE9BQU8sUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFNLFlBQVksUUFBUSxTQUFSLENBQWxCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsYUFBUixDQUFsQjs7QUFFQSxTQUFTLDBCQUFULEVBQXFDLFlBQU07QUFDekMsV0FBUyw4QkFBVCxFQUF5QyxZQUFNO0FBQzdDLFFB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LGdCQUFQLEVBQXlCLFNBQXpCO0FBQ0QsT0FGRDtBQUdELEtBVkQ7O0FBWUEsYUFBUyxvQ0FBVCxFQUErQyxZQUFNOztBQUVuRCxVQUFNLGdCQUFnQixlQUFlLFlBQWYsQ0FBNEIsU0FBNUIsQ0FBdEI7QUFDQSxVQUFNLFlBQVksZUFBZSxZQUFmLENBQTRCLFlBQVksQ0FBWixDQUE1QixDQUFsQjs7QUFFQSxTQUFHLDRDQUFILEVBQWlELFlBQU07QUFDckQsZUFBTyxhQUFQLEVBQXNCLFNBQXRCO0FBQ0QsT0FGRDs7QUFJQSxTQUFHLG9CQUFILEVBQXlCLFlBQU07QUFDN0IsZ0JBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxlQUFPLFNBQVAsRUFBa0IsVUFBbEI7QUFDRCxPQUhEO0FBSUQsS0FiRDtBQWNELEdBbklEO0FBb0lELENBcklEOzs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz1bXG4gICB7XCJ0aXRsZVwiOiBcIldoeSBQRFAgbG9zdCBPbmRvIOKAkyBLYXNoYW11XCIsXG4gICAgXCJ0ZXh0XCI6XCIgVGhlIHNlbmF0b3IgYWxzbyBjcnRpY2lzZWQgdGhlIFNlbmF0b3IgQWhtZWQgTWFrYXJmaS1sZWQgTmF0aW9uYWwgQ2FyZXRha2VyIENvbW1pdHRlZSBvZiB0aGUgcGFydHkgb3ZlciB0aGUgc3RhdGVtZW50IGNyZWRpdGVkIHRvIGl0cyBzcG9rZXNtYW4sIFByaW5jZSBEYXlvIEFkZXlleWUsIHdoZXJlIGhlIHRocmVhdGVuZWQgdG8gc2FuY3Rpb24gdGhvc2UgaW4gdGhlIGNhbXAgb2YgU2VuYXRvciBBbGkgTW9kdSBTaGVyaWZmLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBBa2VyZWRvbHUgcmVhcGVkIGZyb20gUERQ4oCZcyBtaXN0YWtlc1wiLFxuICAgIFwidGV4dFwiOlwiRm9yIE9sdXNlZ3VuIE1pbWlrbywgdGhlIG91dGdvaW5nIGdvdmVybm9yIG9mIE9uZG8gU3RhdGUsIFNhdHVyZGF5IGdvdmVybm9yc2hpcCBlbGVjdGlvbiB3YXMgbGlrZSBhIHdhci4gVGhvdWdoIGhlIGhhZCBmb3VnaHQgbWFueSBwb2xpdGljYWwgYmF0dGxlcyBiZWZvcmUsIGNvbWluZyBvdXQgdW5zY2F0aGVkIGluIGFsbW9zdCBhbGwsIGhlIHNhdyB0aGUgbGFzdCBlbGVjdGlvbiBhcyB0aGUgbW9zdCBpbXBvcnRhbnQgcG9saXRpY2FsIGJhdHRsZSBoZSBuZWVkZWQgdG8gd2luIGluIG9yZGVyIHRvIHNhZmVndWFyZCBoaXMgcG9saXRpY2FsIGZ1dHVyZS5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgY2FuIE5pZ2VyaWEgY3VyYiBidXlpbmcgb2Ygdm90ZXMgZHVyaW5nIGVsZWN0aW9uc1wiLFxuICAgIFwidGV4dFwiOlwiVGhlcmUgYXJlIGVsZWN0b3JhbCBsYXdzIHJlZ3VsYXRpbmcgc3VjaCBwcmFjdGljZS4gQnV0IHRoZXNlIHByb3Zpc2lvbnMgYXJlIG5vdCBzdWZmaWNpZW50bHkgZW5mb3JjZWQuIE91ciBlbGVjdGlvbnMgb3VnaHQgbm90IHRvIGJlIGEgcHJvZHVjdCBvZiBjb25zcGlyYWN5IGRlZmluZWQgYnkgY2FzaC1hbmQtY2FycnkgZGVtb2NyYWN5LiBXZSBzaG91bGQgbGV0IHRoZSBwb3B1bGFyIHdpbGwgdG8gYmUgZnVsbHkgZXhwcmVzc2VkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIlRoZSBXZWFsdGhpZXN0IFBhc3RvcnMgaW4gdGhlIFdvcmxkXCIsXG4gICAgXCJ0ZXh0XCI6XCJNYW55IG1heSBoYXZlIHRoZWlyIGRvdWJ0cyBhcyB0byB3aGV0aGVyIHRoZXNlIHZlcnkgcmljaCBwcmVhY2hlcnMgYXJlIHByZS1vcmRhaW5lZCBvciBzZWxmLXByb2NsYWltZWQsIGJ1dCBvbmUgdGhpbmcgaXMgZm9yIHN1cmUsIHNwcmVhZGluZyB0aGUgd29yZCBoYXMgZ3JlYXRseSBpbXBhY3RlZCBub3Qgb25seSB0aGUgZWFycyB3aG8gaGVhciBpdCwgYnV0IGFsc28gdGhlIGJhbmsgYWNjb3VudHMgb2YgdGhlIG1vdXRocyB3aG8gcHJlYWNoIGl0LiBPbmUgY2FuIHNheSB0aGVzZSBwYXN0b3JzIGFyZSBpbmRlZWQg4oCYYmxlc3NlZC7igJkgSGVyZSBhcmUgdGhlIHJpY2hlc3QgcGFzdG9ycyBpbiB0aGUgd29ybGQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiTWl4ZWQgcmVhY3Rpb25zIGdyZWV0IEFrZXJlZG9sdeKAmXMgdmljdG9yeVwiLFxuICAgIFwidGV4dFwiOlwiIEplZ2VkZSwgd2hvIHNwb2tlIHRvIGpvdXJuYWxpc3RzIGluIEFrdXJlLCB0aGUgc3RhdGUgY2FwaXRhbCBvbiBTdW5kYXksIG5laXRoZXIgY29tbWVuZGVkIG5vciBjb25kZW1uZWQgdGhlIGNvbmR1Y3Qgb2YgdGhlIHBvbGwsIGJ1dCBzYWlkIHRoYXQgaGlzIHJlYWN0aW9uIGFib3V0IHRoZSBlbGVjdGlvbiB3b3VsZCBzb29uIGJlIG1hZGUgcHVibGljLi5cIlxuXG59LFxue1widGl0bGVcIjogXCJXaHkgUERQIGxvc3QgT25kbyDigJMgS2FzaGFtdVwiLFxuICAgIFwidGV4dFwiOlwiIFRoZSBzZW5hdG9yIGFsc28gY3J0aWNpc2VkIHRoZSBTZW5hdG9yIEFobWVkIE1ha2FyZmktbGVkIE5hdGlvbmFsIENhcmV0YWtlciBDb21taXR0ZWUgb2YgdGhlIHBhcnR5IG92ZXIgdGhlIHN0YXRlbWVudCBjcmVkaXRlZCB0byBpdHMgc3Bva2VzbWFuLCBQcmluY2UgRGF5byBBZGV5ZXllLCB3aGVyZSBoZSB0aHJlYXRlbmVkIHRvIHNhbmN0aW9uIHRob3NlIGluIHRoZSBjYW1wIG9mIFNlbmF0b3IgQWxpIE1vZHUgU2hlcmlmZi5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgQWtlcmVkb2x1IHJlYXBlZCBmcm9tIFBEUOKAmXMgbWlzdGFrZXNcIixcbiAgICBcInRleHRcIjpcIkZvciBPbHVzZWd1biBNaW1pa28sIHRoZSBvdXRnb2luZyBnb3Zlcm5vciBvZiBPbmRvIFN0YXRlLCBTYXR1cmRheSBnb3Zlcm5vcnNoaXAgZWxlY3Rpb24gd2FzIGxpa2UgYSB3YXIuIFRob3VnaCBoZSBoYWQgZm91Z2h0IG1hbnkgcG9saXRpY2FsIGJhdHRsZXMgYmVmb3JlLCBjb21pbmcgb3V0IHVuc2NhdGhlZCBpbiBhbG1vc3QgYWxsLCBoZSBzYXcgdGhlIGxhc3QgZWxlY3Rpb24gYXMgdGhlIG1vc3QgaW1wb3J0YW50IHBvbGl0aWNhbCBiYXR0bGUgaGUgbmVlZGVkIHRvIHdpbiBpbiBvcmRlciB0byBzYWZlZ3VhcmQgaGlzIHBvbGl0aWNhbCBmdXR1cmUuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IGNhbiBOaWdlcmlhIGN1cmIgYnV5aW5nIG9mIHZvdGVzIGR1cmluZyBlbGVjdGlvbnNcIixcbiAgICBcInRleHRcIjpcIlRoZXJlIGFyZSBlbGVjdG9yYWwgbGF3cyByZWd1bGF0aW5nIHN1Y2ggcHJhY3RpY2UuIEJ1dCB0aGVzZSBwcm92aXNpb25zIGFyZSBub3Qgc3VmZmljaWVudGx5IGVuZm9yY2VkLiBPdXIgZWxlY3Rpb25zIG91Z2h0IG5vdCB0byBiZSBhIHByb2R1Y3Qgb2YgY29uc3BpcmFjeSBkZWZpbmVkIGJ5IGNhc2gtYW5kLWNhcnJ5IGRlbW9jcmFjeS4gV2Ugc2hvdWxkIGxldCB0aGUgcG9wdWxhciB3aWxsIHRvIGJlIGZ1bGx5IGV4cHJlc3NlZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJUaGUgV2VhbHRoaWVzdCBQYXN0b3JzIGluIHRoZSBXb3JsZFwiLFxuICAgIFwidGV4dFwiOlwiTWFueSBtYXkgaGF2ZSB0aGVpciBkb3VidHMgYXMgdG8gd2hldGhlciB0aGVzZSB2ZXJ5IHJpY2ggcHJlYWNoZXJzIGFyZSBwcmUtb3JkYWluZWQgb3Igc2VsZi1wcm9jbGFpbWVkLCBidXQgb25lIHRoaW5nIGlzIGZvciBzdXJlLCBzcHJlYWRpbmcgdGhlIHdvcmQgaGFzIGdyZWF0bHkgaW1wYWN0ZWQgbm90IG9ubHkgdGhlIGVhcnMgd2hvIGhlYXIgaXQsIGJ1dCBhbHNvIHRoZSBiYW5rIGFjY291bnRzIG9mIHRoZSBtb3V0aHMgd2hvIHByZWFjaCBpdC4gT25lIGNhbiBzYXkgdGhlc2UgcGFzdG9ycyBhcmUgaW5kZWVkIOKAmGJsZXNzZWQu4oCZIEhlcmUgYXJlIHRoZSByaWNoZXN0IHBhc3RvcnMgaW4gdGhlIHdvcmxkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIk1peGVkIHJlYWN0aW9ucyBncmVldCBBa2VyZWRvbHXigJlzIHZpY3RvcnlcIixcbiAgICBcInRleHRcIjpcIiBKZWdlZGUsIHdobyBzcG9rZSB0byBqb3VybmFsaXN0cyBpbiBBa3VyZSwgdGhlIHN0YXRlIGNhcGl0YWwgb24gU3VuZGF5LCBuZWl0aGVyIGNvbW1lbmRlZCBub3IgY29uZGVtbmVkIHRoZSBjb25kdWN0IG9mIHRoZSBwb2xsLCBidXQgc2FpZCB0aGF0IGhpcyByZWFjdGlvbiBhYm91dCB0aGUgZWxlY3Rpb24gd291bGQgc29vbiBiZSBtYWRlIHB1YmxpYy4uXCJcblxufVxuXVxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJ0aXRsZVwiOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInRleHRcIjogXCJBbGljZSBmYWxscyBpbnRvIGEgcmFiYml0IGhvbGUgYW5kIGVudGVycyBhIHdvcmxkIGZ1bGwgb2YgaW1hZ2luYXRpb24uXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidGV4dFwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG4gIH1cbl1cbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwiIFwiOiBcIiBcIixcbiAgICBcIiBcIjogXCIgXCJcbiAgfSxcblxuICB7XG4gICAgXCIgXCI6IFwiXCIsXG4gICAgXCIgXCI6IFwiIFwiXG4gIH1cbl1cbiIsImNvbnN0IGludmVydGVkT2JqZWN0ID0gbmV3IEludmVydGVkSW5kZXgoKTtcblxuXG5jb25zdCBjb3JyZWN0Qm9vayA9IHJlcXVpcmUoJy4vYm9vay5qc29uJyk7XG5jb25zdCB3cm9uZ0Jvb2sgPSByZXF1aXJlKCcuL3dyb25nRm9ybWF0Lmpzb24nKTtcbmNvbnN0IHplcm9MZW5ndGggPSByZXF1aXJlKCcuL2xlbmd0aC5qc29uJyk7XG5jb25zdCBib29rID0gcmVxdWlyZSgnLi9OZXdzJyk7XG5jb25zdCBlbXB0eUZpbGUgPSByZXF1aXJlKCcuL2VtcHR5Jyk7XG5jb25zdCByaWdodEZpbGUgPSByZXF1aXJlKCcuL3JpZ2h0Qm9vaycpO1xuXG5kZXNjcmliZSgnSW52ZXJ0ZWQgSW5kZXggdGVzdCBTdWl0JywgKCkgPT4ge1xuICBkZXNjcmliZSgnSW52ZXJ0ZWQgaW5kZXggY3JlYXRlIG1ldGhvZCcsICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBpbnZlcnRlZE9iamVjdC5jcmVhdGVJbmRleChjb3JyZWN0Qm9vaywgJ2NvcnJlY3RCb29rJyk7XG4gICAgY29uc3QgcmVzdWx0MiA9IGludmVydGVkT2JqZWN0LmNyZWF0ZUluZGV4KGJvb2ssICdib29rJyk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgdHlwZW9mIHJlc3VsdCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChyZXN1bHQgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgb2Y6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdHQgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3QocmVzdWx0MikudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHJlc3VsdDIpLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDQ6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ1RoZSBpbnZlcnRlZCBpbmRleCBzZWFyY2ggbWV0aG9kJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydhbGljZSddLCAnQWxsJyk7XG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHQyID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydwYXJ0eSddLCAnQWxsJyk7XG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHQzID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydhbGljZSddLCAnY29ycmVjdEJvb2snKTtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdDQgPSBpbnZlcnRlZE9iamVjdC5zZWFyY2hGaWxlcyhbJ3BhcnR5J10sICdib29rJyk7XG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyB0eXBlIG9mIHNlYXJjaCByZXN1bHQnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IHRydWUgfScsIFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0LmNvcnJlY3RCb29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQuY29ycmVjdEJvb2spLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hSZXN1bHQyIHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0Mi5ib29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdDIgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH0nLCBcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdDIuYm9vaykubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyB0eXBlIG9mIHNlYXJjaFJlc3VsdDMnLCBcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdDMgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdDMgd2l0aCBhbGljZTogeyAwOiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQzLmNvcnJlY3RCb29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdDMgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQzLmNvcnJlY3RCb29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhc3lwZSBvZiBzZWFyY2hSZXN1bHQ0JywgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQ0IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hSZXN1bHQ0IHdpdGggIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsIFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0NC5ib29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3RoZSBpbnZlcnRlZCBpbmRleCBnZXRJbmRpY2llcyBtZXRob2QnLCAoKSA9PiB7XG4gICAgICBjb25zdCBnZXRJbmRlY2llc0ZpbGUgPSBpbnZlcnRlZE9iamVjdC5nZXRJbmRleCgnY29ycmVjdEJvb2snKVxuICAgICAgY29uc3QgZ2V0SW5kZWNpZXNGaWxlMiA9IGludmVydGVkT2JqZWN0LmdldEluZGV4KClcbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIG9iamVjdCBhcyB0eXBlb2YgZ2V0SW5kZWNpZXNGaWxlJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QoZ2V0SW5kZWNpZXNGaWxlIGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgICB9KTsgXG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGZvciBnZXRBbGxJbmRlY2llczInLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChnZXRJbmRlY2llc0ZpbGUyKS50b0JlRmFsc3koKTtcbiAgICAgIH0pOyBcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCd0aGUgaW52ZXJ0ZWQgaW5kZXggdmFsaWRhdGUgbWV0aG9kJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBlbXB0eUpzb25GaWxlID0gaW52ZXJ0ZWRPYmplY3QudmFsaWRhdGVGaWxlKGVtcHR5RmlsZSk7XG4gICAgICBjb25zdCByaWdodEJvb2sgPSBpbnZlcnRlZE9iamVjdC52YWxpZGF0ZUZpbGUoY29ycmVjdEJvb2tbMF0pO1xuICAgICAgXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgYW4gZW1wdHkganNvbiBmaWxlJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QoZW1wdHlKc29uRmlsZSkudG9CZUZhbHN5KCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZScsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmlnaHRCb29rKTtcbiAgICAgICAgZXhwZWN0KHJpZ2h0Qm9vaykudG9CZVRydXRoeSgpO1xuICAgICAgfSk7IFxuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJcIjogXCJcIixcbiAgICBcIlwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIlwiOiBcIlwiLFxuICAgIFwiXCI6IFwiXCJcbiAgfVxuXSIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwidGl0bGVcIjogXCJBbGljZSBpbiBXb25kZXJsYW5kXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH1cbl1cbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAgeyAgXCJuYW1lXCIgOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInZhbHVlXCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH1cbixcbiAgIHsgXCJuYW1lXCI6IFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5cIixcbiAgICBcInZhbHVlXCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcblxuICAgfVxuXSJdfQ==
