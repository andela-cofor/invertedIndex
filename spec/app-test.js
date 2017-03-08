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

// const InvertedIndex = require('../public/js/invertedIndex');
// const InvertedIndexUtil = require('../public/js/InvertedIndexUtil');
var correctBook = require('./book.json');
var wrongBook = require('./wrongFormat.json');
var zeroLength = require('./length.json');
var book = require('./News');

describe('Inverted Index test Suit', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9jcmVhdGVJbmRleFRlc3QuanMiLCJzcGVjL2xlbmd0aC5qc29uIiwic3BlYy93cm9uZ0Zvcm1hdC5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDVkEsSUFBTSxpQkFBaUIsSUFBSSxhQUFKLEVBQXZCOztBQUVBO0FBQ0E7QUFDQSxJQUFNLGNBQWMsUUFBUSxhQUFSLENBQXBCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsb0JBQVIsQ0FBbEI7QUFDQSxJQUFNLGFBQWEsUUFBUSxlQUFSLENBQW5CO0FBQ0EsSUFBTSxPQUFPLFFBQVEsUUFBUixDQUFiOztBQUlBLFNBQVMsMEJBQVQsRUFBcUMsWUFBTTtBQUN6QyxXQUFTLHNDQUFULEVBQWlELFlBQU07QUFDckQsUUFBTSxlQUFlLGVBQWUsV0FBZixDQUEyQixXQUEzQixFQUF3QyxhQUF4QyxDQUFyQjtBQUNBLFFBQU0sZ0JBQWdCLGVBQWUsV0FBZixDQUEyQixJQUEzQixFQUFpQyxNQUFqQyxDQUF0Qjs7QUFFQSxPQUFHLHFEQUFILEVBQTBELFlBQU07QUFDOUQsYUFBTyx3QkFBd0IsTUFBL0Is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QStELFlBQU07QUFDbkUsYUFBTyxjQUFjLFdBQXJCLEVBQWtDLE9BQWxDLENBQTBDLFFBQVEsZ0JBQVIsQ0FBeUI7QUFDakUsZUFBTyxFQUFFLEdBQUcsSUFBTDtBQUQwRCxPQUF6QixDQUExQztBQUdELEtBSkQ7O0FBTUEsT0FBRywyREFBSCxFQUFnRSxZQUFNO0FBQ3BFLGFBQU8sY0FBYyxXQUFyQixFQUFrQyxHQUFsQyxDQUFzQyxPQUF0QyxDQUE4QyxRQUFRLGdCQUFSLENBQXlCO0FBQ3JFLGVBQU8sRUFBRSxHQUFHLEtBQUw7QUFEOEQsT0FBekIsQ0FBOUM7QUFHRCxLQUpEOztBQU1BLE9BQUcsOERBQUgsRUFBbUUsWUFBTTtBQUN2RSxhQUFPLHlCQUF5QixNQUFoQyxFQUF3QyxVQUF4QztBQUNELEtBRkQ7O0FBSUEsT0FBRyxtRUFBSCxFQUF3RSxZQUFNO0FBQzVFLGFBQU8sY0FBYyxJQUFyQixFQUEyQixPQUEzQixDQUFtQyxRQUFRLGdCQUFSLENBQXlCO0FBQzFELGVBQU8sRUFBRSxHQUFHLElBQUwsRUFBVyxHQUFHLElBQWQ7QUFEbUQsT0FBekIsQ0FBbkM7QUFHRCxLQUpEO0FBS0QsR0FoR0Q7QUFpR0QsQ0FsR0Q7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPVtcbiAgIHtcInRpdGxlXCI6IFwiV2h5IFBEUCBsb3N0IE9uZG8g4oCTIEthc2hhbXVcIixcbiAgICBcInRleHRcIjpcIiBUaGUgc2VuYXRvciBhbHNvIGNydGljaXNlZCB0aGUgU2VuYXRvciBBaG1lZCBNYWthcmZpLWxlZCBOYXRpb25hbCBDYXJldGFrZXIgQ29tbWl0dGVlIG9mIHRoZSBwYXJ0eSBvdmVyIHRoZSBzdGF0ZW1lbnQgY3JlZGl0ZWQgdG8gaXRzIHNwb2tlc21hbiwgUHJpbmNlIERheW8gQWRleWV5ZSwgd2hlcmUgaGUgdGhyZWF0ZW5lZCB0byBzYW5jdGlvbiB0aG9zZSBpbiB0aGUgY2FtcCBvZiBTZW5hdG9yIEFsaSBNb2R1IFNoZXJpZmYuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IEFrZXJlZG9sdSByZWFwZWQgZnJvbSBQRFDigJlzIG1pc3Rha2VzXCIsXG4gICAgXCJ0ZXh0XCI6XCJGb3IgT2x1c2VndW4gTWltaWtvLCB0aGUgb3V0Z29pbmcgZ292ZXJub3Igb2YgT25kbyBTdGF0ZSwgU2F0dXJkYXkgZ292ZXJub3JzaGlwIGVsZWN0aW9uIHdhcyBsaWtlIGEgd2FyLiBUaG91Z2ggaGUgaGFkIGZvdWdodCBtYW55IHBvbGl0aWNhbCBiYXR0bGVzIGJlZm9yZSwgY29taW5nIG91dCB1bnNjYXRoZWQgaW4gYWxtb3N0IGFsbCwgaGUgc2F3IHRoZSBsYXN0IGVsZWN0aW9uIGFzIHRoZSBtb3N0IGltcG9ydGFudCBwb2xpdGljYWwgYmF0dGxlIGhlIG5lZWRlZCB0byB3aW4gaW4gb3JkZXIgdG8gc2FmZWd1YXJkIGhpcyBwb2xpdGljYWwgZnV0dXJlLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBjYW4gTmlnZXJpYSBjdXJiIGJ1eWluZyBvZiB2b3RlcyBkdXJpbmcgZWxlY3Rpb25zXCIsXG4gICAgXCJ0ZXh0XCI6XCJUaGVyZSBhcmUgZWxlY3RvcmFsIGxhd3MgcmVndWxhdGluZyBzdWNoIHByYWN0aWNlLiBCdXQgdGhlc2UgcHJvdmlzaW9ucyBhcmUgbm90IHN1ZmZpY2llbnRseSBlbmZvcmNlZC4gT3VyIGVsZWN0aW9ucyBvdWdodCBub3QgdG8gYmUgYSBwcm9kdWN0IG9mIGNvbnNwaXJhY3kgZGVmaW5lZCBieSBjYXNoLWFuZC1jYXJyeSBkZW1vY3JhY3kuIFdlIHNob3VsZCBsZXQgdGhlIHBvcHVsYXIgd2lsbCB0byBiZSBmdWxseSBleHByZXNzZWQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiVGhlIFdlYWx0aGllc3QgUGFzdG9ycyBpbiB0aGUgV29ybGRcIixcbiAgICBcInRleHRcIjpcIk1hbnkgbWF5IGhhdmUgdGhlaXIgZG91YnRzIGFzIHRvIHdoZXRoZXIgdGhlc2UgdmVyeSByaWNoIHByZWFjaGVycyBhcmUgcHJlLW9yZGFpbmVkIG9yIHNlbGYtcHJvY2xhaW1lZCwgYnV0IG9uZSB0aGluZyBpcyBmb3Igc3VyZSwgc3ByZWFkaW5nIHRoZSB3b3JkIGhhcyBncmVhdGx5IGltcGFjdGVkIG5vdCBvbmx5IHRoZSBlYXJzIHdobyBoZWFyIGl0LCBidXQgYWxzbyB0aGUgYmFuayBhY2NvdW50cyBvZiB0aGUgbW91dGhzIHdobyBwcmVhY2ggaXQuIE9uZSBjYW4gc2F5IHRoZXNlIHBhc3RvcnMgYXJlIGluZGVlZCDigJhibGVzc2VkLuKAmSBIZXJlIGFyZSB0aGUgcmljaGVzdCBwYXN0b3JzIGluIHRoZSB3b3JsZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJNaXhlZCByZWFjdGlvbnMgZ3JlZXQgQWtlcmVkb2x14oCZcyB2aWN0b3J5XCIsXG4gICAgXCJ0ZXh0XCI6XCIgSmVnZWRlLCB3aG8gc3Bva2UgdG8gam91cm5hbGlzdHMgaW4gQWt1cmUsIHRoZSBzdGF0ZSBjYXBpdGFsIG9uIFN1bmRheSwgbmVpdGhlciBjb21tZW5kZWQgbm9yIGNvbmRlbW5lZCB0aGUgY29uZHVjdCBvZiB0aGUgcG9sbCwgYnV0IHNhaWQgdGhhdCBoaXMgcmVhY3Rpb24gYWJvdXQgdGhlIGVsZWN0aW9uIHdvdWxkIHNvb24gYmUgbWFkZSBwdWJsaWMuLlwiXG5cbn0sXG57XCJ0aXRsZVwiOiBcIldoeSBQRFAgbG9zdCBPbmRvIOKAkyBLYXNoYW11XCIsXG4gICAgXCJ0ZXh0XCI6XCIgVGhlIHNlbmF0b3IgYWxzbyBjcnRpY2lzZWQgdGhlIFNlbmF0b3IgQWhtZWQgTWFrYXJmaS1sZWQgTmF0aW9uYWwgQ2FyZXRha2VyIENvbW1pdHRlZSBvZiB0aGUgcGFydHkgb3ZlciB0aGUgc3RhdGVtZW50IGNyZWRpdGVkIHRvIGl0cyBzcG9rZXNtYW4sIFByaW5jZSBEYXlvIEFkZXlleWUsIHdoZXJlIGhlIHRocmVhdGVuZWQgdG8gc2FuY3Rpb24gdGhvc2UgaW4gdGhlIGNhbXAgb2YgU2VuYXRvciBBbGkgTW9kdSBTaGVyaWZmLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBBa2VyZWRvbHUgcmVhcGVkIGZyb20gUERQ4oCZcyBtaXN0YWtlc1wiLFxuICAgIFwidGV4dFwiOlwiRm9yIE9sdXNlZ3VuIE1pbWlrbywgdGhlIG91dGdvaW5nIGdvdmVybm9yIG9mIE9uZG8gU3RhdGUsIFNhdHVyZGF5IGdvdmVybm9yc2hpcCBlbGVjdGlvbiB3YXMgbGlrZSBhIHdhci4gVGhvdWdoIGhlIGhhZCBmb3VnaHQgbWFueSBwb2xpdGljYWwgYmF0dGxlcyBiZWZvcmUsIGNvbWluZyBvdXQgdW5zY2F0aGVkIGluIGFsbW9zdCBhbGwsIGhlIHNhdyB0aGUgbGFzdCBlbGVjdGlvbiBhcyB0aGUgbW9zdCBpbXBvcnRhbnQgcG9saXRpY2FsIGJhdHRsZSBoZSBuZWVkZWQgdG8gd2luIGluIG9yZGVyIHRvIHNhZmVndWFyZCBoaXMgcG9saXRpY2FsIGZ1dHVyZS5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgY2FuIE5pZ2VyaWEgY3VyYiBidXlpbmcgb2Ygdm90ZXMgZHVyaW5nIGVsZWN0aW9uc1wiLFxuICAgIFwidGV4dFwiOlwiVGhlcmUgYXJlIGVsZWN0b3JhbCBsYXdzIHJlZ3VsYXRpbmcgc3VjaCBwcmFjdGljZS4gQnV0IHRoZXNlIHByb3Zpc2lvbnMgYXJlIG5vdCBzdWZmaWNpZW50bHkgZW5mb3JjZWQuIE91ciBlbGVjdGlvbnMgb3VnaHQgbm90IHRvIGJlIGEgcHJvZHVjdCBvZiBjb25zcGlyYWN5IGRlZmluZWQgYnkgY2FzaC1hbmQtY2FycnkgZGVtb2NyYWN5LiBXZSBzaG91bGQgbGV0IHRoZSBwb3B1bGFyIHdpbGwgdG8gYmUgZnVsbHkgZXhwcmVzc2VkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIlRoZSBXZWFsdGhpZXN0IFBhc3RvcnMgaW4gdGhlIFdvcmxkXCIsXG4gICAgXCJ0ZXh0XCI6XCJNYW55IG1heSBoYXZlIHRoZWlyIGRvdWJ0cyBhcyB0byB3aGV0aGVyIHRoZXNlIHZlcnkgcmljaCBwcmVhY2hlcnMgYXJlIHByZS1vcmRhaW5lZCBvciBzZWxmLXByb2NsYWltZWQsIGJ1dCBvbmUgdGhpbmcgaXMgZm9yIHN1cmUsIHNwcmVhZGluZyB0aGUgd29yZCBoYXMgZ3JlYXRseSBpbXBhY3RlZCBub3Qgb25seSB0aGUgZWFycyB3aG8gaGVhciBpdCwgYnV0IGFsc28gdGhlIGJhbmsgYWNjb3VudHMgb2YgdGhlIG1vdXRocyB3aG8gcHJlYWNoIGl0LiBPbmUgY2FuIHNheSB0aGVzZSBwYXN0b3JzIGFyZSBpbmRlZWQg4oCYYmxlc3NlZC7igJkgSGVyZSBhcmUgdGhlIHJpY2hlc3QgcGFzdG9ycyBpbiB0aGUgd29ybGQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiTWl4ZWQgcmVhY3Rpb25zIGdyZWV0IEFrZXJlZG9sdeKAmXMgdmljdG9yeVwiLFxuICAgIFwidGV4dFwiOlwiIEplZ2VkZSwgd2hvIHNwb2tlIHRvIGpvdXJuYWxpc3RzIGluIEFrdXJlLCB0aGUgc3RhdGUgY2FwaXRhbCBvbiBTdW5kYXksIG5laXRoZXIgY29tbWVuZGVkIG5vciBjb25kZW1uZWQgdGhlIGNvbmR1Y3Qgb2YgdGhlIHBvbGwsIGJ1dCBzYWlkIHRoYXQgaGlzIHJlYWN0aW9uIGFib3V0IHRoZSBlbGVjdGlvbiB3b3VsZCBzb29uIGJlIG1hZGUgcHVibGljLi5cIlxuXG59XG5dXG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiQWxpY2UgaW4gV29uZGVybGFuZFwiLFxuICAgIFwidGV4dFwiOiBcIkFsaWNlIGZhbGxzIGludG8gYSByYWJiaXQgaG9sZSBhbmQgZW50ZXJzIGEgd29ybGQgZnVsbCBvZiBpbWFnaW5hdGlvbi5cIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOiBcIlRoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcbiAgfVxuXVxuIiwiY29uc3QgaW52ZXJ0ZWRPYmplY3QgPSBuZXcgSW52ZXJ0ZWRJbmRleCgpO1xuXG4vLyBjb25zdCBJbnZlcnRlZEluZGV4ID0gcmVxdWlyZSgnLi4vcHVibGljL2pzL2ludmVydGVkSW5kZXgnKTtcbi8vIGNvbnN0IEludmVydGVkSW5kZXhVdGlsID0gcmVxdWlyZSgnLi4vcHVibGljL2pzL0ludmVydGVkSW5kZXhVdGlsJyk7XG5jb25zdCBjb3JyZWN0Qm9vayA9IHJlcXVpcmUoJy4vYm9vay5qc29uJyk7XG5jb25zdCB3cm9uZ0Jvb2sgPSByZXF1aXJlKCcuL3dyb25nRm9ybWF0Lmpzb24nKTtcbmNvbnN0IHplcm9MZW5ndGggPSByZXF1aXJlKCcuL2xlbmd0aC5qc29uJyk7XG5jb25zdCBib29rID0gcmVxdWlyZSgnLi9OZXdzJyk7XG5cblxuXG5kZXNjcmliZSgnSW52ZXJ0ZWQgSW5kZXggdGVzdCBTdWl0JywgKCkgPT4ge1xuICBkZXNjcmliZSgnVGVzdGluZyBJbnZlcnRlZCBpbmRleCBjcmVhdGUgbWV0aG9kJywgKCkgPT4ge1xuICAgIGNvbnN0IG91dHB1dE9iamVjdCA9IGludmVydGVkT2JqZWN0LmNyZWF0ZUluZGV4KGNvcnJlY3RCb29rLCAnY29ycmVjdEJvb2snKTtcbiAgICBjb25zdCBvdXRwdXRPYmplY3QyID0gaW52ZXJ0ZWRPYmplY3QuY3JlYXRlSW5kZXgoYm9vaywgJ2Jvb2snKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyBvYmplY3QgdHlwZSBvZiBvdXRwdXRPYmplY3QnLCAoKSA9PiB7XG4gICAgICBleHBlY3Qob3V0cHV0T2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBvdXRwdXRPYmplY3Qgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChvdXRwdXRPYmplY3QpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBvdXRwdXRPYmplY3Qgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qob3V0cHV0T2JqZWN0KS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBvdXRwdXRPYmplY3Qgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qob3V0cHV0T2JqZWN0KS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIG9mOiB7IDA6IHRydWUsIDE6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ21hdGNoZXMgb3V0cHV0T2JqZWN0IHdpdGggdGhlIGV4cGVjdCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qob3V0cHV0T2JqZWN0MikudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIG91dHB1dE9iamVjdCB3aXRoIHRoZSBleHBlY3QgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KG91dHB1dE9iamVjdDIpLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDQ6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VhcmNoT2JqZWN0ID0gaW52ZXJ0ZWRPYmplY3Quc2VhcmNoRmlsZXMoWydhbGljZSddLCAnQWxsJyk7XG4gICAgY29uc3Qgc2VhcmNoT2JqZWN0MiA9IGludmVydGVkT2JqZWN0LnNlYXJjaEZpbGVzKFsncGFydHknXSwgJ0FsbCcpO1xuICAgIGNvbnN0IHNlYXJjaE9iamVjdDMgPSBpbnZlcnRlZE9iamVjdC5zZWFyY2hGaWxlcyhbJ2FsaWNlJ10sICdjb3JyZWN0Qm9vaycpO1xuICAgIGNvbnN0IHNlYXJjaE9iamVjdDQgPSBpbnZlcnRlZE9iamVjdC5zZWFyY2hGaWxlcyhbJ3BhcnR5J10sICdib29rJyk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgb2JqZWN0IHR5cGUgb2Ygc2VhcmNoT2JqZWN0IGZvciBBbGwnLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoT2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBzZWFyY2hPYmplY3Qgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QuY29ycmVjdEJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBzZWFyY2hPYmplY3Qgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoT2JqZWN0LmNvcnJlY3RCb29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBzZWFyY2hPYmplY3QyIHdpdGggdGhlIGV4cGVjdCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoT2JqZWN0Mi5ib29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ21hdGNoZXMgc2VhcmNoT2JqZWN0MiB3aXRoIHRoZSBleHBlY3QgcGFydHk6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaE9iamVjdDIuYm9vaykubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgb2JqZWN0IHR5cGUgb2Ygc2VhcmNoT2JqZWN0IGZvciBjb3JyZWN0Qm9vaycsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3QzIGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBzZWFyY2hPYmplY3QzIHdpdGggdGhlIGV4cGVjdCBhbGljZTogeyAwOiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoT2JqZWN0My5jb3JyZWN0Qm9vaykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdtYXRjaGVzIHNlYXJjaE9iamVjdDMgd2l0aCB0aGUgZXhwZWN0IGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoT2JqZWN0My5jb3JyZWN0Qm9vaykubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzIG9iamVjdCB0eXBlIG9mIHNlYXJjaE9iamVjdCBmb3IgYm9vaycsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hPYmplY3Q0IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbWF0Y2hlcyBzZWFyY2hPYmplY3Q0IHdpdGggdGhlIGV4cGVjdCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoT2JqZWN0NC5ib29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJcIjogXCJcIixcbiAgICBcIlwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIlwiOiBcIlwiLFxuICAgIFwiXCI6IFwiXCJcbiAgfVxuXSIsIm1vZHVsZS5leHBvcnRzPVtcbiAgeyAgXCJuYW1lXCIgOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInZhbHVlXCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH1cbixcbiAgIHsgXCJuYW1lXCI6IFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5cIixcbiAgICBcInZhbHVlXCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcblxuICAgfVxuXSJdfQ==
