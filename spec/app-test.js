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
      var getIndeciesFile = invertedObject.getAllIndecies('correctBook');
      var getIndeciesFile2 = invertedObject.getAllIndecies();
      it('should return object as typeof getIndeciesFile', function () {
        expect(getIndeciesFile instanceof Object).toBeTruthy();
      });

      it('should return false for getAllIndecies2', function () {
        expect(getIndeciesFile2).toBeFalsy();
      });
    });

    describe('the inverted index validate method', function () {

      var emptyJsonFile = invertedObject.validateFileFunc(emptyFile);
      var rightBook = invertedObject.validateFileFunc(correctBook[0]);

      it('should return false for an empty json file', function () {
        expect(emptyJsonFile).toBeFalsy();
      });

      it('should return Object as type of rightBook', function () {
        expect(rightBook instanceof Object).toBeTruthy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9lbXB0eS5qc29uIiwic3BlYy9pbnZlcnRlZC1pbmRleC10ZXN0LmpzIiwic3BlYy9sZW5ndGguanNvbiIsInNwZWMvcmlnaHRCb29rLmpzb24iLCJzcGVjL3dyb25nRm9ybWF0Lmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDWEEsSUFBTSxpQkFBaUIsSUFBSSxhQUFKLEVBQXZCOztBQUdBLElBQU0sY0FBYyxRQUFRLGFBQVIsQ0FBcEI7QUFDQSxJQUFNLFlBQVksUUFBUSxvQkFBUixDQUFsQjtBQUNBLElBQU0sYUFBYSxRQUFRLGVBQVIsQ0FBbkI7QUFDQSxJQUFNLE9BQU8sUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFNLFlBQVksUUFBUSxTQUFSLENBQWxCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsYUFBUixDQUFsQjs7QUFFQSxTQUFTLDBCQUFULEVBQXFDLFlBQU07QUFDekMsV0FBUyw4QkFBVCxFQUF5QyxZQUFNO0FBQzdDLFFB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LGdCQUFQLEVBQXlCLFNBQXpCO0FBQ0QsT0FGRDtBQUdELEtBVkQ7O0FBWUEsYUFBUyxvQ0FBVCxFQUErQyxZQUFNOztBQUVuRCxVQUFNLGdCQUFnQixlQUFlLGdCQUFmLENBQWdDLFNBQWhDLENBQXRCO0FBQ0EsVUFBTSxZQUFZLGVBQWUsZ0JBQWYsQ0FBZ0MsWUFBWSxDQUFaLENBQWhDLENBQWxCOztBQUVBLFNBQUcsNENBQUgsRUFBaUQsWUFBTTtBQUNyRCxlQUFPLGFBQVAsRUFBc0IsU0FBdEI7QUFDRCxPQUZEOztBQUlBLFNBQUcsMkNBQUgsRUFBZ0QsWUFBTTtBQUNwRCxlQUFPLHFCQUFxQixNQUE1QixFQUFvQyxVQUFwQztBQUNELE9BRkQ7QUFHRCxLQVpEO0FBYUQsR0FsSUQ7QUFtSUQsQ0FwSUQ7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPVtcbiAgIHtcInRpdGxlXCI6IFwiV2h5IFBEUCBsb3N0IE9uZG8g4oCTIEthc2hhbXVcIixcbiAgICBcInRleHRcIjpcIiBUaGUgc2VuYXRvciBhbHNvIGNydGljaXNlZCB0aGUgU2VuYXRvciBBaG1lZCBNYWthcmZpLWxlZCBOYXRpb25hbCBDYXJldGFrZXIgQ29tbWl0dGVlIG9mIHRoZSBwYXJ0eSBvdmVyIHRoZSBzdGF0ZW1lbnQgY3JlZGl0ZWQgdG8gaXRzIHNwb2tlc21hbiwgUHJpbmNlIERheW8gQWRleWV5ZSwgd2hlcmUgaGUgdGhyZWF0ZW5lZCB0byBzYW5jdGlvbiB0aG9zZSBpbiB0aGUgY2FtcCBvZiBTZW5hdG9yIEFsaSBNb2R1IFNoZXJpZmYuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IEFrZXJlZG9sdSByZWFwZWQgZnJvbSBQRFDigJlzIG1pc3Rha2VzXCIsXG4gICAgXCJ0ZXh0XCI6XCJGb3IgT2x1c2VndW4gTWltaWtvLCB0aGUgb3V0Z29pbmcgZ292ZXJub3Igb2YgT25kbyBTdGF0ZSwgU2F0dXJkYXkgZ292ZXJub3JzaGlwIGVsZWN0aW9uIHdhcyBsaWtlIGEgd2FyLiBUaG91Z2ggaGUgaGFkIGZvdWdodCBtYW55IHBvbGl0aWNhbCBiYXR0bGVzIGJlZm9yZSwgY29taW5nIG91dCB1bnNjYXRoZWQgaW4gYWxtb3N0IGFsbCwgaGUgc2F3IHRoZSBsYXN0IGVsZWN0aW9uIGFzIHRoZSBtb3N0IGltcG9ydGFudCBwb2xpdGljYWwgYmF0dGxlIGhlIG5lZWRlZCB0byB3aW4gaW4gb3JkZXIgdG8gc2FmZWd1YXJkIGhpcyBwb2xpdGljYWwgZnV0dXJlLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBjYW4gTmlnZXJpYSBjdXJiIGJ1eWluZyBvZiB2b3RlcyBkdXJpbmcgZWxlY3Rpb25zXCIsXG4gICAgXCJ0ZXh0XCI6XCJUaGVyZSBhcmUgZWxlY3RvcmFsIGxhd3MgcmVndWxhdGluZyBzdWNoIHByYWN0aWNlLiBCdXQgdGhlc2UgcHJvdmlzaW9ucyBhcmUgbm90IHN1ZmZpY2llbnRseSBlbmZvcmNlZC4gT3VyIGVsZWN0aW9ucyBvdWdodCBub3QgdG8gYmUgYSBwcm9kdWN0IG9mIGNvbnNwaXJhY3kgZGVmaW5lZCBieSBjYXNoLWFuZC1jYXJyeSBkZW1vY3JhY3kuIFdlIHNob3VsZCBsZXQgdGhlIHBvcHVsYXIgd2lsbCB0byBiZSBmdWxseSBleHByZXNzZWQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiVGhlIFdlYWx0aGllc3QgUGFzdG9ycyBpbiB0aGUgV29ybGRcIixcbiAgICBcInRleHRcIjpcIk1hbnkgbWF5IGhhdmUgdGhlaXIgZG91YnRzIGFzIHRvIHdoZXRoZXIgdGhlc2UgdmVyeSByaWNoIHByZWFjaGVycyBhcmUgcHJlLW9yZGFpbmVkIG9yIHNlbGYtcHJvY2xhaW1lZCwgYnV0IG9uZSB0aGluZyBpcyBmb3Igc3VyZSwgc3ByZWFkaW5nIHRoZSB3b3JkIGhhcyBncmVhdGx5IGltcGFjdGVkIG5vdCBvbmx5IHRoZSBlYXJzIHdobyBoZWFyIGl0LCBidXQgYWxzbyB0aGUgYmFuayBhY2NvdW50cyBvZiB0aGUgbW91dGhzIHdobyBwcmVhY2ggaXQuIE9uZSBjYW4gc2F5IHRoZXNlIHBhc3RvcnMgYXJlIGluZGVlZCDigJhibGVzc2VkLuKAmSBIZXJlIGFyZSB0aGUgcmljaGVzdCBwYXN0b3JzIGluIHRoZSB3b3JsZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJNaXhlZCByZWFjdGlvbnMgZ3JlZXQgQWtlcmVkb2x14oCZcyB2aWN0b3J5XCIsXG4gICAgXCJ0ZXh0XCI6XCIgSmVnZWRlLCB3aG8gc3Bva2UgdG8gam91cm5hbGlzdHMgaW4gQWt1cmUsIHRoZSBzdGF0ZSBjYXBpdGFsIG9uIFN1bmRheSwgbmVpdGhlciBjb21tZW5kZWQgbm9yIGNvbmRlbW5lZCB0aGUgY29uZHVjdCBvZiB0aGUgcG9sbCwgYnV0IHNhaWQgdGhhdCBoaXMgcmVhY3Rpb24gYWJvdXQgdGhlIGVsZWN0aW9uIHdvdWxkIHNvb24gYmUgbWFkZSBwdWJsaWMuLlwiXG5cbn0sXG57XCJ0aXRsZVwiOiBcIldoeSBQRFAgbG9zdCBPbmRvIOKAkyBLYXNoYW11XCIsXG4gICAgXCJ0ZXh0XCI6XCIgVGhlIHNlbmF0b3IgYWxzbyBjcnRpY2lzZWQgdGhlIFNlbmF0b3IgQWhtZWQgTWFrYXJmaS1sZWQgTmF0aW9uYWwgQ2FyZXRha2VyIENvbW1pdHRlZSBvZiB0aGUgcGFydHkgb3ZlciB0aGUgc3RhdGVtZW50IGNyZWRpdGVkIHRvIGl0cyBzcG9rZXNtYW4sIFByaW5jZSBEYXlvIEFkZXlleWUsIHdoZXJlIGhlIHRocmVhdGVuZWQgdG8gc2FuY3Rpb24gdGhvc2UgaW4gdGhlIGNhbXAgb2YgU2VuYXRvciBBbGkgTW9kdSBTaGVyaWZmLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBBa2VyZWRvbHUgcmVhcGVkIGZyb20gUERQ4oCZcyBtaXN0YWtlc1wiLFxuICAgIFwidGV4dFwiOlwiRm9yIE9sdXNlZ3VuIE1pbWlrbywgdGhlIG91dGdvaW5nIGdvdmVybm9yIG9mIE9uZG8gU3RhdGUsIFNhdHVyZGF5IGdvdmVybm9yc2hpcCBlbGVjdGlvbiB3YXMgbGlrZSBhIHdhci4gVGhvdWdoIGhlIGhhZCBmb3VnaHQgbWFueSBwb2xpdGljYWwgYmF0dGxlcyBiZWZvcmUsIGNvbWluZyBvdXQgdW5zY2F0aGVkIGluIGFsbW9zdCBhbGwsIGhlIHNhdyB0aGUgbGFzdCBlbGVjdGlvbiBhcyB0aGUgbW9zdCBpbXBvcnRhbnQgcG9saXRpY2FsIGJhdHRsZSBoZSBuZWVkZWQgdG8gd2luIGluIG9yZGVyIHRvIHNhZmVndWFyZCBoaXMgcG9saXRpY2FsIGZ1dHVyZS5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgY2FuIE5pZ2VyaWEgY3VyYiBidXlpbmcgb2Ygdm90ZXMgZHVyaW5nIGVsZWN0aW9uc1wiLFxuICAgIFwidGV4dFwiOlwiVGhlcmUgYXJlIGVsZWN0b3JhbCBsYXdzIHJlZ3VsYXRpbmcgc3VjaCBwcmFjdGljZS4gQnV0IHRoZXNlIHByb3Zpc2lvbnMgYXJlIG5vdCBzdWZmaWNpZW50bHkgZW5mb3JjZWQuIE91ciBlbGVjdGlvbnMgb3VnaHQgbm90IHRvIGJlIGEgcHJvZHVjdCBvZiBjb25zcGlyYWN5IGRlZmluZWQgYnkgY2FzaC1hbmQtY2FycnkgZGVtb2NyYWN5LiBXZSBzaG91bGQgbGV0IHRoZSBwb3B1bGFyIHdpbGwgdG8gYmUgZnVsbHkgZXhwcmVzc2VkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIlRoZSBXZWFsdGhpZXN0IFBhc3RvcnMgaW4gdGhlIFdvcmxkXCIsXG4gICAgXCJ0ZXh0XCI6XCJNYW55IG1heSBoYXZlIHRoZWlyIGRvdWJ0cyBhcyB0byB3aGV0aGVyIHRoZXNlIHZlcnkgcmljaCBwcmVhY2hlcnMgYXJlIHByZS1vcmRhaW5lZCBvciBzZWxmLXByb2NsYWltZWQsIGJ1dCBvbmUgdGhpbmcgaXMgZm9yIHN1cmUsIHNwcmVhZGluZyB0aGUgd29yZCBoYXMgZ3JlYXRseSBpbXBhY3RlZCBub3Qgb25seSB0aGUgZWFycyB3aG8gaGVhciBpdCwgYnV0IGFsc28gdGhlIGJhbmsgYWNjb3VudHMgb2YgdGhlIG1vdXRocyB3aG8gcHJlYWNoIGl0LiBPbmUgY2FuIHNheSB0aGVzZSBwYXN0b3JzIGFyZSBpbmRlZWQg4oCYYmxlc3NlZC7igJkgSGVyZSBhcmUgdGhlIHJpY2hlc3QgcGFzdG9ycyBpbiB0aGUgd29ybGQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiTWl4ZWQgcmVhY3Rpb25zIGdyZWV0IEFrZXJlZG9sdeKAmXMgdmljdG9yeVwiLFxuICAgIFwidGV4dFwiOlwiIEplZ2VkZSwgd2hvIHNwb2tlIHRvIGpvdXJuYWxpc3RzIGluIEFrdXJlLCB0aGUgc3RhdGUgY2FwaXRhbCBvbiBTdW5kYXksIG5laXRoZXIgY29tbWVuZGVkIG5vciBjb25kZW1uZWQgdGhlIGNvbmR1Y3Qgb2YgdGhlIHBvbGwsIGJ1dCBzYWlkIHRoYXQgaGlzIHJlYWN0aW9uIGFib3V0IHRoZSBlbGVjdGlvbiB3b3VsZCBzb29uIGJlIG1hZGUgcHVibGljLi5cIlxuXG59XG5dXG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiQWxpY2UgaW4gV29uZGVybGFuZFwiLFxuICAgIFwidGV4dFwiOiBcIkFsaWNlIGZhbGxzIGludG8gYSByYWJiaXQgaG9sZSBhbmQgZW50ZXJzIGEgd29ybGQgZnVsbCBvZiBpbWFnaW5hdGlvbi5cIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOiBcIlRoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcbiAgfVxuXVxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCIgXCI6IFwiIFwiLFxuICAgIFwiIFwiOiBcIiBcIlxuICB9LFxuXG4gIHtcbiAgICBcIiBcIjogXCJcIixcbiAgICBcIiBcIjogXCIgXCJcbiAgfVxuXVxuIiwiY29uc3QgaW52ZXJ0ZWRPYmplY3QgPSBuZXcgSW52ZXJ0ZWRJbmRleCgpO1xuXG5cbmNvbnN0IGNvcnJlY3RCb29rID0gcmVxdWlyZSgnLi9ib29rLmpzb24nKTtcbmNvbnN0IHdyb25nQm9vayA9IHJlcXVpcmUoJy4vd3JvbmdGb3JtYXQuanNvbicpO1xuY29uc3QgemVyb0xlbmd0aCA9IHJlcXVpcmUoJy4vbGVuZ3RoLmpzb24nKTtcbmNvbnN0IGJvb2sgPSByZXF1aXJlKCcuL05ld3MnKTtcbmNvbnN0IGVtcHR5RmlsZSA9IHJlcXVpcmUoJy4vZW1wdHknKTtcbmNvbnN0IHJpZ2h0RmlsZSA9IHJlcXVpcmUoJy4vcmlnaHRCb29rJyk7XG5cbmRlc2NyaWJlKCdJbnZlcnRlZCBJbmRleCB0ZXN0IFN1aXQnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdJbnZlcnRlZCBpbmRleCBjcmVhdGUgbWV0aG9kJywgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGludmVydGVkT2JqZWN0LmNyZWF0ZUluZGV4KGNvcnJlY3RCb29rLCAnY29ycmVjdEJvb2snKTtcbiAgICBjb25zdCByZXN1bHQyID0gaW52ZXJ0ZWRPYmplY3QuY3JlYXRlSW5kZXgoYm9vaywgJ2Jvb2snKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyB0eXBlb2YgcmVzdWx0JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHJlc3VsdCBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHQgd2l0aCBhbGljZTogeyAwOiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHQgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHQgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBvZjogeyAwOiB0cnVlLCAxOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0dCB3aXRoIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChyZXN1bHQyKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHQgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3QocmVzdWx0Mikubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNDogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnVGhlIGludmVydGVkIGluZGV4IHNlYXJjaCBtZXRob2QnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBpbnZlcnRlZE9iamVjdC5zZWFyY2hGaWxlcyhbJ2FsaWNlJ10sICdBbGwnKTtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdDIgPSBpbnZlcnRlZE9iamVjdC5zZWFyY2hGaWxlcyhbJ3BhcnR5J10sICdBbGwnKTtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdDMgPSBpbnZlcnRlZE9iamVjdC5zZWFyY2hGaWxlcyhbJ2FsaWNlJ10sICdjb3JyZWN0Qm9vaycpO1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0NCA9IGludmVydGVkT2JqZWN0LnNlYXJjaEZpbGVzKFsncGFydHknXSwgJ2Jvb2snKTtcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzIHR5cGUgb2Ygc2VhcmNoIHJlc3VsdCcsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdCBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoUmVzdWx0IHdpdGggYWxpY2U6IHsgMDogdHJ1ZSB9JywgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQuY29ycmVjdEJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoUmVzdWx0IHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdC5jb3JyZWN0Qm9vaykubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdDIgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQyLmJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoUmVzdWx0MiB3aXRoIHBhcnR5OiB7IDA6IHRydWUsIDE6IHRydWUgfScsIFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0Mi5ib29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDE6IHRydWUgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzIHR5cGUgb2Ygc2VhcmNoUmVzdWx0MycsIFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0MyBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoUmVzdWx0MyB3aXRoIGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdDMuY29ycmVjdEJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoUmVzdWx0MyB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLCBcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdDMuY29ycmVjdEJvb2spLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzeXBlIG9mIHNlYXJjaFJlc3VsdDQnLCBcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdDQgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdDQgd2l0aCAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQ0LmJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgndGhlIGludmVydGVkIGluZGV4IGdldEluZGljaWVzIG1ldGhvZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGdldEluZGVjaWVzRmlsZSA9IGludmVydGVkT2JqZWN0LmdldEFsbEluZGVjaWVzKCdjb3JyZWN0Qm9vaycpXG4gICAgICBjb25zdCBnZXRJbmRlY2llc0ZpbGUyID0gaW52ZXJ0ZWRPYmplY3QuZ2V0QWxsSW5kZWNpZXMoKVxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gb2JqZWN0IGFzIHR5cGVvZiBnZXRJbmRlY2llc0ZpbGUnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChnZXRJbmRlY2llc0ZpbGUgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICAgIH0pOyBcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIGdldEFsbEluZGVjaWVzMicsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGdldEluZGVjaWVzRmlsZTIpLnRvQmVGYWxzeSgpO1xuICAgICAgfSk7IFxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3RoZSBpbnZlcnRlZCBpbmRleCB2YWxpZGF0ZSBtZXRob2QnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGVtcHR5SnNvbkZpbGUgPSBpbnZlcnRlZE9iamVjdC52YWxpZGF0ZUZpbGVGdW5jKGVtcHR5RmlsZSk7XG4gICAgICBjb25zdCByaWdodEJvb2sgPSBpbnZlcnRlZE9iamVjdC52YWxpZGF0ZUZpbGVGdW5jKGNvcnJlY3RCb29rWzBdKTtcbiAgICAgIFxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIGFuIGVtcHR5IGpzb24gZmlsZScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGVtcHR5SnNvbkZpbGUpLnRvQmVGYWxzeSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyB0eXBlIG9mIHJpZ2h0Qm9vaycsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHJpZ2h0Qm9vayBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgICAgfSk7IFxuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJcIjogXCJcIixcbiAgICBcIlwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIlwiOiBcIlwiLFxuICAgIFwiXCI6IFwiXCJcbiAgfVxuXSIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwidGl0bGVcIjogXCJBbGljZSBpbiBXb25kZXJsYW5kXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH1cbl1cbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAgeyAgXCJuYW1lXCIgOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInZhbHVlXCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH1cbixcbiAgIHsgXCJuYW1lXCI6IFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5cIixcbiAgICBcInZhbHVlXCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcblxuICAgfVxuXSJdfQ==
