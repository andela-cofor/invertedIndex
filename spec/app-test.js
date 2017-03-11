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

var correctBook = require('./book.json');
var wrongBook = require('./wrongFormat.json');
var zeroLength = require('./length.json');
var book = require('./News');

describe('Inverted Index test Suit', function () {
  describe('Testing Inverted index create method', function () {
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

      it('should return Object type of search result', function () {
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
      var allFiles = invertedObject.allFiles;
      var getIndeciesFile = invertedObject.getAllIndecies('correctBook');
      var getIndeciesFile2 = invertedObject.getAllIndecies();
      console.log(getIndeciesFile.alice);
      it('should return object as typeof getIndeciesFile', function () {
        expect(getIndeciesFile instanceof Object).toBeTruthy();
      });

      it('should return false for getAllIndecies2', function () {
        expect(getIndeciesFile2).toBeFalsy();
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9pbnZlcnRlZC1pbmRleC10ZXN0LmpzIiwic3BlYy9sZW5ndGguanNvbiIsInNwZWMvd3JvbmdGb3JtYXQuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1ZBLElBQU0saUJBQWlCLElBQUksYUFBSixFQUF2Qjs7QUFHQSxJQUFNLGNBQWMsUUFBUSxhQUFSLENBQXBCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsb0JBQVIsQ0FBbEI7QUFDQSxJQUFNLGFBQWEsUUFBUSxlQUFSLENBQW5CO0FBQ0EsSUFBTSxPQUFPLFFBQVEsUUFBUixDQUFiOztBQUVBLFNBQVMsMEJBQVQsRUFBcUMsWUFBTTtBQUN6QyxXQUFTLHNDQUFULEVBQWlELFlBQU07QUFDckQsUUFBTSxTQUFTLGVBQWUsV0FBZixDQUEyQixXQUEzQixFQUF3QyxhQUF4QyxDQUFmO0FBQ0EsUUFBTSxVQUFVLGVBQWUsV0FBZixDQUEyQixJQUEzQixFQUFpQyxNQUFqQyxDQUFoQjs7QUFFQSxPQUFHLHVDQUFILEVBQTRDLFlBQU07QUFDaEQsYUFBTyxrQkFBa0IsTUFBekIsRUFBaUMsVUFB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QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPVtcbiAgIHtcInRpdGxlXCI6IFwiV2h5IFBEUCBsb3N0IE9uZG8g4oCTIEthc2hhbXVcIixcbiAgICBcInRleHRcIjpcIiBUaGUgc2VuYXRvciBhbHNvIGNydGljaXNlZCB0aGUgU2VuYXRvciBBaG1lZCBNYWthcmZpLWxlZCBOYXRpb25hbCBDYXJldGFrZXIgQ29tbWl0dGVlIG9mIHRoZSBwYXJ0eSBvdmVyIHRoZSBzdGF0ZW1lbnQgY3JlZGl0ZWQgdG8gaXRzIHNwb2tlc21hbiwgUHJpbmNlIERheW8gQWRleWV5ZSwgd2hlcmUgaGUgdGhyZWF0ZW5lZCB0byBzYW5jdGlvbiB0aG9zZSBpbiB0aGUgY2FtcCBvZiBTZW5hdG9yIEFsaSBNb2R1IFNoZXJpZmYuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IEFrZXJlZG9sdSByZWFwZWQgZnJvbSBQRFDigJlzIG1pc3Rha2VzXCIsXG4gICAgXCJ0ZXh0XCI6XCJGb3IgT2x1c2VndW4gTWltaWtvLCB0aGUgb3V0Z29pbmcgZ292ZXJub3Igb2YgT25kbyBTdGF0ZSwgU2F0dXJkYXkgZ292ZXJub3JzaGlwIGVsZWN0aW9uIHdhcyBsaWtlIGEgd2FyLiBUaG91Z2ggaGUgaGFkIGZvdWdodCBtYW55IHBvbGl0aWNhbCBiYXR0bGVzIGJlZm9yZSwgY29taW5nIG91dCB1bnNjYXRoZWQgaW4gYWxtb3N0IGFsbCwgaGUgc2F3IHRoZSBsYXN0IGVsZWN0aW9uIGFzIHRoZSBtb3N0IGltcG9ydGFudCBwb2xpdGljYWwgYmF0dGxlIGhlIG5lZWRlZCB0byB3aW4gaW4gb3JkZXIgdG8gc2FmZWd1YXJkIGhpcyBwb2xpdGljYWwgZnV0dXJlLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBjYW4gTmlnZXJpYSBjdXJiIGJ1eWluZyBvZiB2b3RlcyBkdXJpbmcgZWxlY3Rpb25zXCIsXG4gICAgXCJ0ZXh0XCI6XCJUaGVyZSBhcmUgZWxlY3RvcmFsIGxhd3MgcmVndWxhdGluZyBzdWNoIHByYWN0aWNlLiBCdXQgdGhlc2UgcHJvdmlzaW9ucyBhcmUgbm90IHN1ZmZpY2llbnRseSBlbmZvcmNlZC4gT3VyIGVsZWN0aW9ucyBvdWdodCBub3QgdG8gYmUgYSBwcm9kdWN0IG9mIGNvbnNwaXJhY3kgZGVmaW5lZCBieSBjYXNoLWFuZC1jYXJyeSBkZW1vY3JhY3kuIFdlIHNob3VsZCBsZXQgdGhlIHBvcHVsYXIgd2lsbCB0byBiZSBmdWxseSBleHByZXNzZWQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiVGhlIFdlYWx0aGllc3QgUGFzdG9ycyBpbiB0aGUgV29ybGRcIixcbiAgICBcInRleHRcIjpcIk1hbnkgbWF5IGhhdmUgdGhlaXIgZG91YnRzIGFzIHRvIHdoZXRoZXIgdGhlc2UgdmVyeSByaWNoIHByZWFjaGVycyBhcmUgcHJlLW9yZGFpbmVkIG9yIHNlbGYtcHJvY2xhaW1lZCwgYnV0IG9uZSB0aGluZyBpcyBmb3Igc3VyZSwgc3ByZWFkaW5nIHRoZSB3b3JkIGhhcyBncmVhdGx5IGltcGFjdGVkIG5vdCBvbmx5IHRoZSBlYXJzIHdobyBoZWFyIGl0LCBidXQgYWxzbyB0aGUgYmFuayBhY2NvdW50cyBvZiB0aGUgbW91dGhzIHdobyBwcmVhY2ggaXQuIE9uZSBjYW4gc2F5IHRoZXNlIHBhc3RvcnMgYXJlIGluZGVlZCDigJhibGVzc2VkLuKAmSBIZXJlIGFyZSB0aGUgcmljaGVzdCBwYXN0b3JzIGluIHRoZSB3b3JsZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJNaXhlZCByZWFjdGlvbnMgZ3JlZXQgQWtlcmVkb2x14oCZcyB2aWN0b3J5XCIsXG4gICAgXCJ0ZXh0XCI6XCIgSmVnZWRlLCB3aG8gc3Bva2UgdG8gam91cm5hbGlzdHMgaW4gQWt1cmUsIHRoZSBzdGF0ZSBjYXBpdGFsIG9uIFN1bmRheSwgbmVpdGhlciBjb21tZW5kZWQgbm9yIGNvbmRlbW5lZCB0aGUgY29uZHVjdCBvZiB0aGUgcG9sbCwgYnV0IHNhaWQgdGhhdCBoaXMgcmVhY3Rpb24gYWJvdXQgdGhlIGVsZWN0aW9uIHdvdWxkIHNvb24gYmUgbWFkZSBwdWJsaWMuLlwiXG5cbn0sXG57XCJ0aXRsZVwiOiBcIldoeSBQRFAgbG9zdCBPbmRvIOKAkyBLYXNoYW11XCIsXG4gICAgXCJ0ZXh0XCI6XCIgVGhlIHNlbmF0b3IgYWxzbyBjcnRpY2lzZWQgdGhlIFNlbmF0b3IgQWhtZWQgTWFrYXJmaS1sZWQgTmF0aW9uYWwgQ2FyZXRha2VyIENvbW1pdHRlZSBvZiB0aGUgcGFydHkgb3ZlciB0aGUgc3RhdGVtZW50IGNyZWRpdGVkIHRvIGl0cyBzcG9rZXNtYW4sIFByaW5jZSBEYXlvIEFkZXlleWUsIHdoZXJlIGhlIHRocmVhdGVuZWQgdG8gc2FuY3Rpb24gdGhvc2UgaW4gdGhlIGNhbXAgb2YgU2VuYXRvciBBbGkgTW9kdSBTaGVyaWZmLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBBa2VyZWRvbHUgcmVhcGVkIGZyb20gUERQ4oCZcyBtaXN0YWtlc1wiLFxuICAgIFwidGV4dFwiOlwiRm9yIE9sdXNlZ3VuIE1pbWlrbywgdGhlIG91dGdvaW5nIGdvdmVybm9yIG9mIE9uZG8gU3RhdGUsIFNhdHVyZGF5IGdvdmVybm9yc2hpcCBlbGVjdGlvbiB3YXMgbGlrZSBhIHdhci4gVGhvdWdoIGhlIGhhZCBmb3VnaHQgbWFueSBwb2xpdGljYWwgYmF0dGxlcyBiZWZvcmUsIGNvbWluZyBvdXQgdW5zY2F0aGVkIGluIGFsbW9zdCBhbGwsIGhlIHNhdyB0aGUgbGFzdCBlbGVjdGlvbiBhcyB0aGUgbW9zdCBpbXBvcnRhbnQgcG9saXRpY2FsIGJhdHRsZSBoZSBuZWVkZWQgdG8gd2luIGluIG9yZGVyIHRvIHNhZmVndWFyZCBoaXMgcG9saXRpY2FsIGZ1dHVyZS5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgY2FuIE5pZ2VyaWEgY3VyYiBidXlpbmcgb2Ygdm90ZXMgZHVyaW5nIGVsZWN0aW9uc1wiLFxuICAgIFwidGV4dFwiOlwiVGhlcmUgYXJlIGVsZWN0b3JhbCBsYXdzIHJlZ3VsYXRpbmcgc3VjaCBwcmFjdGljZS4gQnV0IHRoZXNlIHByb3Zpc2lvbnMgYXJlIG5vdCBzdWZmaWNpZW50bHkgZW5mb3JjZWQuIE91ciBlbGVjdGlvbnMgb3VnaHQgbm90IHRvIGJlIGEgcHJvZHVjdCBvZiBjb25zcGlyYWN5IGRlZmluZWQgYnkgY2FzaC1hbmQtY2FycnkgZGVtb2NyYWN5LiBXZSBzaG91bGQgbGV0IHRoZSBwb3B1bGFyIHdpbGwgdG8gYmUgZnVsbHkgZXhwcmVzc2VkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIlRoZSBXZWFsdGhpZXN0IFBhc3RvcnMgaW4gdGhlIFdvcmxkXCIsXG4gICAgXCJ0ZXh0XCI6XCJNYW55IG1heSBoYXZlIHRoZWlyIGRvdWJ0cyBhcyB0byB3aGV0aGVyIHRoZXNlIHZlcnkgcmljaCBwcmVhY2hlcnMgYXJlIHByZS1vcmRhaW5lZCBvciBzZWxmLXByb2NsYWltZWQsIGJ1dCBvbmUgdGhpbmcgaXMgZm9yIHN1cmUsIHNwcmVhZGluZyB0aGUgd29yZCBoYXMgZ3JlYXRseSBpbXBhY3RlZCBub3Qgb25seSB0aGUgZWFycyB3aG8gaGVhciBpdCwgYnV0IGFsc28gdGhlIGJhbmsgYWNjb3VudHMgb2YgdGhlIG1vdXRocyB3aG8gcHJlYWNoIGl0LiBPbmUgY2FuIHNheSB0aGVzZSBwYXN0b3JzIGFyZSBpbmRlZWQg4oCYYmxlc3NlZC7igJkgSGVyZSBhcmUgdGhlIHJpY2hlc3QgcGFzdG9ycyBpbiB0aGUgd29ybGQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiTWl4ZWQgcmVhY3Rpb25zIGdyZWV0IEFrZXJlZG9sdeKAmXMgdmljdG9yeVwiLFxuICAgIFwidGV4dFwiOlwiIEplZ2VkZSwgd2hvIHNwb2tlIHRvIGpvdXJuYWxpc3RzIGluIEFrdXJlLCB0aGUgc3RhdGUgY2FwaXRhbCBvbiBTdW5kYXksIG5laXRoZXIgY29tbWVuZGVkIG5vciBjb25kZW1uZWQgdGhlIGNvbmR1Y3Qgb2YgdGhlIHBvbGwsIGJ1dCBzYWlkIHRoYXQgaGlzIHJlYWN0aW9uIGFib3V0IHRoZSBlbGVjdGlvbiB3b3VsZCBzb29uIGJlIG1hZGUgcHVibGljLi5cIlxuXG59XG5dXG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiQWxpY2UgaW4gV29uZGVybGFuZFwiLFxuICAgIFwidGV4dFwiOiBcIkFsaWNlIGZhbGxzIGludG8gYSByYWJiaXQgaG9sZSBhbmQgZW50ZXJzIGEgd29ybGQgZnVsbCBvZiBpbWFnaW5hdGlvbi5cIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOiBcIlRoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcbiAgfVxuXVxuIiwiY29uc3QgaW52ZXJ0ZWRPYmplY3QgPSBuZXcgSW52ZXJ0ZWRJbmRleCgpO1xuXG5cbmNvbnN0IGNvcnJlY3RCb29rID0gcmVxdWlyZSgnLi9ib29rLmpzb24nKTtcbmNvbnN0IHdyb25nQm9vayA9IHJlcXVpcmUoJy4vd3JvbmdGb3JtYXQuanNvbicpO1xuY29uc3QgemVyb0xlbmd0aCA9IHJlcXVpcmUoJy4vbGVuZ3RoLmpzb24nKTtcbmNvbnN0IGJvb2sgPSByZXF1aXJlKCcuL05ld3MnKTtcblxuZGVzY3JpYmUoJ0ludmVydGVkIEluZGV4IHRlc3QgU3VpdCcsICgpID0+IHtcbiAgZGVzY3JpYmUoJ1Rlc3RpbmcgSW52ZXJ0ZWQgaW5kZXggY3JlYXRlIG1ldGhvZCcsICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBpbnZlcnRlZE9iamVjdC5jcmVhdGVJbmRleChjb3JyZWN0Qm9vaywgJ2NvcnJlY3RCb29rJyk7XG4gICAgY29uc3QgcmVzdWx0MiA9IGludmVydGVkT2JqZWN0LmNyZWF0ZUluZGV4KGJvb2ssICdib29rJyk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgdHlwZW9mIHJlc3VsdCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChyZXN1bHQgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgb2Y6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdHQgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3QocmVzdWx0MikudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHJlc3VsdDIpLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDQ6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ1RoZSBpbnZlcnRlZCBpbmRleCBzZWFyY2ggbWV0aG9kJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydhbGljZSddLCAnQWxsJyk7XG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHQyID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydwYXJ0eSddLCAnQWxsJyk7XG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHQzID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydhbGljZSddLCAnY29ycmVjdEJvb2snKTtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdDQgPSBpbnZlcnRlZE9iamVjdC5zZWFyY2hGaWxlcyhbJ3BhcnR5J10sICdib29rJyk7XG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCB0eXBlIG9mIHNlYXJjaCByZXN1bHQnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IHRydWUgfScsIFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0LmNvcnJlY3RCb29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQuY29ycmVjdEJvb2spLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hSZXN1bHQyIHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0Mi5ib29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdDIgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH0nLCBcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdDIuYm9vaykubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyB0eXBlIG9mIHNlYXJjaFJlc3VsdDMnLCBcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaFJlc3VsdDMgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdDMgd2l0aCBhbGljZTogeyAwOiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQzLmNvcnJlY3RCb29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaFJlc3VsdDMgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQzLmNvcnJlY3RCb29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhc3lwZSBvZiBzZWFyY2hSZXN1bHQ0JywgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hSZXN1bHQ0IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hSZXN1bHQ0IHdpdGggIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsIFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoUmVzdWx0NC5ib29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3RoZSBpbnZlcnRlZCBpbmRleCBnZXRJbmRpY2llcyBtZXRob2QnLCAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxGaWxlcyA9IGludmVydGVkT2JqZWN0LmFsbEZpbGVzO1xuICAgICAgY29uc3QgZ2V0SW5kZWNpZXNGaWxlID0gaW52ZXJ0ZWRPYmplY3QuZ2V0QWxsSW5kZWNpZXMoJ2NvcnJlY3RCb29rJylcbiAgICAgIGNvbnN0IGdldEluZGVjaWVzRmlsZTIgPSBpbnZlcnRlZE9iamVjdC5nZXRBbGxJbmRlY2llcygpXG4gICAgICBjb25zb2xlLmxvZyhnZXRJbmRlY2llc0ZpbGUuYWxpY2UpXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBvYmplY3QgYXMgdHlwZW9mIGdldEluZGVjaWVzRmlsZScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGdldEluZGVjaWVzRmlsZSBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgICAgfSk7IFxuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgZ2V0QWxsSW5kZWNpZXMyJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QoZ2V0SW5kZWNpZXNGaWxlMikudG9CZUZhbHN5KCk7XG4gICAgICB9KTsgXG4gICAgfSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcIlwiOiBcIlwiLFxuICAgIFwiXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwiXCI6IFwiXCIsXG4gICAgXCJcIjogXCJcIlxuICB9XG5dIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7ICBcIm5hbWVcIiA6IFwiQWxpY2UgaW4gV29uZGVybGFuZFwiLFxuICAgIFwidmFsdWVcIjogXCJBbGljZSBmYWxscyBpbnRvIGEgcmFiYml0IGhvbGUgYW5kIGVudGVycyBhIHdvcmxkIGZ1bGwgb2YgaW1hZ2luYXRpb24uXCJcbiAgfVxuLFxuICAgeyBcIm5hbWVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidmFsdWVcIjogXCJBbiB1bnVzdWFsIGFsbGlhbmNlIG9mIG1hbiwgZWxmLCBkd2FyZiwgd2l6YXJkIGFuZCBob2JiaXQgc2VlayB0byBkZXN0cm95IGEgcG93ZXJmdWwgcmluZy5cIlxuXG4gICB9XG5dIl19
