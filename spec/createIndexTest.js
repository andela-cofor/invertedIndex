const InvertedIndex = require('../public/js/invertedIndex');
const InvertedIndexUtil = require('../public/js/InvertedIndexUtil');

const chai = require('chai');

const expect = chai.expect;

const correctBook = require('./book.json');
const wrongBook = require('./wrongFormat.json');
const zeroLength = require('./length.json');
const book = require('./News');

const invertedObject = new InvertedIndex();
const invertedUtil = new InvertedIndexUtil();

describe('Inverted Index test Suit', () => {
  describe('Testing Inverted index Util methods', () => {
    it('Should return false for wrong book format', () => {
      expect(invertedUtil.jsonFileReader(wrongBook)).toBeFalsy();
    });

    it('Should return false for wrong length of book', () => {
      expect(invertedUtil.jsonFileReader(zeroLength)).toBeFalsy();
    });
  });

  describe('Testing Inverted index create method', () => {
    const outputObject = invertedObject.createIndex(correctBook, 'correctBook');
    const outputObject2 = invertedObject.createIndex(book, 'book');

    it('should return Object as object type of outputObject', () => {
      expect(outputObject instanceof Object).toBeTruthy();
    });

    it('matches outputObject with the expect alice: { 0: true }', () => {
      expect(outputObject).toEqual(jasmine.objectContaining({
        alice: { 0: true }
      }));
    });

    it('matches outputObject with the expect alice: { 0: false }', () => {
      expect(outputObject).not.toEqual(jasmine.objectContaining({
        alice: { 0: false }
      }));
    });

    it('matches outputObject with the expect alice: { 0: false }', () => {
      expect(outputObject).toEqual(jasmine.objectContaining({
        of: { 0: true, 1: true }
      }));
    });

    it('matches outputObject with the expect party: { 0: true, 5: true }', () => {
      expect(outputObject2).toEqual(jasmine.objectContaining({
        party: { 0: true, 5: true }
      }));
    });

    it('matches outputObject with the expect party: { 0: true, 5: true }', () => {
      expect(outputObject2).not.toEqual(jasmine.objectContaining({
        party: { 0: true, 4: true }
      }));
    });

    const searchObject = invertedObject.searchFiles(['alice'], 'All');
    const searchObject2 = invertedObject.searchFiles(['party'], 'All');
    console.log(searchObject);
    // console.log(searchObject2.book);

    it('should return Object as object type of searchObject for All', () => {
      expect(searchObject instanceof Object).toBeTruthy();
    });

    it('matches searchObject with the expect alice: { 0: true }', () => {
      expect(searchObject.correctBook).toEqual(jasmine.objectContaining({
        alice: { 0: true }
      }));
    });

    it('matches searchObject with the expect alice: { 0: false }', () => {
      expect(searchObject.correctBook).not.toEqual(jasmine.objectContaining({
        alice: { 0: false }
      }));
    });

    it('matches searchObject2 with the expect party: { 0: true, 5: true }', () => {
      expect(searchObject2.book).toEqual(jasmine.objectContaining({
        party: { 0: true, 5: true }
      }));
    });

    it('matches searchObject2 with the expect party: { 0: true, 1: true }', () => {
      expect(searchObject2.book).not.toEqual(jasmine.objectContaining({
        party: { 0: true, 1: true }
      }));
    });
  });
});
