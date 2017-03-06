/* eslint-disable no-undef*/
const correctBook = require('./book.json');
const wrongBook = require('./wrongFormat.json');
const zeroLength = require('./length.json');

const invertedIndexUtilObj = new InvertedIndexUtil();
const invertedObj = new InvertedIndex();

describe('Test Suit', () => {
  console.log(typeof book)
  describe('Testing Inverted index create Methods', () => {
    it('should return false', () => {
      expect(invertedObj.createIndex(correctBook).toEqual(Object));
    });
  });
});
