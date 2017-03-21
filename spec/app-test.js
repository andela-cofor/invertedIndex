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
      console.log(packageJsonBook);
      expect(packageJsonBook).toEqual(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL05ld3MuanNvbiIsInNwZWMvYm9vay5qc29uIiwic3BlYy9lbXB0eS5qc29uIiwic3BlYy9pbnZlcnRlZC1pbmRleC10ZXN0LmpzIiwic3BlYy9saWtlUGFja2FnZS5qc29uIiwic3BlYy9tYW55Lmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDWEEsSUFBTSxnQkFBZ0IsSUFBSSxhQUFKLEVBQXRCOztBQUVBLElBQU0sT0FBTyxRQUFRLFFBQVIsQ0FBYjtBQUNBLElBQU0sT0FBTyxRQUFRLFFBQVIsQ0FBYjtBQUNBLElBQU0sUUFBUSxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQU0sY0FBYyxRQUFRLGVBQVIsQ0FBcEI7QUFDQSxJQUFNLE9BQU8sUUFBUSxRQUFSLENBQWI7O0FBRUEsU0FBUyw4QkFBVCxFQUF5QyxZQUFNO0FBQzdDLE1BQU0sU0FBUyxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsQ0FBZjtBQUNBLE1BQU0sVUFBVSxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsQ0FBaEI7O0FBRUEsS0FBRyx1Q0FBSCxFQUE0QyxZQUFNO0FBQ2hELFdBQU8sa0JBQWtCLE1BQXpCLEVBQWlDLFVBQWpDO0FBQ0QsR0FGRDs7QUFJQSxLQUFHLDZDQUFILEVBQWtELFlBQU07QUFDdEQsV0FBTyxNQUFQLEVBQWUsT0FBZixDQUF1QixRQUFRLGdCQUFSLENBQXlCO0FBQzlDLGFBQU8sRUFBRSxHQUFHLElBQUw7QUFEdUMsS0FBekIsQ0FBdkI7QUFHRCxHQUpEOztBQU1BLEtBQUcsOENBQUgsRUFBbUQsWUFBTTtBQUN2RCxXQUFPLE1BQVAsRUFBZSxHQUFmLENBQW1CLE9BQW5CLENBQTJCLFFBQVEsZ0JBQVIsQ0FBeUI7QUFDbEQsYUFBTyxFQUFFLEdBQUcsS0FBTDtBQUQyQyxLQUF6QixDQUEzQjtBQUdELEdBSkQ7O0FBTUEsS0FBRyw4Q0FBSCxFQUFtRCxZQUFNO0FBQ3ZELFdBQU8sTUFBUCxFQUFlLE9BQWYsQ0FBdUIsUUFBUSxnQkFBUixDQUF5QjtBQUM5QyxVQUFJLEVBQUUsR0FBRyxJQUFMLEVBQVcsR0FBRyxJQUFkO0FBRDBDLEtBQXpCLENBQXZCO0FBR0QsR0FKRDs7QUFNQSxLQUFHLHVEQUFILEVBQTRELFlBQU07QUFDaEUsV0FBTyxPQUFQLEVBQWdCLE9BQWhCLENBQXdCLFFBQVEsZ0JBQVIsQ0FBeUI7QUFDL0MsYUFBTyxFQUFFLEdBQUcsSUFBTCxFQUFXLEdBQUcsSUFBZDtBQUR3QyxLQUF6QixDQUF4QjtBQUdELEdBSkQ7O0FBTUEsS0FBRyxzREFBSCxFQUEyRCxZQUFNO0FBQy9ELFdBQU8sT0FBUCxFQUFnQixHQUFoQixDQUFvQixPQUFwQixDQUE0QixRQUFRLGdCQUFSLENBQXlCO0FBQ25ELGFBQU8sRUFBRSxHQUFHLElBQUwsRUFBVyxHQUFHLElBQWQ7QUFENEMsS0FBekIsQ0FBNUI7QUFHRCxHQUpEOztBQU1BLFdBQVMsa0NBQVQsRUFBNkMsWUFBTTtBQUNqRCxRQUFNLDJCQUEyQixjQUNoQyxXQURnQyxDQUNwQixDQUFDLE9BQUQsQ0FEb0IsRUFDVCxLQURTLENBQWpDO0FBRUEsUUFBTSwyQkFBMkIsY0FDaEMsV0FEZ0MsQ0FDcEIsQ0FBQyxPQUFELENBRG9CLEVBQ1QsS0FEUyxDQUFqQztBQUVBLFFBQU0sdUJBQXVCLGNBQzVCLFdBRDRCLENBQ2hCLENBQUMsT0FBRCxDQURnQixFQUNMLE1BREssQ0FBN0I7QUFFQSxRQUFNLHVCQUF1QixjQUM1QixXQUQ0QixDQUNoQixDQUFDLE9BQUQsQ0FEZ0IsRUFDTCxNQURLLENBQTdCOztBQUdBLE9BQUcsK0NBQUgsRUFBb0QsWUFBTTtBQUN4RCxhQUFPLG9DQUFvQyxNQUEzQyxFQUFtRCxVQUFuRDtBQUNELEtBRkQ7O0FBSUEsT0FBRywrREFBSCxFQUNBLFlBQU07QUFDSixhQUFPLHlCQUF5QixJQUFoQyxFQUFzQyxPQUF0QyxDQUE4QyxRQUFRLGdCQUFSLENBQXlCO0FBQ3JFLGVBQU8sRUFBRSxHQUFHLElBQUw7QUFEOEQsT0FBekIsQ0FBOUM7QUFHRCxLQUxEOztBQU9BLE9BQUcsZ0VBQUgsRUFBcUUsWUFBTTtBQUN6RSxhQUFPLHlCQUF5QixJQUFoQyxFQUFzQyxHQUF0QyxDQUNDLE9BREQsQ0FDUyxRQUFRLGdCQUFSLENBQXlCO0FBQ2hDLGVBQU8sRUFBRSxHQUFHLEtBQUw7QUFEeUIsT0FBekIsQ0FEVDtBQUlELEtBTEQ7O0FBT0EsT0FBRyx1RUFBSCxFQUNBLFlBQU07QUFDSixhQUFPLHlCQUF5QixJQUFoQyxFQUFzQyxPQUF0QyxDQUE4QyxRQUFRLGdCQUFSLENBQXlCO0FBQ3JFLGVBQU8sRUFBRSxHQUFHLElBQUwsRUFBVyxHQUFHLElBQWQ7QUFEOEQsT0FBekIsQ0FBOUM7QUFHRCxLQUxEOztBQU9BLE9BQUcsd0VBQUgsRUFDRSxZQUFNO0FBQ0osYUFBTyx5QkFBeUIsSUFBaEMsRUFBc0MsR0FBdEMsQ0FDQyxPQURELENBQ1MsUUFBUSxnQkFBUixDQUF5QjtBQUNoQyxlQUFPLEVBQUUsR0FBRyxJQUFMLEVBQVcsR0FBRyxJQUFkO0FBRHlCLE9BQXpCLENBRFQ7QUFJRCxLQU5IOztBQVFBLE9BQUcsK0NBQUgsRUFDRSxZQUFNO0FBQ0osYUFBTyxnQ0FBZ0MsTUFBdkMsRUFBK0MsVUFBL0M7QUFDRCxLQUhIOztBQUtBLE9BQUcsMkRBQUgsRUFBZ0UsWUFBTTtBQUNwRSxhQUFPLHFCQUFxQixJQUE1QixFQUFrQyxPQUFsQyxDQUEwQyxRQUFRLGdCQUFSLENBQXlCO0FBQ2pFLGVBQU8sRUFBRSxHQUFHLElBQUw7QUFEMEQsT0FBekIsQ0FBMUM7QUFHRCxLQUpEOztBQU1BLE9BQUcsNERBQUgsRUFDRSxZQUFNO0FBQ0osYUFBTyxxQkFBcUIsSUFBNUIsRUFBa0MsR0FBbEMsQ0FBc0MsT0FBdEMsQ0FBOEMsUUFBUSxnQkFBUixDQUF5QjtBQUNyRSxlQUFPLEVBQUUsR0FBRyxLQUFMO0FBRDhELE9BQXpCLENBQTlDO0FBR0QsS0FMSDs7QUFPQSxPQUFHLDZDQUFILEVBQ0UsWUFBTTtBQUNKLGFBQU8sZ0NBQWdDLE1BQXZDLEVBQStDLFVBQS9DO0FBQ0QsS0FISDs7QUFLQSxPQUFHLHFFQUFILEVBQ0UsWUFBTTtBQUNKLGFBQU8scUJBQXFCLElBQTVCLEVBQWtDLE9BQWxDLENBQTBDLFFBQVEsZ0JBQVIsQ0FBeUI7QUFDakUsZUFBTyxFQUFFLEdBQUcsSUFBTCxFQUFXLEdBQUcsSUFBZDtBQUQwRCxPQUF6QixDQUExQztBQUdELEtBTEg7QUFNRCxHQXhFRDs7QUEwRUEsV0FBUyxvQ0FBVCxFQUErQyxZQUFNO0FBQ25ELFFBQU0sc0JBQXNCLGNBQWMsUUFBZCxDQUF1QixNQUF2QixDQUE1QjtBQUNBLFFBQU0sZ0JBQWdCLGNBQWMsUUFBZCxFQUF0QjtBQUNBLE9BQUcsb0RBQUgsRUFBeUQsWUFBTTtBQUM3RCxhQUFPLCtCQUErQixNQUF0QyxFQUE4QyxVQUE5QztBQUNELEtBRkQ7O0FBSUEsT0FBRyx1Q0FBSCxFQUE0QyxZQUFNO0FBQ2hELGFBQU8sYUFBUCxFQUFzQixTQUF0QjtBQUNELEtBRkQ7QUFHRCxHQVZEOztBQVlBLFdBQVMsb0NBQVQsRUFBK0MsWUFBTTtBQUNuRCxRQUFNLG1CQUFtQixjQUFjLE9BQWQsQ0FBc0IsS0FBdEIsQ0FBekI7QUFDQSxRQUFNLHFCQUFxQixjQUFjLE9BQWQsQ0FBc0IsS0FBSyxDQUFMLENBQXRCLENBQTNCO0FBQ0EsUUFBTSxrQkFBa0IsY0FBYyxPQUFkLENBQXNCLFdBQXRCLENBQXhCO0FBQ0EsUUFBTSxrQkFBa0IsY0FBYyxPQUFkLENBQXNCLElBQXRCLENBQXhCOztBQUVBLE9BQUcsNENBQUgsRUFBaUQsWUFBTTtBQUNyRCxhQUFPLGdCQUFQLEVBQXlCLFNBQXpCO0FBQ0QsS0FGRDs7QUFJQSxPQUFHLDJDQUFILEVBQWdELFlBQU07QUFDcEQsYUFBTyxrQkFBUCxFQUEyQixVQUEzQjtBQUNELEtBRkQ7O0FBSUEsT0FBRyw2Q0FBSCxFQUFrRCxZQUFNO0FBQ3RELGNBQVEsR0FBUixDQUFZLGVBQVo7QUFDQSxhQUFPLGVBQVAsRUFBd0IsT0FBeEIsQ0FBZ0MsS0FBaEM7QUFDRCxLQUhEOztBQUtBLE9BQUcsd0NBQUgsRUFBNkMsWUFBTTtBQUNqRCxhQUFPLGVBQVAsRUFBd0IsU0FBeEI7QUFDRCxLQUZEO0FBR0QsR0F0QkQ7QUF1QkQsQ0FuSkQ7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPVtcbiAgIHtcInRpdGxlXCI6IFwiV2h5IFBEUCBsb3N0IE9uZG8g4oCTIEthc2hhbXVcIixcbiAgICBcInRleHRcIjpcIiBUaGUgc2VuYXRvciBhbHNvIGNydGljaXNlZCB0aGUgU2VuYXRvciBBaG1lZCBNYWthcmZpLWxlZCBOYXRpb25hbCBDYXJldGFrZXIgQ29tbWl0dGVlIG9mIHRoZSBwYXJ0eSBvdmVyIHRoZSBzdGF0ZW1lbnQgY3JlZGl0ZWQgdG8gaXRzIHNwb2tlc21hbiwgUHJpbmNlIERheW8gQWRleWV5ZSwgd2hlcmUgaGUgdGhyZWF0ZW5lZCB0byBzYW5jdGlvbiB0aG9zZSBpbiB0aGUgY2FtcCBvZiBTZW5hdG9yIEFsaSBNb2R1IFNoZXJpZmYuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiSG93IEFrZXJlZG9sdSByZWFwZWQgZnJvbSBQRFDigJlzIG1pc3Rha2VzXCIsXG4gICAgXCJ0ZXh0XCI6XCJGb3IgT2x1c2VndW4gTWltaWtvLCB0aGUgb3V0Z29pbmcgZ292ZXJub3Igb2YgT25kbyBTdGF0ZSwgU2F0dXJkYXkgZ292ZXJub3JzaGlwIGVsZWN0aW9uIHdhcyBsaWtlIGEgd2FyLiBUaG91Z2ggaGUgaGFkIGZvdWdodCBtYW55IHBvbGl0aWNhbCBiYXR0bGVzIGJlZm9yZSwgY29taW5nIG91dCB1bnNjYXRoZWQgaW4gYWxtb3N0IGFsbCwgaGUgc2F3IHRoZSBsYXN0IGVsZWN0aW9uIGFzIHRoZSBtb3N0IGltcG9ydGFudCBwb2xpdGljYWwgYmF0dGxlIGhlIG5lZWRlZCB0byB3aW4gaW4gb3JkZXIgdG8gc2FmZWd1YXJkIGhpcyBwb2xpdGljYWwgZnV0dXJlLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBjYW4gTmlnZXJpYSBjdXJiIGJ1eWluZyBvZiB2b3RlcyBkdXJpbmcgZWxlY3Rpb25zXCIsXG4gICAgXCJ0ZXh0XCI6XCJUaGVyZSBhcmUgZWxlY3RvcmFsIGxhd3MgcmVndWxhdGluZyBzdWNoIHByYWN0aWNlLiBCdXQgdGhlc2UgcHJvdmlzaW9ucyBhcmUgbm90IHN1ZmZpY2llbnRseSBlbmZvcmNlZC4gT3VyIGVsZWN0aW9ucyBvdWdodCBub3QgdG8gYmUgYSBwcm9kdWN0IG9mIGNvbnNwaXJhY3kgZGVmaW5lZCBieSBjYXNoLWFuZC1jYXJyeSBkZW1vY3JhY3kuIFdlIHNob3VsZCBsZXQgdGhlIHBvcHVsYXIgd2lsbCB0byBiZSBmdWxseSBleHByZXNzZWQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiVGhlIFdlYWx0aGllc3QgUGFzdG9ycyBpbiB0aGUgV29ybGRcIixcbiAgICBcInRleHRcIjpcIk1hbnkgbWF5IGhhdmUgdGhlaXIgZG91YnRzIGFzIHRvIHdoZXRoZXIgdGhlc2UgdmVyeSByaWNoIHByZWFjaGVycyBhcmUgcHJlLW9yZGFpbmVkIG9yIHNlbGYtcHJvY2xhaW1lZCwgYnV0IG9uZSB0aGluZyBpcyBmb3Igc3VyZSwgc3ByZWFkaW5nIHRoZSB3b3JkIGhhcyBncmVhdGx5IGltcGFjdGVkIG5vdCBvbmx5IHRoZSBlYXJzIHdobyBoZWFyIGl0LCBidXQgYWxzbyB0aGUgYmFuayBhY2NvdW50cyBvZiB0aGUgbW91dGhzIHdobyBwcmVhY2ggaXQuIE9uZSBjYW4gc2F5IHRoZXNlIHBhc3RvcnMgYXJlIGluZGVlZCDigJhibGVzc2VkLuKAmSBIZXJlIGFyZSB0aGUgcmljaGVzdCBwYXN0b3JzIGluIHRoZSB3b3JsZC5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJNaXhlZCByZWFjdGlvbnMgZ3JlZXQgQWtlcmVkb2x14oCZcyB2aWN0b3J5XCIsXG4gICAgXCJ0ZXh0XCI6XCIgSmVnZWRlLCB3aG8gc3Bva2UgdG8gam91cm5hbGlzdHMgaW4gQWt1cmUsIHRoZSBzdGF0ZSBjYXBpdGFsIG9uIFN1bmRheSwgbmVpdGhlciBjb21tZW5kZWQgbm9yIGNvbmRlbW5lZCB0aGUgY29uZHVjdCBvZiB0aGUgcG9sbCwgYnV0IHNhaWQgdGhhdCBoaXMgcmVhY3Rpb24gYWJvdXQgdGhlIGVsZWN0aW9uIHdvdWxkIHNvb24gYmUgbWFkZSBwdWJsaWMuLlwiXG5cbn0sXG57XCJ0aXRsZVwiOiBcIldoeSBQRFAgbG9zdCBPbmRvIOKAkyBLYXNoYW11XCIsXG4gICAgXCJ0ZXh0XCI6XCIgVGhlIHNlbmF0b3IgYWxzbyBjcnRpY2lzZWQgdGhlIFNlbmF0b3IgQWhtZWQgTWFrYXJmaS1sZWQgTmF0aW9uYWwgQ2FyZXRha2VyIENvbW1pdHRlZSBvZiB0aGUgcGFydHkgb3ZlciB0aGUgc3RhdGVtZW50IGNyZWRpdGVkIHRvIGl0cyBzcG9rZXNtYW4sIFByaW5jZSBEYXlvIEFkZXlleWUsIHdoZXJlIGhlIHRocmVhdGVuZWQgdG8gc2FuY3Rpb24gdGhvc2UgaW4gdGhlIGNhbXAgb2YgU2VuYXRvciBBbGkgTW9kdSBTaGVyaWZmLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIkhvdyBBa2VyZWRvbHUgcmVhcGVkIGZyb20gUERQ4oCZcyBtaXN0YWtlc1wiLFxuICAgIFwidGV4dFwiOlwiRm9yIE9sdXNlZ3VuIE1pbWlrbywgdGhlIG91dGdvaW5nIGdvdmVybm9yIG9mIE9uZG8gU3RhdGUsIFNhdHVyZGF5IGdvdmVybm9yc2hpcCBlbGVjdGlvbiB3YXMgbGlrZSBhIHdhci4gVGhvdWdoIGhlIGhhZCBmb3VnaHQgbWFueSBwb2xpdGljYWwgYmF0dGxlcyBiZWZvcmUsIGNvbWluZyBvdXQgdW5zY2F0aGVkIGluIGFsbW9zdCBhbGwsIGhlIHNhdyB0aGUgbGFzdCBlbGVjdGlvbiBhcyB0aGUgbW9zdCBpbXBvcnRhbnQgcG9saXRpY2FsIGJhdHRsZSBoZSBuZWVkZWQgdG8gd2luIGluIG9yZGVyIHRvIHNhZmVndWFyZCBoaXMgcG9saXRpY2FsIGZ1dHVyZS5cIlxuXG59LFxuXG4ge1widGl0bGVcIjogXCJIb3cgY2FuIE5pZ2VyaWEgY3VyYiBidXlpbmcgb2Ygdm90ZXMgZHVyaW5nIGVsZWN0aW9uc1wiLFxuICAgIFwidGV4dFwiOlwiVGhlcmUgYXJlIGVsZWN0b3JhbCBsYXdzIHJlZ3VsYXRpbmcgc3VjaCBwcmFjdGljZS4gQnV0IHRoZXNlIHByb3Zpc2lvbnMgYXJlIG5vdCBzdWZmaWNpZW50bHkgZW5mb3JjZWQuIE91ciBlbGVjdGlvbnMgb3VnaHQgbm90IHRvIGJlIGEgcHJvZHVjdCBvZiBjb25zcGlyYWN5IGRlZmluZWQgYnkgY2FzaC1hbmQtY2FycnkgZGVtb2NyYWN5LiBXZSBzaG91bGQgbGV0IHRoZSBwb3B1bGFyIHdpbGwgdG8gYmUgZnVsbHkgZXhwcmVzc2VkLlwiXG5cbn0sXG5cbiB7XCJ0aXRsZVwiOiBcIlRoZSBXZWFsdGhpZXN0IFBhc3RvcnMgaW4gdGhlIFdvcmxkXCIsXG4gICAgXCJ0ZXh0XCI6XCJNYW55IG1heSBoYXZlIHRoZWlyIGRvdWJ0cyBhcyB0byB3aGV0aGVyIHRoZXNlIHZlcnkgcmljaCBwcmVhY2hlcnMgYXJlIHByZS1vcmRhaW5lZCBvciBzZWxmLXByb2NsYWltZWQsIGJ1dCBvbmUgdGhpbmcgaXMgZm9yIHN1cmUsIHNwcmVhZGluZyB0aGUgd29yZCBoYXMgZ3JlYXRseSBpbXBhY3RlZCBub3Qgb25seSB0aGUgZWFycyB3aG8gaGVhciBpdCwgYnV0IGFsc28gdGhlIGJhbmsgYWNjb3VudHMgb2YgdGhlIG1vdXRocyB3aG8gcHJlYWNoIGl0LiBPbmUgY2FuIHNheSB0aGVzZSBwYXN0b3JzIGFyZSBpbmRlZWQg4oCYYmxlc3NlZC7igJkgSGVyZSBhcmUgdGhlIHJpY2hlc3QgcGFzdG9ycyBpbiB0aGUgd29ybGQuXCJcblxufSxcblxuIHtcInRpdGxlXCI6IFwiTWl4ZWQgcmVhY3Rpb25zIGdyZWV0IEFrZXJlZG9sdeKAmXMgdmljdG9yeVwiLFxuICAgIFwidGV4dFwiOlwiIEplZ2VkZSwgd2hvIHNwb2tlIHRvIGpvdXJuYWxpc3RzIGluIEFrdXJlLCB0aGUgc3RhdGUgY2FwaXRhbCBvbiBTdW5kYXksIG5laXRoZXIgY29tbWVuZGVkIG5vciBjb25kZW1uZWQgdGhlIGNvbmR1Y3Qgb2YgdGhlIHBvbGwsIGJ1dCBzYWlkIHRoYXQgaGlzIHJlYWN0aW9uIGFib3V0IHRoZSBlbGVjdGlvbiB3b3VsZCBzb29uIGJlIG1hZGUgcHVibGljLi5cIlxuXG59XG5dXG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiQWxpY2UgaW4gV29uZGVybGFuZFwiLFxuICAgIFwidGV4dFwiOiBcIkFsaWNlIGZhbGxzIGludG8gYSByYWJiaXQgaG9sZSBhbmQgZW50ZXJzIGEgd29ybGQgZnVsbCBvZiBpbWFnaW5hdGlvbi5cIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOiBcIlRoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcbiAgfVxuXVxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCIgXCI6IFwiIFwiLFxuICAgIFwiIFwiOiBcIiBcIlxuICB9LFxuXG4gIHtcbiAgICBcIiBcIjogXCJcIixcbiAgICBcIiBcIjogXCIgXCJcbiAgfVxuXVxuIiwiY29uc3QgaW52ZXJ0ZWRJbmRleCA9IG5ldyBJbnZlcnRlZEluZGV4KCk7XG5cbmNvbnN0IGJvb2sgPSByZXF1aXJlKCcuL2Jvb2snKTtcbmNvbnN0IE5ld3MgPSByZXF1aXJlKCcuL05ld3MnKTtcbmNvbnN0IGVtcHR5ID0gcmVxdWlyZSgnLi9lbXB0eScpO1xuY29uc3QgbGlrZVBhY2thZ2UgPSByZXF1aXJlKCcuL2xpa2VQYWNrYWdlJyk7XG5jb25zdCBtYW55ID0gcmVxdWlyZSgnLi9tYW55Jyk7XG5cbmRlc2NyaWJlKCdJbnZlcnRlZCBpbmRleCBjcmVhdGUgbWV0aG9kJywgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBpbnZlcnRlZEluZGV4LmNyZWF0ZUluZGV4KGJvb2ssICdib29rJyk7XG4gIGNvbnN0IHJlc3VsdDIgPSBpbnZlcnRlZEluZGV4LmNyZWF0ZUluZGV4KE5ld3MsICdOZXdzJyk7XG5cbiAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGFzIHR5cGVvZiByZXN1bHQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJlc3VsdCBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG1hdGNoIHJlc3VsdCB3aXRoIGFsaWNlOiB7IDA6IHRydWUgfScsICgpID0+IHtcbiAgICBleHBlY3QocmVzdWx0KS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICB9KSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggYWxpY2U6IHsgMDogZmFsc2UgfScsICgpID0+IHtcbiAgICBleHBlY3QocmVzdWx0KS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHQgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgIG9mOiB7IDA6IHRydWUsIDE6IHRydWUgfVxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBtYXRjaCByZXN1bHR0IHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXN1bHQyKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICB9KSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbWF0Y2ggcmVzdWx0IHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXN1bHQyKS5ub3QudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgcGFydHk6IHsgMDogdHJ1ZSwgNDogdHJ1ZSB9XG4gICAgfSkpO1xuICB9KTtcblxuICBkZXNjcmliZSgnVGhlIGludmVydGVkIGluZGV4IHNlYXJjaCBtZXRob2QnLCAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoRm9yQWxpY2VJbkFsbEZpbGVzID0gaW52ZXJ0ZWRJbmRleFxuICAgIC5zZWFyY2hGaWxlcyhbJ2FsaWNlJ10sICdBbGwnKTtcbiAgICBjb25zdCBzZWFyY2hGb3JQYXJ0eUluQWxsRmlsZXMgPSBpbnZlcnRlZEluZGV4XG4gICAgLnNlYXJjaEZpbGVzKFsncGFydHknXSwgJ0FsbCcpO1xuICAgIGNvbnN0IHNlYXJjaEZvckFsaWNlSW5Cb29rID0gaW52ZXJ0ZWRJbmRleFxuICAgIC5zZWFyY2hGaWxlcyhbJ2FsaWNlJ10sICdib29rJyk7XG4gICAgY29uc3Qgc2VhcmNoRm9yUGFydHlJbk5ld3MgPSBpbnZlcnRlZEluZGV4XG4gICAgLnNlYXJjaEZpbGVzKFsncGFydHknXSwgJ05ld3MnKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhcyB0eXBlIG9mIHNlYXJjaCByZXN1bHQnLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoRm9yQWxpY2VJbkFsbEZpbGVzIGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIG1hdGNoIHNlYXJjaEZvckFsaWNlSW5BbGxGaWxlcyB3aXRoIGFsaWNlOiB7IDA6IHRydWUgfScsXG4gICAgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaEZvckFsaWNlSW5BbGxGaWxlcy5ib29rKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IHRydWUgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBtYXRjaCBzZWFyY2hGb3JBbGljZUluQWxsRmlsZXMgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNlYXJjaEZvckFsaWNlSW5BbGxGaWxlcy5ib29rKS5ub3RcbiAgICAgIC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGFsaWNlOiB7IDA6IGZhbHNlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2hzZWFyY2hGb3JQYXJ0eUluQWxsRmlsZXMgd2l0aCBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH0nLFxuICAgICgpID0+IHtcbiAgICAgIGV4cGVjdChzZWFyY2hGb3JQYXJ0eUluQWxsRmlsZXMuTmV3cykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoRm9yUGFydHlJbkFsbEZpbGVzIHdpdGggcGFydHk6IHsgMDogdHJ1ZSwgMTogdHJ1ZSB9JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaEZvclBhcnR5SW5BbGxGaWxlcy5ib29rKS5ub3RcbiAgICAgICAgLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCAxOiB0cnVlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgYXMgdHlwZSBvZiBzZWFyY2hSZXN1bHQzJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaEZvckFsaWNlSW5Cb29rIGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoRm9yQWxpY2VJbkJvb2sgd2l0aCBhbGljZTogeyAwOiB0cnVlIH0nLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc2VhcmNoRm9yQWxpY2VJbkJvb2suYm9vaykudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBhbGljZTogeyAwOiB0cnVlIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoRm9yQWxpY2VJbkJvb2sgd2l0aCBhbGljZTogeyAwOiBmYWxzZSB9JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaEZvckFsaWNlSW5Cb29rLmJvb2spLm5vdC50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgYWxpY2U6IHsgMDogZmFsc2UgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBhc3lwZSBvZiBzZWFyY2hSZXN1bHQ0JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaEZvclBhcnR5SW5OZXdzIGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbWF0Y2ggc2VhcmNoRm9yUGFydHlJbk5ld3Mgd2l0aCAgcGFydHk6IHsgMDogdHJ1ZSwgNTogdHJ1ZSB9JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNlYXJjaEZvclBhcnR5SW5OZXdzLk5ld3MpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICBwYXJ0eTogeyAwOiB0cnVlLCA1OiB0cnVlIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCd0aGUgaW52ZXJ0ZWQgaW5kZXggZ2V0SW5kZXggbWV0aG9kJywgKCkgPT4ge1xuICAgIGNvbnN0IGdldENvcnJlY3RCb29rSW5kZXggPSBpbnZlcnRlZEluZGV4LmdldEluZGV4KCdib29rJyk7XG4gICAgY29uc3QgZ2V0RW1wdHlJbmRleCA9IGludmVydGVkSW5kZXguZ2V0SW5kZXgoKTtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBvYmplY3QgYXMgdHlwZW9mIGdldENvcnJlY3RCb29rSW5kZXgnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoZ2V0Q29ycmVjdEJvb2tJbmRleCBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIGdldEVtcHR5SW5kZXgnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoZ2V0RW1wdHlJbmRleCkudG9CZUZhbHN5KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCd0aGUgaW52ZXJ0ZWQgaW5kZXggdmFsaWRhdGUgbWV0aG9kJywgKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5RmlsZUNvbnRlbnQgPSBpbnZlcnRlZEluZGV4LmlzVmFsaWQoZW1wdHkpO1xuICAgIGNvbnN0IGNvcnJlY3RGaWxlQ29udGVudCA9IGludmVydGVkSW5kZXguaXNWYWxpZChib29rWzBdKTtcbiAgICBjb25zdCBwYWNrYWdlSnNvbkJvb2sgPSBpbnZlcnRlZEluZGV4LmlzVmFsaWQobGlrZVBhY2thZ2UpO1xuICAgIGNvbnN0IG1hbnlCb29rQ29udGVudCA9IGludmVydGVkSW5kZXguaXNWYWxpZChtYW55KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGZvciBhbiBlbXB0eSBqc29uIGZpbGUnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoZW1wdHlGaWxlQ29udGVudCkudG9CZUZhbHN5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiB0cnVlIGZvciBjb3JyZWN0RmlsZUNvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoY29ycmVjdEZpbGVDb250ZW50KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgcGFrYWdlLmpzb24gYXMgYm9vaycsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHBhY2thZ2VKc29uQm9vayk7XG4gICAgICBleHBlY3QocGFja2FnZUpzb25Cb29rKS50b0VxdWFsKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIHdyb25nIGZpbGUgY29udGVudCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChtYW55Qm9va0NvbnRlbnQpLnRvQmVGYWxzeSgpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJpbmVydGVkaW5kZXhcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInVzZXIgY2FuIGNyZWF0ZSBzZWFyY2ggdGhyb3VnaCBqc29uIGZpbGVzXCIsXG4gIFwibWFpblwiOiBcImluZGV4LmpzXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwia2FybWEgc3RhcnQga2FybWEuY29uZi5qc1wiLFxuICAgIFwibGludFwiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vZXNsaW50IHB1YmxpYy9qcy8qLmpzXCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vYW5kZWxhLWNvZm9yL2ludmVydGVkSW5kZXguZ2l0XCJcbiAgfSxcbiAgXCJhdXRob3JcIjogXCJPZm9yIENoaW5lZHVcIixcbiAgXCJsaWNlbnNlXCI6IFwiSVNDXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYW5kZWxhLWNvZm9yL2ludmVydGVkSW5kZXgvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbmRlbGEtY29mb3IvaW52ZXJ0ZWRJbmRleCNyZWFkbWVcIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOiBcIl42LjIyLjBcIixcbiAgICBcImJhYmVsaWZ5XCI6IFwiXjcuMy4wXCIsXG4gICAgXCJicm93c2VyLXN5bmNcIjogXCJeMi4xOC43XCIsXG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjE0LjEuMFwiLFxuICAgIFwiY292ZXJhbGxzXCI6IFwiXjIuMTIuMFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjMuMTYuMVwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1haXJibmItYmFzZVwiOiBcIl4xMS4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjYuMTAuMFwiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjkuMVwiLFxuICAgIFwiamFzbWluZVwiOiBcIl4yLjUuM1wiLFxuICAgIFwiamFzbWluZS1jb3JlXCI6IFwiXjIuNS4yXCIsXG4gICAgXCJrYXJtYVwiOiBcIl4xLjUuMFwiLFxuICAgIFwia2FybWEtY2hyb21lLWxhdW5jaGVyXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJrYXJtYS1jb3ZlcmFnZVwiOiBcIl4xLjEuMVwiLFxuICAgIFwia2FybWEtY292ZXJhbGxzXCI6IFwiXjEuMS4yXCIsXG4gICAgXCJrYXJtYS1maXJlZm94LWxhdW5jaGVyXCI6IFwiXjEuMC4xXCIsXG4gICAgXCJrYXJtYS1qYXNtaW5lXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJrYXJtYS1zcGVjLXJlcG9ydGVyXCI6IFwiMC4wLjMwXCIsXG4gICAgXCJrYXJtYS12ZXJib3NlLXJlcG9ydGVyXCI6IFwiMC4wLjVcIixcbiAgICBcIm5vZGVtb25cIjogXCJeMS4xMS4wXCIsXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiXjEuMS4wXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYnJvd3Nlci1zeW5jXCI6IFwiXjIuMTguN1wiLFxuICAgIFwiY2hhaVwiOiBcIl4zLjUuMFwiLFxuICAgIFwiY29ubmVjdFwiOiBcIl4zLjUuMFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjMuMTUuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1haXJibmJcIjogXCJeMTQuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOiBcIl40LjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl42LjkuMFwiLFxuICAgIFwiZXhwcmVzc1wiOiBcIl40LjE1LjFcIixcbiAgICBcImd1bHBcIjogXCJeMy45LjFcIixcbiAgICBcImphc21pbmVcIjogXCJeMi41LjNcIixcbiAgICBcInNlcnZlLXN0YXRpY1wiOiBcIl4xLjExLjJcIixcbiAgICBcInNlcnZlci1zdGF0aWNcIjogXCJeMS4zLjBcIlxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHsgXCJ0aXRsZVwiOiBcIk1hbnkgY29udGVudFwiLCBcInRleHRcIjogXCJBbiBJbnZlcnRlZCBJbmRleCBpcyBhbiBJbmRleCBEYXRhIFN0cnVjdHVyZSBzdG9yaW5nIGEgbWFwcGluZyBmcm9tIGNvbnRlbnQgdG8gbG9jYXRpb25cIiB9LFxuICB7IFwidGl0bGVcIjogXCJTb21lIGNvbnRlbnRcIiwgXCJ0ZXh0XCI6IFwiU28gaWYgeW91ciBjbGllbnQtc2lkZSBjb2RlIGlzIGxvY2F0ZWQgaW4gYXBwL2pzLCBjcmVhdGUgYSBkaXJlY3RvcnkgY2FsbGVkXCIgfSxcbiAgeyBcInRpdGxlXCI6IFwiUG9vciBjb250ZW50XCIsIFwidGV4dFwiOiBcIlVwbG9hZCB2YWxpZCBqc29uIGJvb2sgZmlsZXMgKHRoYXQgaGF2ZSBhIHRleHQgYW5kIHRpdGxlIHByb3BlcnR5KVwiIH0sXG4gIHsgXCJ0aXRsZVwiOiBcIk5vbmUgY29udGVudFwiLCBcInRleHRcIjogXCIgWmFwcGVyXCJ9LFxuXSJdfQ==
