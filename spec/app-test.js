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

      var emptyJsonFile = invertedObject.isValid(emptyFile);
      var rightBook = invertedObject.isValid(correctBook[0]);

      it('should return false for an empty json file', function () {
        expect(emptyJsonFile).toBeFalsy();
      });

      it('should return true', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9lbXB0eS5qc29uIiwic3BlYy9pbnZlcnRlZC1pbmRleC10ZXN0LmpzIiwic3BlYy9sZW5ndGguanNvbiIsInNwZWMvcmlnaHRCb29rLmpzb24iLCJzcGVjL3dyb25nRm9ybWF0Lmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDWEEsSUFBTSxpQkFBaUIsSUFBSSxhQUFKLEVBQXZCOztBQUdBLElBQU0sY0FBYyxRQUFRLGFBQVIsQ0FBcEI7QUFDQSxJQUFNLFlBQVksUUFBUSxvQkFBUixDQUFsQjtBQUNBLElBQU0sYUFBYSxRQUFRLGVBQVIsQ0FBbkI7QUFDQSxJQUFNLE9BQU8sUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFNLFlBQVksUUFBUSxTQUFSLENBQWxCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsYUFBUixDQUFsQjs7QUFFQSxTQUFTLDBCQUFULEVBQXFDLFlBQU07QUFDekMsV0FBUyw4QkFBVCxFQUF5QyxZQUFNO0FBQzdDLFFB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LGdCQUFQLEVBQXlCLFNBQXpCO0FBQ0QsT0FGRDtBQUdELEtBVkQ7O0FBWUEsYUFBUyxvQ0FBVCxFQUErQyxZQUFNOztBQUVuRCxVQUFNLGdCQUFnQixlQUFlLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBdEI7QUFDQSxVQUFNLFlBQVksZUFBZSxPQUFmLENBQXVCLFlBQVksQ0FBWixDQUF2QixDQUFsQjs7QUFFQSxTQUFHLDRDQUFILEVBQWlELFlBQU07QUFDckQsZUFBTyxhQUFQLEVBQXNCLFNBQXRCO0FBQ0QsT0FGRDs7QUFJQSxTQUFHLG9CQUFILEVBQXlCLFlBQU07QUFDN0IsZUFBTyxTQUFQLEVBQWtCLFVBQWxCO0FBQ0QsT0FGRDtBQUdELEtBWkQ7QUFhRCxHQWxJRDtBQW1JRCxDQXBJRDs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9W1xuICAge1widGl0bGVcIjogXCJXaHkgUERQIGxvc3QgT25kbyDigJMgS2FzaGFtdVwiLFxuICAgIFwidGV4dFwiOlwiIFRoZSBzZW5hdG9yIGFsc28gY3J0aWNpc2VkIHRoZSBTZW5hdG9yIEFobWVkIE1ha2FyZmktbGVkIE5hdGlvbmFsIENhcmV0YWtlciBDb21taXR0ZWUgb2YgdGhlIHBhcnR5IG92ZXIgdGhlIHN0YXRlbWVudCBjcmVkaXRlZCB0byBpdHMgc3Bva2VzbWFuLCBQcmluY2UgRGF5byBBZGV5ZXllLCB3aGVyZSBoZSB0aHJlYXRlbmVkIHRvIHNhbmN0aW9uIHRob3NlIGluIHRoZSBjYW1wIG9mIFNlbmF0b3IgQWxpIE1vZHUgU2hlcmlmZi5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgQWtlcmVkb2x1IHJlYXBlZCBmcm9tIFBEUOKAmXMgbWlzdGFrZXNcIixcbiAgICBcInRleHRcIjpcIkZvciBPbHVzZWd1biBNaW1pa28sIHRoZSBvdXRnb2luZyBnb3Zlcm5vciBvZiBPbmRvIFN0YXRlLCBTYXR1cmRheSBnb3Zlcm5vcnNoaXAgZWxlY3Rpb24gd2FzIGxpa2UgYSB3YXIuIFRob3VnaCBoZSBoYWQgZm91Z2h0IG1hbnkgcG9saXRpY2FsIGJhdHRsZXMgYmVmb3JlLCBjb21pbmcgb3V0IHVuc2NhdGhlZCBpbiBhbG1vc3QgYWxsLCBoZSBzYXcgdGhlIGxhc3QgZWxlY3Rpb24gYXMgdGhlIG1vc3QgaW1wb3J0YW50IHBvbGl0aWNhbCBiYXR0bGUgaGUgbmVlZGVkIHRvIHdpbiBpbiBvcmRlciB0byBzYWZlZ3VhcmQgaGlzIHBvbGl0aWNhbCBmdXR1cmUuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IGNhbiBOaWdlcmlhIGN1cmIgYnV5aW5nIG9mIHZvdGVzIGR1cmluZyBlbGVjdGlvbnNcIixcbiAgICBcInRleHRcIjpcIlRoZXJlIGFyZSBlbGVjdG9yYWwgbGF3cyByZWd1bGF0aW5nIHN1Y2ggcHJhY3RpY2UuIEJ1dCB0aGVzZSBwcm92aXNpb25zIGFyZSBub3Qgc3VmZmljaWVudGx5IGVuZm9yY2VkLiBPdXIgZWxlY3Rpb25zIG91Z2h0IG5vdCB0byBiZSBhIHByb2R1Y3Qgb2YgY29uc3BpcmFjeSBkZWZpbmVkIGJ5IGNhc2gtYW5kLWNhcnJ5IGRlbW9jcmFjeS4gV2Ugc2hvdWxkIGxldCB0aGUgcG9wdWxhciB3aWxsIHRvIGJlIGZ1bGx5IGV4cHJlc3NlZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJUaGUgV2VhbHRoaWVzdCBQYXN0b3JzIGluIHRoZSBXb3JsZFwiLFxuICAgIFwidGV4dFwiOlwiTWFueSBtYXkgaGF2ZSB0aGVpciBkb3VidHMgYXMgdG8gd2hldGhlciB0aGVzZSB2ZXJ5IHJpY2ggcHJlYWNoZXJzIGFyZSBwcmUtb3JkYWluZWQgb3Igc2VsZi1wcm9jbGFpbWVkLCBidXQgb25lIHRoaW5nIGlzIGZvciBzdXJlLCBzcHJlYWRpbmcgdGhlIHdvcmQgaGFzIGdyZWF0bHkgaW1wYWN0ZWQgbm90IG9ubHkgdGhlIGVhcnMgd2hvIGhlYXIgaXQsIGJ1dCBhbHNvIHRoZSBiYW5rIGFjY291bnRzIG9mIHRoZSBtb3V0aHMgd2hvIHByZWFjaCBpdC4gT25lIGNhbiBzYXkgdGhlc2UgcGFzdG9ycyBhcmUgaW5kZWVkIOKAmGJsZXNzZWQu4oCZIEhlcmUgYXJlIHRoZSByaWNoZXN0IHBhc3RvcnMgaW4gdGhlIHdvcmxkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIk1peGVkIHJlYWN0aW9ucyBncmVldCBBa2VyZWRvbHXigJlzIHZpY3RvcnlcIixcbiAgICBcInRleHRcIjpcIiBKZWdlZGUsIHdobyBzcG9rZSB0byBqb3VybmFsaXN0cyBpbiBBa3VyZSwgdGhlIHN0YXRlIGNhcGl0YWwgb24gU3VuZGF5LCBuZWl0aGVyIGNvbW1lbmRlZCBub3IgY29uZGVtbmVkIHRoZSBjb25kdWN0IG9mIHRoZSBwb2xsLCBidXQgc2FpZCB0aGF0IGhpcyByZWFjdGlvbiBhYm91dCB0aGUgZWxlY3Rpb24gd291bGQgc29vbiBiZSBtYWRlIHB1YmxpYy4uXCJcblxufSxcbntcInRpdGxlXCI6IFwiV2h5IFBEUCBsb3N0IE9uZG8g4oCTIEthc2hhbXVcIixcbiAgICBcInRleHRcIjpcIiBUaGUgc2VuYXRvciBhbHNvIGNydGljaXNlZCB0aGUgU2VuYXRvciBBaG1lZCBNYWthcmZpLWxlZCBOYXRpb25hbCBDYXJldGFrZXIgQ29tbWl0dGVlIG9mIHRoZSBwYXJ0eSBvdmVyIHRoZSBzdGF0ZW1lbnQgY3JlZGl0ZWQgdG8gaXRzIHNwb2tlc21hbiwgUHJpbmNlIERheW8gQWRleWV5ZSwgd2hlcmUgaGUgdGhyZWF0ZW5lZCB0byBzYW5jdGlvbiB0aG9zZSBpbiB0aGUgY2FtcCBvZiBTZW5hdG9yIEFsaSBNb2R1IFNoZXJpZmYuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IEFrZXJlZG9sdSByZWFwZWQgZnJvbSBQRFDigJlzIG1pc3Rha2VzXCIsXG4gICAgXCJ0ZXh0XCI6XCJGb3IgT2x1c2VndW4gTWltaWtvLCB0aGUgb3V0Z29pbmcgZ292ZXJub3Igb2YgT25kbyBTdGF0ZSwgU2F0dXJkYXkgZ292ZXJub3JzaGlwIGVsZWN0aW9uIHdhcyBsaWtlIGEgd2FyLiBUaG91Z2ggaGUgaGFkIGZvdWdodCBtYW55IHBvbGl0aWNhbCBiYXR0bGVzIGJlZm9yZSwgY29taW5nIG91dCB1bnNjYXRoZWQgaW4gYWxtb3N0IGFsbCwgaGUgc2F3IHRoZSBsYXN0IGVsZWN0aW9uIGFzIHRoZSBtb3N0IGltcG9ydGFudCBwb2xpdGljYWwgYmF0dGxlIGhlIG5lZWRlZCB0byB3aW4gaW4gb3JkZXIgdG8gc2FmZWd1YXJkIGhpcyBwb2xpdGljYWwgZnV0dXJlLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBjYW4gTmlnZXJpYSBjdXJiIGJ1eWluZyBvZiB2b3RlcyBkdXJpbmcgZWxlY3Rpb25zXCIsXG4gICAgXCJ0ZXh0XCI6XCJUaGVyZSBhcmUgZWxlY3RvcmFsIGxhd3MgcmVndWxhdGluZyBzdWNoIHByYWN0aWNlLiBCdXQgdGhlc2UgcHJvdmlzaW9ucyBhcmUgbm90IHN1ZmZpY2llbnRseSBlbmZvcmNlZC4gT3VyIGVsZWN0aW9ucyBvdWdodCBub3QgdG8gYmUgYSBwcm9kdWN0IG9mIGNvbnNwaXJhY3kgZGVmaW5lZCBieSBjYXNoLWFuZC1jYXJyeSBkZW1vY3JhY3kuIFdlIHNob3VsZCBsZXQgdGhlIHBvcHVsYXIgd2lsbCB0byBiZSBmdWxseSBleHByZXNzZWQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiVGhlIFdlYWx0aGllc3QgUGFzdG9ycyBpbiB0aGUgV29ybGRcIixcbiAgICBcInRleHRcIjpcIk1hbnkgbWF5IGhhdmUgdGhlaXIgZG91YnRzIGFzIHRvIHdoZXRoZXIgdGhlc2UgdmVyeSByaWNoIHByZWFjaGVycyBhcmUgcHJlLW9yZGFpbmVkIG9yIHNlbGYtcHJvY2xhaW1lZCwgYnV0IG9uZSB0aGluZyBpcyBmb3Igc3VyZSwgc3ByZWFkaW5nIHRoZSB3b3JkIGhhcyBncmVhdGx5IGltcGFjdGVkIG5vdCBvbmx5IHRoZSBlYXJzIHdobyBoZWFyIGl0LCBidXQgYWxzbyB0aGUgYmFuayBhY2NvdW50cyBvZiB0aGUgbW91dGhzIHdobyBwcmVhY2ggaXQuIE9uZSBjYW4gc2F5IHRoZXNlIHBhc3RvcnMgYXJlIGluZGVlZCDigJhibGVzc2VkLuKAmSBIZXJlIGFyZSB0aGUgcmljaGVzdCBwYXN0b3JzIGluIHRoZSB3b3JsZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJNaXhlZCByZWFjdGlvbnMgZ3JlZXQgQWtlcmVkb2x14oCZcyB2aWN0b3J5XCIsXG4gICAgXCJ0ZXh0XCI6XCIgSmVnZWRlLCB3aG8gc3Bva2UgdG8gam91cm5hbGlzdHMgaW4gQWt1cmUsIHRoZSBzdGF0ZSBjYXBpdGFsIG9uIFN1bmRheSwgbmVpdGhlciBjb21tZW5kZWQgbm9yIGNvbmRlbW5lZCB0aGUgY29uZHVjdCBvZiB0aGUgcG9sbCwgYnV0IHNhaWQgdGhhdCBoaXMgcmVhY3Rpb24gYWJvdXQgdGhlIGVsZWN0aW9uIHdvdWxkIHNvb24gYmUgbWFkZSBwdWJsaWMuLlwiXG5cbn1cbl1cbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwidGl0bGVcIjogXCJBbGljZSBpbiBXb25kZXJsYW5kXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5cIixcbiAgICBcInRleHRcIjogXCJBbiB1bnVzdWFsIGFsbGlhbmNlIG9mIG1hbiwgZWxmLCBkd2FyZiwgd2l6YXJkIGFuZCBob2JiaXQgc2VlayB0byBkZXN0cm95IGEgcG93ZXJmdWwgcmluZy5cIlxuICB9XG5dXG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcIiBcIjogXCIgXCIsXG4gICAgXCIgXCI6IFwiIFwiXG4gIH0sXG5cbiAge1xuICAgIFwiIFwiOiBcIlwiLFxuICAgIFwiIFwiOiBcIiBcIlxuICB9XG5dXG4iLCJjb25zdCBpbnZlcnRlZE9iamVjdCA9IG5ldyBJbnZlcnRlZEluZGV4KCk7XG5cblxuY29uc3QgY29ycmVjdEJvb2sgPSByZXF1aXJlKCcuL2Jvb2suanNvbicpO1xuY29uc3Qgd3JvbmdCb29rID0gcmVxdWlyZSgnLi93cm9uZ0Zvcm1hdC5qc29uJyk7XG5jb25zdCB6ZXJvTGVuZ3RoID0gcmVxdWlyZSgnLi9sZW5ndGguanNvbicpO1xuY29uc3QgYm9vayA9IHJlcXVpcmUoJy4vTmV3cycpO1xuY29uc3QgZW1wdHlGaWxlID0gcmVxdWlyZSgnLi9lbXB0eScpO1xuY29uc3QgcmlnaHRGaWxlID0gcmVxdWlyZSgnLi9yaWdodEJvb2snKTtcblxuZGVzY3JpYmUoJ0ludmVydGVkIEluZGV4IHRlc3QgU3VpdCcsICgpID0+IHtcbiAgZGVzY3JpYmUoJ0ludmVydGVkIGluZGV4IGNyZWF0ZSBtZXRob2QnLCAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gaW52ZXJ0ZWRPYmplY3QuY3JlYXRlSW5kZXgoY29ycmVjdEJvb2ssICdjb3JyZWN0Qm9vaycpO1xuICAgIGNvbnN0IHJlc3VsdDIgPSBpbnZlcnRlZE9iamVjdC5jcmVhdGVJbmRleChib29rLCAnYm9vaycpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzIHR5cGVvZiByZXN1bHQnLCAoKSA9PiB7XG4gICAgICBleHBlY3QocmVzdWx0IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIG9mOiB7IDA6IHRydWUsIDE6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHR0IHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHJlc3VsdDIpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdCB3aXRoIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChyZXN1bHQyKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA0OiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdUaGUgaW52ZXJ0ZWQgaW5kZXggc2VhcmNoIG1ldGhvZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGludmVydGVkT2JqZWN0LnNlYXJjaEZpbGVzKFsnYWxpY2UnXSwgJ0FsbCcpO1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0MiA9IGludmVydGVkT2JqZWN0LnNlYXJjaEZpbGVzKFsncGFydHknXSwgJ0FsbCcpO1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0MyA9IGludmVydGVkT2JqZWN0LnNlYXJjaEZpbGVzKFsnYWxpY2UnXSwgJ2NvcnJlY3RCb29rJyk7XG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHQ0ID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydwYXJ0eSddLCAnYm9vaycpO1xuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgdHlwZSBvZiBzZWFyY2ggcmVzdWx0JywgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hSZXN1bHQgd2l0aCBhbGljZTogeyAwOiB0cnVlIH0nLCBcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdC5jb3JyZWN0Qm9vaykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hSZXN1bHQgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0LmNvcnJlY3RCb29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoUmVzdWx0MiB3aXRoIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdDIuYm9vaykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hSZXN1bHQyIHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9JywgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQyLmJvb2spLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgdHlwZSBvZiBzZWFyY2hSZXN1bHQzJywgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQzIGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hSZXN1bHQzIHdpdGggYWxpY2U6IHsgMDogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0My5jb3JyZWN0Qm9vaykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hSZXN1bHQzIHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsIFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0My5jb3JyZWN0Qm9vaykubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXN5cGUgb2Ygc2VhcmNoUmVzdWx0NCcsIFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0NCBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoUmVzdWx0NCB3aXRoICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCBcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdDQuYm9vaykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCd0aGUgaW52ZXJ0ZWQgaW5kZXggZ2V0SW5kaWNpZXMgbWV0aG9kJywgKCkgPT4ge1xuICAgICAgY29uc3QgZ2V0SW5kZWNpZXNGaWxlID0gaW52ZXJ0ZWRPYmplY3QuZ2V0SW5kZXgoJ2NvcnJlY3RCb29rJylcbiAgICAgIGNvbnN0IGdldEluZGVjaWVzRmlsZTIgPSBpbnZlcnRlZE9iamVjdC5nZXRJbmRleCgpXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBvYmplY3QgYXMgdHlwZW9mIGdldEluZGVjaWVzRmlsZScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGdldEluZGVjaWVzRmlsZSBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgICAgfSk7IFxuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgZ2V0QWxsSW5kZWNpZXMyJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QoZ2V0SW5kZWNpZXNGaWxlMikudG9CZUZhbHN5KCk7XG4gICAgICB9KTsgXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgndGhlIGludmVydGVkIGluZGV4IHZhbGlkYXRlIG1ldGhvZCcsICgpID0+IHtcblxuICAgICAgY29uc3QgZW1wdHlKc29uRmlsZSA9IGludmVydGVkT2JqZWN0LmlzVmFsaWQoZW1wdHlGaWxlKTtcbiAgICAgIGNvbnN0IHJpZ2h0Qm9vayA9IGludmVydGVkT2JqZWN0LmlzVmFsaWQoY29ycmVjdEJvb2tbMF0pO1xuICAgICAgXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgYW4gZW1wdHkganNvbiBmaWxlJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QoZW1wdHlKc29uRmlsZSkudG9CZUZhbHN5KCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHJpZ2h0Qm9vaykudG9CZVRydXRoeSgpO1xuICAgICAgfSk7IFxuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJcIjogXCJcIixcbiAgICBcIlwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIlwiOiBcIlwiLFxuICAgIFwiXCI6IFwiXCJcbiAgfVxuXSIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwidGl0bGVcIjogXCJBbGljZSBpbiBXb25kZXJsYW5kXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH1cbl1cbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAgeyAgXCJuYW1lXCIgOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInZhbHVlXCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH1cbixcbiAgIHsgXCJuYW1lXCI6IFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5cIixcbiAgICBcInZhbHVlXCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcblxuICAgfVxuXSJdfQ==
