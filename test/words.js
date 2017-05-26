const mocha = require('mocha');
const assert = require('assert');
const W = require('../src/words');

suite('Words', () => {
  suite('Get (1 word)', () => {
    test('should return the word "Buongiorno"', () => {
      const words = W();
      assert.deepEqual(words.get('it', 'Good morning'), 'Buongiorno');
    });
    test('should be a string', () => {
      const words = W();
      assert.equal(typeof words.get('it', 'Good morning'), 'string');
    });
  });

  suite('Count', () => {
    test('should count only 1 word', () => {
      const words = W();
      assert.equal(words.count('it', 'Good morning'), 1);
    });
  });
});
