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
      expect(packageJsonBook).toBeFalsy();
    });

    it('should return false wrong file content', function () {
      expect(manyBookContent).toBeFalsy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9lbXB0eS5qc29uIiwic3BlYy9pbnZlcnRlZC1pbmRleC10ZXN0LmpzIiwic3BlYy9saWtlUGFja2FnZS5qc29uIiwic3BlYy9tYW55Lmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDWEEsSUFBTSxnQkFBZ0IsSUFBSSxhQUFKLEVBQXRCOztBQUVBLElBQU0sT0FBTyxRQUFRLFFBQVIsQ0FBYjtBQUNBLElBQU0sT0FBTyxRQUFRLFFBQVIsQ0FBYjtBQUNBLElBQU0sUUFBUSxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQU0sY0FBYyxRQUFRLGVBQVIsQ0FBcEI7QUFDQSxJQUFNLE9BQU8sUUFBUSxRQUFSLENBQWI7O0FBRUEsU0FBUyw4QkFBVCxFQUF5QyxZQUFNO0FBQzdDLE1BQU0sU0FBUyxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsQ0FBZjtBQUNBLE1BQU0sVUFBVSxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFB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LE9BQWQsQ0FBc0IsS0FBdEIsQ0FBekI7QUFDQSxRQUFNLHFCQUFxQixjQUFjLE9BQWQsQ0FBc0IsS0FBSyxDQUFMLENBQXRCLENBQTNCO0FBQ0EsUUFBTSxrQkFBa0IsY0FBYyxPQUFkLENBQXNCLFdBQXRCLENBQXhCO0FBQ0EsUUFBTSxrQkFBa0IsY0FBYyxPQUFkLENBQXNCLElBQXRCLENBQXhCOztBQUVBLE9BQUcsNENBQUgsRUFBaUQsWUFBTTtBQUNyRCxhQUFPLGdCQUFQLEVBQXlCLFNBQXpCO0FBQ0QsS0FGRDs7QUFJQSxPQUFHLDJDQUFILEVBQWdELFlBQU07QUFDcEQsYUFBTyxrQkFBUCxFQUEyQixVQUEzQjtBQUNELEtBRkQ7O0FBSUEsT0FBRyw2Q0FBSCxFQUFrRCxZQUFNO0FBQ3RELGFBQU8sZUFBUCxFQUF3QixTQUF4QjtBQUNELEtBRkQ7O0FBSUEsT0FBRyx3Q0FBSCxFQUE2QyxZQUFNO0FBQ2pELGFBQU8sZUFBUCxFQUF3QixTQUF4QjtBQUNELEtBRkQ7QUFHRCxHQXJCRDtBQXNCRCxDQWxKRDs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9W1xuICAge1widGl0bGVcIjogXCJXaHkgUERQIGxvc3QgT25kbyDigJMgS2FzaGFtdVwiLFxuICAgIFwidGV4dFwiOlwiIFRoZSBzZW5hdG9yIGFsc28gY3J0aWNpc2VkIHRoZSBTZW5hdG9yIEFobWVkIE1ha2FyZmktbGVkIE5hdGlvbmFsIENhcmV0YWtlciBDb21taXR0ZWUgb2YgdGhlIHBhcnR5IG92ZXIgdGhlIHN0YXRlbWVudCBjcmVkaXRlZCB0byBpdHMgc3Bva2VzbWFuLCBQcmluY2UgRGF5byBBZGV5ZXllLCB3aGVyZSBoZSB0aHJlYXRlbmVkIHRvIHNhbmN0aW9uIHRob3NlIGluIHRoZSBjYW1wIG9mIFNlbmF0b3IgQWxpIE1vZHUgU2hlcmlmZi5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgQWtlcmVkb2x1IHJlYXBlZCBmcm9tIFBEUOKAmXMgbWlzdGFrZXNcIixcbiAgICBcInRleHRcIjpcIkZvciBPbHVzZWd1biBNaW1pa28sIHRoZSBvdXRnb2luZyBnb3Zlcm5vciBvZiBPbmRvIFN0YXRlLCBTYXR1cmRheSBnb3Zlcm5vcnNoaXAgZWxlY3Rpb24gd2FzIGxpa2UgYSB3YXIuIFRob3VnaCBoZSBoYWQgZm91Z2h0IG1hbnkgcG9saXRpY2FsIGJhdHRsZXMgYmVmb3JlLCBjb21pbmcgb3V0IHVuc2NhdGhlZCBpbiBhbG1vc3QgYWxsLCBoZSBzYXcgdGhlIGxhc3QgZWxlY3Rpb24gYXMgdGhlIG1vc3QgaW1wb3J0YW50IHBvbGl0aWNhbCBiYXR0bGUgaGUgbmVlZGVkIHRvIHdpbiBpbiBvcmRlciB0byBzYWZlZ3VhcmQgaGlzIHBvbGl0aWNhbCBmdXR1cmUuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IGNhbiBOaWdlcmlhIGN1cmIgYnV5aW5nIG9mIHZvdGVzIGR1cmluZyBlbGVjdGlvbnNcIixcbiAgICBcInRleHRcIjpcIlRoZXJlIGFyZSBlbGVjdG9yYWwgbGF3cyByZWd1bGF0aW5nIHN1Y2ggcHJhY3RpY2UuIEJ1dCB0aGVzZSBwcm92aXNpb25zIGFyZSBub3Qgc3VmZmljaWVudGx5IGVuZm9yY2VkLiBPdXIgZWxlY3Rpb25zIG91Z2h0IG5vdCB0byBiZSBhIHByb2R1Y3Qgb2YgY29uc3BpcmFjeSBkZWZpbmVkIGJ5IGNhc2gtYW5kLWNhcnJ5IGRlbW9jcmFjeS4gV2Ugc2hvdWxkIGxldCB0aGUgcG9wdWxhciB3aWxsIHRvIGJlIGZ1bGx5IGV4cHJlc3NlZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJUaGUgV2VhbHRoaWVzdCBQYXN0b3JzIGluIHRoZSBXb3JsZFwiLFxuICAgIFwidGV4dFwiOlwiTWFueSBtYXkgaGF2ZSB0aGVpciBkb3VidHMgYXMgdG8gd2hldGhlciB0aGVzZSB2ZXJ5IHJpY2ggcHJlYWNoZXJzIGFyZSBwcmUtb3JkYWluZWQgb3Igc2VsZi1wcm9jbGFpbWVkLCBidXQgb25lIHRoaW5nIGlzIGZvciBzdXJlLCBzcHJlYWRpbmcgdGhlIHdvcmQgaGFzIGdyZWF0bHkgaW1wYWN0ZWQgbm90IG9ubHkgdGhlIGVhcnMgd2hvIGhlYXIgaXQsIGJ1dCBhbHNvIHRoZSBiYW5rIGFjY291bnRzIG9mIHRoZSBtb3V0aHMgd2hvIHByZWFjaCBpdC4gT25lIGNhbiBzYXkgdGhlc2UgcGFzdG9ycyBhcmUgaW5kZWVkIOKAmGJsZXNzZWQu4oCZIEhlcmUgYXJlIHRoZSByaWNoZXN0IHBhc3RvcnMgaW4gdGhlIHdvcmxkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIk1peGVkIHJlYWN0aW9ucyBncmVldCBBa2VyZWRvbHXigJlzIHZpY3RvcnlcIixcbiAgICBcInRleHRcIjpcIiBKZWdlZGUsIHdobyBzcG9rZSB0byBqb3VybmFsaXN0cyBpbiBBa3VyZSwgdGhlIHN0YXRlIGNhcGl0YWwgb24gU3VuZGF5LCBuZWl0aGVyIGNvbW1lbmRlZCBub3IgY29uZGVtbmVkIHRoZSBjb25kdWN0IG9mIHRoZSBwb2xsLCBidXQgc2FpZCB0aGF0IGhpcyByZWFjdGlvbiBhYm91dCB0aGUgZWxlY3Rpb24gd291bGQgc29vbiBiZSBtYWRlIHB1YmxpYy4uXCJcblxufSxcbntcInRpdGxlXCI6IFwiV2h5IFBEUCBsb3N0IE9uZG8g4oCTIEthc2hhbXVcIixcbiAgICBcInRleHRcIjpcIiBUaGUgc2VuYXRvciBhbHNvIGNydGljaXNlZCB0aGUgU2VuYXRvciBBaG1lZCBNYWthcmZpLWxlZCBOYXRpb25hbCBDYXJldGFrZXIgQ29tbWl0dGVlIG9mIHRoZSBwYXJ0eSBvdmVyIHRoZSBzdGF0ZW1lbnQgY3JlZGl0ZWQgdG8gaXRzIHNwb2tlc21hbiwgUHJpbmNlIERheW8gQWRleWV5ZSwgd2hlcmUgaGUgdGhyZWF0ZW5lZCB0byBzYW5jdGlvbiB0aG9zZSBpbiB0aGUgY2FtcCBvZiBTZW5hdG9yIEFsaSBNb2R1IFNoZXJpZmYuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IEFrZXJlZG9sdSByZWFwZWQgZnJvbSBQRFDigJlzIG1pc3Rha2VzXCIsXG4gICAgXCJ0ZXh0XCI6XCJGb3IgT2x1c2VndW4gTWltaWtvLCB0aGUgb3V0Z29pbmcgZ292ZXJub3Igb2YgT25kbyBTdGF0ZSwgU2F0dXJkYXkgZ292ZXJub3JzaGlwIGVsZWN0aW9uIHdhcyBsaWtlIGEgd2FyLiBUaG91Z2ggaGUgaGFkIGZvdWdodCBtYW55IHBvbGl0aWNhbCBiYXR0bGVzIGJlZm9yZSwgY29taW5nIG91dCB1bnNjYXRoZWQgaW4gYWxtb3N0IGFsbCwgaGUgc2F3IHRoZSBsYXN0IGVsZWN0aW9uIGFzIHRoZSBtb3N0IGltcG9ydGFudCBwb2xpdGljYWwgYmF0dGxlIGhlIG5lZWRlZCB0byB3aW4gaW4gb3JkZXIgdG8gc2FmZWd1YXJkIGhpcyBwb2xpdGljYWwgZnV0dXJlLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBjYW4gTmlnZXJpYSBjdXJiIGJ1eWluZyBvZiB2b3RlcyBkdXJpbmcgZWxlY3Rpb25zXCIsXG4gICAgXCJ0ZXh0XCI6XCJUaGVyZSBhcmUgZWxlY3RvcmFsIGxhd3MgcmVndWxhdGluZyBzdWNoIHByYWN0aWNlLiBCdXQgdGhlc2UgcHJvdmlzaW9ucyBhcmUgbm90IHN1ZmZpY2llbnRseSBlbmZvcmNlZC4gT3VyIGVsZWN0aW9ucyBvdWdodCBub3QgdG8gYmUgYSBwcm9kdWN0IG9mIGNvbnNwaXJhY3kgZGVmaW5lZCBieSBjYXNoLWFuZC1jYXJyeSBkZW1vY3JhY3kuIFdlIHNob3VsZCBsZXQgdGhlIHBvcHVsYXIgd2lsbCB0byBiZSBmdWxseSBleHByZXNzZWQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiVGhlIFdlYWx0aGllc3QgUGFzdG9ycyBpbiB0aGUgV29ybGRcIixcbiAgICBcInRleHRcIjpcIk1hbnkgbWF5IGhhdmUgdGhlaXIgZG91YnRzIGFzIHRvIHdoZXRoZXIgdGhlc2UgdmVyeSByaWNoIHByZWFjaGVycyBhcmUgcHJlLW9yZGFpbmVkIG9yIHNlbGYtcHJvY2xhaW1lZCwgYnV0IG9uZSB0aGluZyBpcyBmb3Igc3VyZSwgc3ByZWFkaW5nIHRoZSB3b3JkIGhhcyBncmVhdGx5IGltcGFjdGVkIG5vdCBvbmx5IHRoZSBlYXJzIHdobyBoZWFyIGl0LCBidXQgYWxzbyB0aGUgYmFuayBhY2NvdW50cyBvZiB0aGUgbW91dGhzIHdobyBwcmVhY2ggaXQuIE9uZSBjYW4gc2F5IHRoZXNlIHBhc3RvcnMgYXJlIGluZGVlZCDigJhibGVzc2VkLuKAmSBIZXJlIGFyZSB0aGUgcmljaGVzdCBwYXN0b3JzIGluIHRoZSB3b3JsZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJNaXhlZCByZWFjdGlvbnMgZ3JlZXQgQWtlcmVkb2x14oCZcyB2aWN0b3J5XCIsXG4gICAgXCJ0ZXh0XCI6XCIgSmVnZWRlLCB3aG8gc3Bva2UgdG8gam91cm5hbGlzdHMgaW4gQWt1cmUsIHRoZSBzdGF0ZSBjYXBpdGFsIG9uIFN1bmRheSwgbmVpdGhlciBjb21tZW5kZWQgbm9yIGNvbmRlbW5lZCB0aGUgY29uZHVjdCBvZiB0aGUgcG9sbCwgYnV0IHNhaWQgdGhhdCBoaXMgcmVhY3Rpb24gYWJvdXQgdGhlIGVsZWN0aW9uIHdvdWxkIHNvb24gYmUgbWFkZSBwdWJsaWMuLlwiXG5cbn1cbl1cbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwidGl0bGVcIjogXCJBbGljZSBpbiBXb25kZXJsYW5kXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5cIixcbiAgICBcInRleHRcIjogXCJBbiB1bnVzdWFsIGFsbGlhbmNlIG9mIG1hbiwgZWxmLCBkd2FyZiwgd2l6YXJkIGFuZCBob2JiaXQgc2VlayB0byBkZXN0cm95IGEgcG93ZXJmdWwgcmluZy5cIlxuICB9XG5dXG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcIiBcIjogXCIgXCIsXG4gICAgXCIgXCI6IFwiIFwiXG4gIH0sXG5cbiAge1xuICAgIFwiIFwiOiBcIlwiLFxuICAgIFwiIFwiOiBcIiBcIlxuICB9XG5dXG4iLCJjb25zdCBpbnZlcnRlZEluZGV4ID0gbmV3IEludmVydGVkSW5kZXgoKTtcblxuY29uc3QgYm9vayA9IHJlcXVpcmUoJy4vYm9vaycpO1xuY29uc3QgTmV3cyA9IHJlcXVpcmUoJy4vTmV3cycpO1xuY29uc3QgZW1wdHkgPSByZXF1aXJlKCcuL2VtcHR5Jyk7XG5jb25zdCBsaWtlUGFja2FnZSA9IHJlcXVpcmUoJy4vbGlrZVBhY2thZ2UnKTtcbmNvbnN0IG1hbnkgPSByZXF1aXJlKCcuL21hbnknKTtcblxuZGVzY3JpYmUoJ0ludmVydGVkIGluZGV4IGNyZWF0ZSBtZXRob2QnLCAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGludmVydGVkSW5kZXguY3JlYXRlSW5kZXgoYm9vaywgJ2Jvb2snKTtcbiAgY29uc3QgcmVzdWx0MiA9IGludmVydGVkSW5kZXguY3JlYXRlSW5kZXgoTmV3cywgJ05ld3MnKTtcblxuICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgdHlwZW9mIHJlc3VsdCcsICgpID0+IHtcbiAgICBleHBlY3QocmVzdWx0IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogdHJ1ZSB9JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHQgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgfSkpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJlc3VsdCkudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgb2Y6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9XG4gICAgfSkpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdHQgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJlc3VsdDIpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfVxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHQgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJlc3VsdDIpLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBwYXJ0eTogeyAwOiB0cnVlLCA0OiB0cnVlIH1cbiAgICB9KSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdUaGUgaW52ZXJ0ZWQgaW5kZXggc2VhcmNoIG1ldGhvZCcsICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hGb3JBbGljZUluQWxsRmlsZXMgPSBpbnZlcnRlZEluZGV4XG4gICAgLnNlYXJjaEZpbGVzKFsnYWxpY2UnXSwgJ0FsbCcpO1xuICAgIGNvbnN0IHNlYXJjaEZvclBhcnR5SW5BbGxGaWxlcyA9IGludmVydGVkSW5kZXhcbiAgICAuc2VhcmNoRmlsZXMoWydwYXJ0eSddLCAnQWxsJyk7XG4gICAgY29uc3Qgc2VhcmNoRm9yQWxpY2VJbkJvb2sgPSBpbnZlcnRlZEluZGV4XG4gICAgLnNlYXJjaEZpbGVzKFsnYWxpY2UnXSwgJ2Jvb2snKTtcbiAgICBjb25zdCBzZWFyY2hGb3JQYXJ0eUluTmV3cyA9IGludmVydGVkSW5kZXhcbiAgICAuc2VhcmNoRmlsZXMoWydwYXJ0eSddLCAnTmV3cycpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzIHR5cGUgb2Ygc2VhcmNoIHJlc3VsdCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQWxsRmlsZXMgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoRm9yQWxpY2VJbkFsbEZpbGVzIHdpdGggYWxpY2U6IHsgMDogdHJ1ZSB9JyxcbiAgICAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoRm9yQWxpY2VJbkFsbEZpbGVzLmJvb2spLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogdHJ1ZSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaEZvckFsaWNlSW5BbGxGaWxlcyB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoRm9yQWxpY2VJbkFsbEZpbGVzLmJvb2spLm5vdFxuICAgICAgLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaHNlYXJjaEZvclBhcnR5SW5BbGxGaWxlcyB3aXRoIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfScsXG4gICAgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaEZvclBhcnR5SW5BbGxGaWxlcy5OZXdzKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hGb3JQYXJ0eUluQWxsRmlsZXMgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH0nLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoRm9yUGFydHlJbkFsbEZpbGVzLmJvb2spLm5vdFxuICAgICAgICAudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDE6IHRydWUgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyB0eXBlIG9mIHNlYXJjaFJlc3VsdDMnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoRm9yQWxpY2VJbkJvb2sgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hGb3JBbGljZUluQm9vayB3aXRoIGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JBbGljZUluQm9vay5ib29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hGb3JBbGljZUluQm9vayB3aXRoIGFsaWNlOiB7IDA6IGZhbHNlIH0nLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoRm9yQWxpY2VJbkJvb2suYm9vaykubm90LnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBhbGljZTogeyAwOiBmYWxzZSB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzeXBlIG9mIHNlYXJjaFJlc3VsdDQnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoRm9yUGFydHlJbk5ld3MgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hGb3JQYXJ0eUluTmV3cyB3aXRoICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2VhcmNoRm9yUGFydHlJbk5ld3MuTmV3cykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgIHBhcnR5OiB7IDA6IHRydWUsIDU6IHRydWUgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3RoZSBpbnZlcnRlZCBpbmRleCBnZXRJbmRleCBtZXRob2QnLCAoKSA9PiB7XG4gICAgY29uc3QgZ2V0Q29ycmVjdEJvb2tJbmRleCA9IGludmVydGVkSW5kZXguZ2V0SW5kZXgoJ2Jvb2snKTtcbiAgICBjb25zdCBnZXRFbXB0eUluZGV4ID0gaW52ZXJ0ZWRJbmRleC5nZXRJbmRleCgpO1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIG9iamVjdCBhcyB0eXBlb2YgZ2V0Q29ycmVjdEJvb2tJbmRleCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChnZXRDb3JyZWN0Qm9va0luZGV4IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgZ2V0RW1wdHlJbmRleCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChnZXRFbXB0eUluZGV4KS50b0JlRmFsc3koKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3RoZSBpbnZlcnRlZCBpbmRleCB2YWxpZGF0ZSBtZXRob2QnLCAoKSA9PiB7XG4gICAgY29uc3QgZW1wdHlGaWxlQ29udGVudCA9IGludmVydGVkSW5kZXguaXNWYWxpZChlbXB0eSk7XG4gICAgY29uc3QgY29ycmVjdEZpbGVDb250ZW50ID0gaW52ZXJ0ZWRJbmRleC5pc1ZhbGlkKGJvb2tbMF0pO1xuICAgIGNvbnN0IHBhY2thZ2VKc29uQm9vayA9IGludmVydGVkSW5kZXguaXNWYWxpZChsaWtlUGFja2FnZSk7XG4gICAgY29uc3QgbWFueUJvb2tDb250ZW50ID0gaW52ZXJ0ZWRJbmRleC5pc1ZhbGlkKG1hbnkpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIGFuIGVtcHR5IGpzb24gZmlsZScsICgpID0+IHtcbiAgICAgIGV4cGVjdChlbXB0eUZpbGVDb250ZW50KS50b0JlRmFsc3koKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgZm9yIGNvcnJlY3RGaWxlQ29udGVudCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChjb3JyZWN0RmlsZUNvbnRlbnQpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGZvciBwYWthZ2UuanNvbiBhcyBib29rJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHBhY2thZ2VKc29uQm9vaykudG9CZUZhbHN5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSB3cm9uZyBmaWxlIGNvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBleHBlY3QobWFueUJvb2tDb250ZW50KS50b0JlRmFsc3koKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwiaW5lcnRlZGluZGV4XCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMC4wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ1c2VyIGNhbiBjcmVhdGUgc2VhcmNoIHRocm91Z2gganNvbiBmaWxlc1wiLFxuICBcIm1haW5cIjogXCJpbmRleC5qc1wiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwidGVzdFwiOiBcImthcm1hIHN0YXJ0IGthcm1hLmNvbmYuanNcIixcbiAgICBcImxpbnRcIjogXCIuL25vZGVfbW9kdWxlcy8uYmluL2VzbGludCBwdWJsaWMvanMvKi5qc1wiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2FuZGVsYS1jb2Zvci9pbnZlcnRlZEluZGV4LmdpdFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IFwiT2ZvciBDaGluZWR1XCIsXG4gIFwibGljZW5zZVwiOiBcIklTQ1wiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FuZGVsYS1jb2Zvci9pbnZlcnRlZEluZGV4L2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYW5kZWxhLWNvZm9yL2ludmVydGVkSW5kZXgjcmVhZG1lXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJhYmVsLXByZXNldC1lczIwMTVcIjogXCJeNi4yMi4wXCIsXG4gICAgXCJiYWJlbGlmeVwiOiBcIl43LjMuMFwiLFxuICAgIFwiYnJvd3Nlci1zeW5jXCI6IFwiXjIuMTguN1wiLFxuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl4xNC4xLjBcIixcbiAgICBcImNvdmVyYWxsc1wiOiBcIl4yLjEyLjBcIixcbiAgICBcImVzbGludFwiOiBcIl4zLjE2LjFcIixcbiAgICBcImVzbGludC1jb25maWctYWlyYm5iLWJhc2VcIjogXCJeMTEuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl42LjEwLjBcIixcbiAgICBcImd1bHBcIjogXCJeMy45LjFcIixcbiAgICBcImphc21pbmVcIjogXCJeMi41LjNcIixcbiAgICBcImphc21pbmUtY29yZVwiOiBcIl4yLjUuMlwiLFxuICAgIFwia2FybWFcIjogXCJeMS41LjBcIixcbiAgICBcImthcm1hLWNocm9tZS1sYXVuY2hlclwiOiBcIl4yLjAuMFwiLFxuICAgIFwia2FybWEtY292ZXJhZ2VcIjogXCJeMS4xLjFcIixcbiAgICBcImthcm1hLWNvdmVyYWxsc1wiOiBcIl4xLjEuMlwiLFxuICAgIFwia2FybWEtZmlyZWZveC1sYXVuY2hlclwiOiBcIl4xLjAuMVwiLFxuICAgIFwia2FybWEtamFzbWluZVwiOiBcIl4xLjEuMFwiLFxuICAgIFwia2FybWEtc3BlYy1yZXBvcnRlclwiOiBcIjAuMC4zMFwiLFxuICAgIFwia2FybWEtdmVyYm9zZS1yZXBvcnRlclwiOiBcIjAuMC41XCIsXG4gICAgXCJub2RlbW9uXCI6IFwiXjEuMTEuMFwiLFxuICAgIFwidmlueWwtc291cmNlLXN0cmVhbVwiOiBcIl4xLjEuMFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJyb3dzZXItc3luY1wiOiBcIl4yLjE4LjdcIixcbiAgICBcImNoYWlcIjogXCJeMy41LjBcIixcbiAgICBcImNvbm5lY3RcIjogXCJeMy41LjBcIixcbiAgICBcImVzbGludFwiOiBcIl4zLjE1LjBcIixcbiAgICBcImVzbGludC1jb25maWctYWlyYm5iXCI6IFwiXjE0LjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tanN4LWExMXlcIjogXCJeNC4wLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNi45LjBcIixcbiAgICBcImV4cHJlc3NcIjogXCJeNC4xNS4xXCIsXG4gICAgXCJndWxwXCI6IFwiXjMuOS4xXCIsXG4gICAgXCJqYXNtaW5lXCI6IFwiXjIuNS4zXCIsXG4gICAgXCJzZXJ2ZS1zdGF0aWNcIjogXCJeMS4xMS4yXCIsXG4gICAgXCJzZXJ2ZXItc3RhdGljXCI6IFwiXjEuMy4wXCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7IFwidGl0bGVcIjogXCJNYW55IGNvbnRlbnRcIiwgXCJ0ZXh0XCI6IFwiQW4gSW52ZXJ0ZWQgSW5kZXggaXMgYW4gSW5kZXggRGF0YSBTdHJ1Y3R1cmUgc3RvcmluZyBhIG1hcHBpbmcgZnJvbSBjb250ZW50IHRvIGxvY2F0aW9uXCIgfSxcbiAgeyBcInRpdGxlXCI6IFwiU29tZSBjb250ZW50XCIsIFwidGV4dFwiOiBcIlNvIGlmIHlvdXIgY2xpZW50LXNpZGUgY29kZSBpcyBsb2NhdGVkIGluIGFwcC9qcywgY3JlYXRlIGEgZGlyZWN0b3J5IGNhbGxlZFwiIH0sXG4gIHsgXCJ0aXRsZVwiOiBcIlBvb3IgY29udGVudFwiLCBcInRleHRcIjogXCJVcGxvYWQgdmFsaWQganNvbiBib29rIGZpbGVzICh0aGF0IGhhdmUgYSB0ZXh0IGFuZCB0aXRsZSBwcm9wZXJ0eSlcIiB9LFxuICB7IFwidGl0bGVcIjogXCJOb25lIGNvbnRlbnRcIiwgXCJ0ZXh0XCI6IFwiIFphcHBlclwifSxcbl0iXX0=
