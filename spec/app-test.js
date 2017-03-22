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

var book = require('./book');
var News = require('./News');
var empty = require('./empty');
var likePackage = require('./likePackage');
var many = require('./many');

describe('Inverted index create method', function () {
  var result = invertedIndex.createIndex(book, 'book');
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
    var searchForAliceInBook = invertedIndex.searchFiles(['alice'], 'book');
    var searchForPartyInNews = invertedIndex.searchFiles(['party'], 'News');

    it('should return Object as type of search result', function () {
      expect(searchForAliceInAllFiles instanceof Object).toBeTruthy();
    });

    it('should match searchForAliceInAllFiles with alice: { 0: true }', function () {
      expect(searchForAliceInAllFiles.book).toEqual(jasmine.objectContaining({
        alice: { 0: true }
      }));
    });

    it('should match searchForAliceInAllFiles with alice: { 0: false }', function () {
      expect(searchForAliceInAllFiles.book).not.toEqual(jasmine.objectContaining({
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
      expect(searchForAliceInBook.book).toEqual(jasmine.objectContaining({
        alice: { 0: true }
      }));
    });

    it('should match searchForAliceInBook with alice: { 0: false }', function () {
      expect(searchForAliceInBook.book).not.toEqual(jasmine.objectContaining({
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
    var getCorrectBookIndex = invertedIndex.getIndex('book');
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
    var correctFileContent = invertedIndex.isValid(book[0]);
    var packageJsonBook = invertedIndex.isValid(likePackage);
    var manyBookContent = invertedIndex.isValid(many);

    it('should return false for an empty json file', function () {
      expect(emptyFileContent).toBeFalsy();
    });

    it('should return true for correctFileContent', function () {
      expect(correctFileContent).toBeTruthy();
    });

    it('should return false for pakage.json as book', function () {
      expect(packageJsonBook).toEqual(false);
    });

    it('should return false wrong file content', function () {
      expect(manyBookContent).toBeFalsy();
    });
  });

  describe('the inverted index normalizeText method', function () {
    var sampleSentence = 'Alice falls into a rabbit hole..';
    var normalizeTextTest = InvertedIndex.normalizeText(sampleSentence);

    it('should return true for normalizeTextTest', function () {
      expect(normalizeTextTest instanceof Array).toBeTruthy();
    });

    it('should return an array containing alphabets only', function () {
      expect(normalizeTextTest).toEqual(['alice', 'falls', 'into', 'a', 'rabbit', 'hole']);
    });

    it('should return correct length of array of words', function () {
      expect(normalizeTextTest.length).toBe(6);
    });
  });
});

},{"./News":1,"./book":2,"./empty":3,"./likePackage":5,"./many":6}],5:[function(require,module,exports){
module.exports={
  "name": "inertedindex",
  "version": "1.0.0",
  "description": "user can create search through json files",
  "main": "index.js",
  "scripts": {
    "test": "karma start karma.conf.js",
    "lint": "./node_modules/.bin/eslint public/js/*.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/andela-cofor/invertedIndex.git"
  },
  "author": "Ofor Chinedu",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/andela-cofor/invertedIndex/issues"
  },
  "homepage": "https://github.com/andela-cofor/invertedIndex#readme",
  "devDependencies": {
    "babel-preset-es2015": "^6.22.0",
    "babelify": "^7.3.0",
    "browser-sync": "^2.18.7",
    "browserify": "^14.1.0",
    "coveralls": "^2.12.0",
    "eslint": "^3.16.1",
    "eslint-config-airbnb-base": "^11.1.0",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-react": "^6.10.0",
    "gulp": "^3.9.1",
    "jasmine": "^2.5.3",
    "jasmine-core": "^2.5.2",
    "karma": "^1.5.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.1.1",
    "karma-coveralls": "^1.1.2",
    "karma-firefox-launcher": "^1.0.1",
    "karma-jasmine": "^1.1.0",
    "karma-spec-reporter": "0.0.30",
    "karma-verbose-reporter": "0.0.5",
    "nodemon": "^1.11.0",
    "vinyl-source-stream": "^1.1.0"
  },
  "dependencies": {
    "browser-sync": "^2.18.7",
    "chai": "^3.5.0",
    "connect": "^3.5.0",
    "eslint": "^3.15.0",
    "eslint-config-airbnb": "^14.1.0",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^4.0.0",
    "eslint-plugin-react": "^6.9.0",
    "express": "^4.15.1",
    "gulp": "^3.9.1",
    "jasmine": "^2.5.3",
    "serve-static": "^1.11.2",
    "server-static": "^1.3.0"
  }
}

},{}],6:[function(require,module,exports){
module.exports=[
  { "title": "Many content", "text": "An Inverted Index is an Index Data Structure storing a mapping from content to location" },
  { "title": "Some content", "text": "So if your client-side code is located in app/js, create a directory called" },
  { "title": "Poor content", "text": "Upload valid json book files (that have a text and title property)" },
  { "title": "None content", "text": " Zapper"},
]
},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9lbXB0eS5qc29uIiwic3BlYy9pbnZlcnRlZC1pbmRleC10ZXN0LmpzIiwic3BlYy9saWtlUGFja2FnZS5qc29uIiwic3BlYy9tYW55Lmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDWEEsSUFBTSxnQkFBZ0IsSUFBSSxhQUFKLEVBQXRCOztBQUVBLElBQU0sT0FBTyxRQUFRLFFBQVIsQ0FBYjtBQUNBLElBQU0sT0FBTyxRQUFRLFFBQVIsQ0FBYjtBQUNBLElBQU0sUUFBUSxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQU0sY0FBYyxRQUFRLGVBQVIsQ0FBcEI7QUFDQSxJQUFNLE9BQU8sUUFBUSxRQUFSLENBQWI7O0FBRUEsU0FBUyw4QkFBVCxFQUF5QyxZQUFNO0FBQzdDLE1BQU0sU0FBUyxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsQ0FBZjtBQUNBLE1BQU0sVUFBVSxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz1bXG4gICB7XCJ0aXRsZVwiOiBcIldoeSBQRFAgbG9zdCBPbmRvIOKAkyBLYXNoYW11XCIsXG4gICAgXCJ0ZXh0XCI6XCIgVGhlIHNlbmF0b3IgYWxzbyBjcnRpY2lzZWQgdGhlIFNlbmF0b3IgQWhtZWQgTWFrYXJmaS1sZWQgTmF0aW9uYWwgQ2FyZXRha2VyIENvbW1pdHRlZSBvZiB0aGUgcGFydHkgb3ZlciB0aGUgc3RhdGVtZW50IGNyZWRpdGVkIHRvIGl0cyBzcG9rZXNtYW4sIFByaW5jZSBEYXlvIEFkZXlleWUsIHdoZXJlIGhlIHRocmVhdGVuZWQgdG8gc2FuY3Rpb24gdGhvc2UgaW4gdGhlIGNhbXAgb2YgU2VuYXRvciBBbGkgTW9kdSBTaGVyaWZmLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBBa2VyZWRvbHUgcmVhcGVkIGZyb20gUERQ4oCZcyBtaXN0YWtlc1wiLFxuICAgIFwidGV4dFwiOlwiRm9yIE9sdXNlZ3VuIE1pbWlrbywgdGhlIG91dGdvaW5nIGdvdmVybm9yIG9mIE9uZG8gU3RhdGUsIFNhdHVyZGF5IGdvdmVybm9yc2hpcCBlbGVjdGlvbiB3YXMgbGlrZSBhIHdhci4gVGhvdWdoIGhlIGhhZCBmb3VnaHQgbWFueSBwb2xpdGljYWwgYmF0dGxlcyBiZWZvcmUsIGNvbWluZyBvdXQgdW5zY2F0aGVkIGluIGFsbW9zdCBhbGwsIGhlIHNhdyB0aGUgbGFzdCBlbGVjdGlvbiBhcyB0aGUgbW9zdCBpbXBvcnRhbnQgcG9saXRpY2FsIGJhdHRsZSBoZSBuZWVkZWQgdG8gd2luIGluIG9yZGVyIHRvIHNhZmVndWFyZCBoaXMgcG9saXRpY2FsIGZ1dHVyZS5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgY2FuIE5pZ2VyaWEgY3VyYiBidXlpbmcgb2Ygdm90ZXMgZHVyaW5nIGVsZWN0aW9uc1wiLFxuICAgIFwidGV4dFwiOlwiVGhlcmUgYXJlIGVsZWN0b3JhbCBsYXdzIHJlZ3VsYXRpbmcgc3VjaCBwcmFjdGljZS4gQnV0IHRoZXNlIHByb3Zpc2lvbnMgYXJlIG5vdCBzdWZmaWNpZW50bHkgZW5mb3JjZWQuIE91ciBlbGVjdGlvbnMgb3VnaHQgbm90IHRvIGJlIGEgcHJvZHVjdCBvZiBjb25zcGlyYWN5IGRlZmluZWQgYnkgY2FzaC1hbmQtY2FycnkgZGVtb2NyYWN5LiBXZSBzaG91bGQgbGV0IHRoZSBwb3B1bGFyIHdpbGwgdG8gYmUgZnVsbHkgZXhwcmVzc2VkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIlRoZSBXZWFsdGhpZXN0IFBhc3RvcnMgaW4gdGhlIFdvcmxkXCIsXG4gICAgXCJ0ZXh0XCI6XCJNYW55IG1heSBoYXZlIHRoZWlyIGRvdWJ0cyBhcyB0byB3aGV0aGVyIHRoZXNlIHZlcnkgcmljaCBwcmVhY2hlcnMgYXJlIHByZS1vcmRhaW5lZCBvciBzZWxmLXByb2NsYWltZWQsIGJ1dCBvbmUgdGhpbmcgaXMgZm9yIHN1cmUsIHNwcmVhZGluZyB0aGUgd29yZCBoYXMgZ3JlYXRseSBpbXBhY3RlZCBub3Qgb25seSB0aGUgZWFycyB3aG8gaGVhciBpdCwgYnV0IGFsc28gdGhlIGJhbmsgYWNjb3VudHMgb2YgdGhlIG1vdXRocyB3aG8gcHJlYWNoIGl0LiBPbmUgY2FuIHNheSB0aGVzZSBwYXN0b3JzIGFyZSBpbmRlZWQg4oCYYmxlc3NlZC7igJkgSGVyZSBhcmUgdGhlIHJpY2hlc3QgcGFzdG9ycyBpbiB0aGUgd29ybGQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiTWl4ZWQgcmVhY3Rpb25zIGdyZWV0IEFrZXJlZG9sdeKAmXMgdmljdG9yeVwiLFxuICAgIFwidGV4dFwiOlwiIEplZ2VkZSwgd2hvIHNwb2tlIHRvIGpvdXJuYWxpc3RzIGluIEFrdXJlLCB0aGUgc3RhdGUgY2FwaXRhbCBvbiBTdW5kYXksIG5laXRoZXIgY29tbWVuZGVkIG5vciBjb25kZW1uZWQgdGhlIGNvbmR1Y3Qgb2YgdGhlIHBvbGwsIGJ1dCBzYWlkIHRoYXQgaGlzIHJlYWN0aW9uIGFib3V0IHRoZSBlbGVjdGlvbiB3b3VsZCBzb29uIGJlIG1hZGUgcHVibGljLi5cIlxuXG59LFxue1widGl0bGVcIjogXCJXaHkgUERQIGxvc3QgT25kbyDigJMgS2FzaGFtdVwiLFxuICAgIFwidGV4dFwiOlwiIFRoZSBzZW5hdG9yIGFsc28gY3J0aWNpc2VkIHRoZSBTZW5hdG9yIEFobWVkIE1ha2FyZmktbGVkIE5hdGlvbmFsIENhcmV0YWtlciBDb21taXR0ZWUgb2YgdGhlIHBhcnR5IG92ZXIgdGhlIHN0YXRlbWVudCBjcmVkaXRlZCB0byBpdHMgc3Bva2VzbWFuLCBQcmluY2UgRGF5byBBZGV5ZXllLCB3aGVyZSBoZSB0aHJlYXRlbmVkIHRvIHNhbmN0aW9uIHRob3NlIGluIHRoZSBjYW1wIG9mIFNlbmF0b3IgQWxpIE1vZHUgU2hlcmlmZi5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgQWtlcmVkb2x1IHJlYXBlZCBmcm9tIFBEUOKAmXMgbWlzdGFrZXNcIixcbiAgICBcInRleHRcIjpcIkZvciBPbHVzZWd1biBNaW1pa28sIHRoZSBvdXRnb2luZyBnb3Zlcm5vciBvZiBPbmRvIFN0YXRlLCBTYXR1cmRheSBnb3Zlcm5vcnNoaXAgZWxlY3Rpb24gd2FzIGxpa2UgYSB3YXIuIFRob3VnaCBoZSBoYWQgZm91Z2h0IG1hbnkgcG9saXRpY2FsIGJhdHRsZXMgYmVmb3JlLCBjb21pbmcgb3V0IHVuc2NhdGhlZCBpbiBhbG1vc3QgYWxsLCBoZSBzYXcgdGhlIGxhc3QgZWxlY3Rpb24gYXMgdGhlIG1vc3QgaW1wb3J0YW50IHBvbGl0aWNhbCBiYXR0bGUgaGUgbmVlZGVkIHRvIHdpbiBpbiBvcmRlciB0byBzYWZlZ3VhcmQgaGlzIHBvbGl0aWNhbCBmdXR1cmUuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IGNhbiBOaWdlcmlhIGN1cmIgYnV5aW5nIG9mIHZvdGVzIGR1cmluZyBlbGVjdGlvbnNcIixcbiAgICBcInRleHRcIjpcIlRoZXJlIGFyZSBlbGVjdG9yYWwgbGF3cyByZWd1bGF0aW5nIHN1Y2ggcHJhY3RpY2UuIEJ1dCB0aGVzZSBwcm92aXNpb25zIGFyZSBub3Qgc3VmZmljaWVudGx5IGVuZm9yY2VkLiBPdXIgZWxlY3Rpb25zIG91Z2h0IG5vdCB0byBiZSBhIHByb2R1Y3Qgb2YgY29uc3BpcmFjeSBkZWZpbmVkIGJ5IGNhc2gtYW5kLWNhcnJ5IGRlbW9jcmFjeS4gV2Ugc2hvdWxkIGxldCB0aGUgcG9wdWxhciB3aWxsIHRvIGJlIGZ1bGx5IGV4cHJlc3NlZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJUaGUgV2VhbHRoaWVzdCBQYXN0b3JzIGluIHRoZSBXb3JsZFwiLFxuICAgIFwidGV4dFwiOlwiTWFueSBtYXkgaGF2ZSB0aGVpciBkb3VidHMgYXMgdG8gd2hldGhlciB0aGVzZSB2ZXJ5IHJpY2ggcHJlYWNoZXJzIGFyZSBwcmUtb3JkYWluZWQgb3Igc2VsZi1wcm9jbGFpbWVkLCBidXQgb25lIHRoaW5nIGlzIGZvciBzdXJlLCBzcHJlYWRpbmcgdGhlIHdvcmQgaGFzIGdyZWF0bHkgaW1wYWN0ZWQgbm90IG9ubHkgdGhlIGVhcnMgd2hvIGhlYXIgaXQsIGJ1dCBhbHNvIHRoZSBiYW5rIGFjY291bnRzIG9mIHRoZSBtb3V0aHMgd2hvIHByZWFjaCBpdC4gT25lIGNhbiBzYXkgdGhlc2UgcGFzdG9ycyBhcmUgaW5kZWVkIOKAmGJsZXNzZWQu4oCZIEhlcmUgYXJlIHRoZSByaWNoZXN0IHBhc3RvcnMgaW4gdGhlIHdvcmxkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIk1peGVkIHJlYWN0aW9ucyBncmVldCBBa2VyZWRvbHXigJlzIHZpY3RvcnlcIixcbiAgICBcInRleHRcIjpcIiBKZWdlZGUsIHdobyBzcG9rZSB0byBqb3VybmFsaXN0cyBpbiBBa3VyZSwgdGhlIHN0YXRlIGNhcGl0YWwgb24gU3VuZGF5LCBuZWl0aGVyIGNvbW1lbmRlZCBub3IgY29uZGVtbmVkIHRoZSBjb25kdWN0IG9mIHRoZSBwb2xsLCBidXQgc2FpZCB0aGF0IGhpcyByZWFjdGlvbiBhYm91dCB0aGUgZWxlY3Rpb24gd291bGQgc29vbiBiZSBtYWRlIHB1YmxpYy4uXCJcblxufVxuXVxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJ0aXRsZVwiOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInRleHRcIjogXCJBbGljZSBmYWxscyBpbnRvIGEgcmFiYml0IGhvbGUgYW5kIGVudGVycyBhIHdvcmxkIGZ1bGwgb2YgaW1hZ2luYXRpb24uXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidGV4dFwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG4gIH1cbl1cbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwiIFwiOiBcIiBcIixcbiAgICBcIiBcIjogXCIgXCJcbiAgfSxcblxuICB7XG4gICAgXCIgXCI6IFwiXCIsXG4gICAgXCIgXCI6IFwiIFwiXG4gIH1cbl1cbiIsImNvbnN0IGludmVydGVkSW5kZXggPSBuZXcgSW52ZXJ0ZWRJbmRleCgpO1xuXG5jb25zdCBib29rID0gcmVxdWlyZSgnLi9ib29rJyk7XG5jb25zdCBOZXdzID0gcmVxdWlyZSgnLi9OZXdzJyk7XG5jb25zdCBlbXB0eSA9IHJlcXVpcmUoJy4vZW1wdHknKTtcbmNvbnN0IGxpa2VQYWNrYWdlID0gcmVxdWlyZSgnLi9saWtlUGFja2FnZScpO1xuY29uc3QgbWFueSA9IHJlcXVpcmUoJy4vbWFueScpO1xuXG5kZXNjcmliZSgnSW52ZXJ0ZWQgaW5kZXggY3JlYXRlIG1ldGhvZCcsICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gaW52ZXJ0ZWRJbmRleC5jcmVhdGVJbmRleChib29rLCAnYm9vaycpO1xuICBjb25zdCByZXN1bHQyID0gaW52ZXJ0ZWRJbmRleC5jcmVhdGVJbmRleChOZXdzLCAnTmV3cycpO1xuXG4gIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyB0eXBlb2YgcmVzdWx0JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXN1bHQgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHQgd2l0aCBhbGljZTogeyAwOiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJlc3VsdCkudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgfSkpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJlc3VsdCkubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICB9KSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICBleHBlY3QocmVzdWx0KS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBvZjogeyAwOiB0cnVlLCAxOiB0cnVlIH1cbiAgICB9KSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0dCB3aXRoIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICBleHBlY3QocmVzdWx0MikudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgfSkpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdCB3aXRoIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsICgpID0+IHtcbiAgICBleHBlY3QocmVzdWx0Mikubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDQ6IHRydWUgfVxuICAgIH0pKTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ1RoZSBpbnZlcnRlZCBpbmRleCBzZWFyY2ggbWV0aG9kJywgKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEZvckFsaWNlSW5BbGxGaWxlcyA9IGludmVydGVkSW5kZXhcbiAgICAuc2VhcmNoRmlsZXMoWydhbGljZSddLCAnQWxsJyk7XG4gICAgY29uc3Qgc2VhcmNoRm9yUGFydHlJbkFsbEZpbGVzID0gaW52ZXJ0ZWRJbmRleFxuICAgIC5zZWFyY2hGaWxlcyhbJ3BhcnR5J10sICdBbGwnKTtcbiAgICBjb25zdCBzZWFyY2hGb3JBbGljZUluQm9vayA9IGludmVydGVkSW5kZXhcbiAgICAuc2VhcmNoRmlsZXMoWydhbGljZSddLCAnYm9vaycpO1xuICAgIGNvbnN0IHNlYXJjaEZvclBhcnR5SW5OZXdzID0gaW52ZXJ0ZWRJbmRleFxuICAgIC5zZWFyY2hGaWxlcyhbJ3BhcnR5J10sICdOZXdzJyk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgdHlwZSBvZiBzZWFyY2ggcmVzdWx0JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaEZvckFsaWNlSW5BbGxGaWxlcyBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hGb3JBbGljZUluQWxsRmlsZXMgd2l0aCBhbGljZTogeyAwOiB0cnVlIH0nLFxuICAgICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQWxsRmlsZXMuYm9vaykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoRm9yQWxpY2VJbkFsbEZpbGVzIHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQWxsRmlsZXMuYm9vaykubm90XG4gICAgICAudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoc2VhcmNoRm9yUGFydHlJbkFsbEZpbGVzIHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JyxcbiAgICAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoRm9yUGFydHlJbkFsbEZpbGVzLk5ld3MpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaEZvclBhcnR5SW5BbGxGaWxlcyB3aXRoIHBhcnR5OiB7IDA6IHRydWUsIDE6IHRydWUgfScsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hGb3JQYXJ0eUluQWxsRmlsZXMuYm9vaykubm90XG4gICAgICAgIC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzIHR5cGUgb2Ygc2VhcmNoUmVzdWx0MycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQm9vayBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaEZvckFsaWNlSW5Cb29rIHdpdGggYWxpY2U6IHsgMDogdHJ1ZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaEZvckFsaWNlSW5Cb29rLmJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaEZvckFsaWNlSW5Cb29rIHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQm9vay5ib29rKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXN5cGUgb2Ygc2VhcmNoUmVzdWx0NCcsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hGb3JQYXJ0eUluTmV3cyBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaEZvclBhcnR5SW5OZXdzIHdpdGggIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzZWFyY2hGb3JQYXJ0eUluTmV3cy5OZXdzKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgndGhlIGludmVydGVkIGluZGV4IGdldEluZGV4IG1ldGhvZCcsICgpID0+IHtcbiAgICBjb25zdCBnZXRDb3JyZWN0Qm9va0luZGV4ID0gaW52ZXJ0ZWRJbmRleC5nZXRJbmRleCgnYm9vaycpO1xuICAgIGNvbnN0IGdldEVtcHR5SW5kZXggPSBpbnZlcnRlZEluZGV4LmdldEluZGV4KCk7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gb2JqZWN0IGFzIHR5cGVvZiBnZXRDb3JyZWN0Qm9va0luZGV4JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGdldENvcnJlY3RCb29rSW5kZXggaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGZvciBnZXRFbXB0eUluZGV4JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGdldEVtcHR5SW5kZXgpLnRvQmVGYWxzeSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgndGhlIGludmVydGVkIGluZGV4IHZhbGlkYXRlIG1ldGhvZCcsICgpID0+IHtcbiAgICBjb25zdCBlbXB0eUZpbGVDb250ZW50ID0gaW52ZXJ0ZWRJbmRleC5pc1ZhbGlkKGVtcHR5KTtcbiAgICBjb25zdCBjb3JyZWN0RmlsZUNvbnRlbnQgPSBpbnZlcnRlZEluZGV4LmlzVmFsaWQoYm9va1swXSk7XG4gICAgY29uc3QgcGFja2FnZUpzb25Cb29rID0gaW52ZXJ0ZWRJbmRleC5pc1ZhbGlkKGxpa2VQYWNrYWdlKTtcbiAgICBjb25zdCBtYW55Qm9va0NvbnRlbnQgPSBpbnZlcnRlZEluZGV4LmlzVmFsaWQobWFueSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgYW4gZW1wdHkganNvbiBmaWxlJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGVtcHR5RmlsZUNvbnRlbnQpLnRvQmVGYWxzeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBmb3IgY29ycmVjdEZpbGVDb250ZW50JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGNvcnJlY3RGaWxlQ29udGVudCkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIHBha2FnZS5qc29uIGFzIGJvb2snLCAoKSA9PiB7XG4gICAgICBleHBlY3QocGFja2FnZUpzb25Cb29rKS50b0VxdWFsKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIHdyb25nIGZpbGUgY29udGVudCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChtYW55Qm9va0NvbnRlbnQpLnRvQmVGYWxzeSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgndGhlIGludmVydGVkIGluZGV4IG5vcm1hbGl6ZVRleHQgbWV0aG9kJywgKCkgPT4ge1xuICAgIGNvbnN0IHNhbXBsZVNlbnRlbmNlID0gJ0FsaWNlIGZhbGxzIGludG8gYSByYWJiaXQgaG9sZS4uJztcbiAgICBjb25zdCBub3JtYWxpemVUZXh0VGVzdCA9IEludmVydGVkSW5kZXgubm9ybWFsaXplVGV4dChzYW1wbGVTZW50ZW5jZSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiB0cnVlIGZvciBub3JtYWxpemVUZXh0VGVzdCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChub3JtYWxpemVUZXh0VGVzdCBpbnN0YW5jZW9mIEFycmF5KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxwaGFiZXRzIG9ubHknLCAoKSA9PiB7XG4gICAgICBleHBlY3Qobm9ybWFsaXplVGV4dFRlc3QpLnRvRXF1YWwoWydhbGljZScsXG4gICAgICAgICdmYWxscycsICdpbnRvJywgJ2EnLCAncmFiYml0JywgJ2hvbGUnXSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBjb3JyZWN0IGxlbmd0aCBvZiBhcnJheSBvZiB3b3JkcycsICgpID0+IHtcbiAgICAgIGV4cGVjdChub3JtYWxpemVUZXh0VGVzdC5sZW5ndGgpLnRvQmUoNik7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcImluZXJ0ZWRpbmRleFwiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidXNlciBjYW4gY3JlYXRlIHNlYXJjaCB0aHJvdWdoIGpzb24gZmlsZXNcIixcbiAgXCJtYWluXCI6IFwiaW5kZXguanNcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInRlc3RcIjogXCJrYXJtYSBzdGFydCBrYXJtYS5jb25mLmpzXCIsXG4gICAgXCJsaW50XCI6IFwiLi9ub2RlX21vZHVsZXMvLmJpbi9lc2xpbnQgcHVibGljL2pzLyouanNcIlxuICB9LFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRlbGEtY29mb3IvaW52ZXJ0ZWRJbmRleC5naXRcIlxuICB9LFxuICBcImF1dGhvclwiOiBcIk9mb3IgQ2hpbmVkdVwiLFxuICBcImxpY2Vuc2VcIjogXCJJU0NcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbmRlbGEtY29mb3IvaW52ZXJ0ZWRJbmRleC9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FuZGVsYS1jb2Zvci9pbnZlcnRlZEluZGV4I3JlYWRtZVwiLFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6IFwiXjYuMjIuMFwiLFxuICAgIFwiYmFiZWxpZnlcIjogXCJeNy4zLjBcIixcbiAgICBcImJyb3dzZXItc3luY1wiOiBcIl4yLjE4LjdcIixcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeMTQuMS4wXCIsXG4gICAgXCJjb3ZlcmFsbHNcIjogXCJeMi4xMi4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeMy4xNi4xXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLWFpcmJuYi1iYXNlXCI6IFwiXjExLjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNi4xMC4wXCIsXG4gICAgXCJndWxwXCI6IFwiXjMuOS4xXCIsXG4gICAgXCJqYXNtaW5lXCI6IFwiXjIuNS4zXCIsXG4gICAgXCJqYXNtaW5lLWNvcmVcIjogXCJeMi41LjJcIixcbiAgICBcImthcm1hXCI6IFwiXjEuNS4wXCIsXG4gICAgXCJrYXJtYS1jaHJvbWUtbGF1bmNoZXJcIjogXCJeMi4wLjBcIixcbiAgICBcImthcm1hLWNvdmVyYWdlXCI6IFwiXjEuMS4xXCIsXG4gICAgXCJrYXJtYS1jb3ZlcmFsbHNcIjogXCJeMS4xLjJcIixcbiAgICBcImthcm1hLWZpcmVmb3gtbGF1bmNoZXJcIjogXCJeMS4wLjFcIixcbiAgICBcImthcm1hLWphc21pbmVcIjogXCJeMS4xLjBcIixcbiAgICBcImthcm1hLXNwZWMtcmVwb3J0ZXJcIjogXCIwLjAuMzBcIixcbiAgICBcImthcm1hLXZlcmJvc2UtcmVwb3J0ZXJcIjogXCIwLjAuNVwiLFxuICAgIFwibm9kZW1vblwiOiBcIl4xLjExLjBcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCJeMS4xLjBcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJicm93c2VyLXN5bmNcIjogXCJeMi4xOC43XCIsXG4gICAgXCJjaGFpXCI6IFwiXjMuNS4wXCIsXG4gICAgXCJjb25uZWN0XCI6IFwiXjMuNS4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeMy4xNS4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLWFpcmJuYlwiOiBcIl4xNC4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWpzeC1hMTF5XCI6IFwiXjQuMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjYuOS4wXCIsXG4gICAgXCJleHByZXNzXCI6IFwiXjQuMTUuMVwiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjkuMVwiLFxuICAgIFwiamFzbWluZVwiOiBcIl4yLjUuM1wiLFxuICAgIFwic2VydmUtc3RhdGljXCI6IFwiXjEuMTEuMlwiLFxuICAgIFwic2VydmVyLXN0YXRpY1wiOiBcIl4xLjMuMFwiXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAgeyBcInRpdGxlXCI6IFwiTWFueSBjb250ZW50XCIsIFwidGV4dFwiOiBcIkFuIEludmVydGVkIEluZGV4IGlzIGFuIEluZGV4IERhdGEgU3RydWN0dXJlIHN0b3JpbmcgYSBtYXBwaW5nIGZyb20gY29udGVudCB0byBsb2NhdGlvblwiIH0sXG4gIHsgXCJ0aXRsZVwiOiBcIlNvbWUgY29udGVudFwiLCBcInRleHRcIjogXCJTbyBpZiB5b3VyIGNsaWVudC1zaWRlIGNvZGUgaXMgbG9jYXRlZCBpbiBhcHAvanMsIGNyZWF0ZSBhIGRpcmVjdG9yeSBjYWxsZWRcIiB9LFxuICB7IFwidGl0bGVcIjogXCJQb29yIGNvbnRlbnRcIiwgXCJ0ZXh0XCI6IFwiVXBsb2FkIHZhbGlkIGpzb24gYm9vayBmaWxlcyAodGhhdCBoYXZlIGEgdGV4dCBhbmQgdGl0bGUgcHJvcGVydHkpXCIgfSxcbiAgeyBcInRpdGxlXCI6IFwiTm9uZSBjb250ZW50XCIsIFwidGV4dFwiOiBcIiBaYXBwZXJcIn0sXG5dIl19
