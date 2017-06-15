const assert = require('assert');
const W = require('../src/words');

suite('Words', () => {
  suite('Get (1 word)', () => {
    test('should return the word "Buongiorno"', () => {
      const words = W();
      assert.deepEqual(words.get('it', 'Good morning'), [{'Good morning': 'Buongiorno'}]);
    });
    test('should be an array of objects', () => {
      const words = W();
      assert.ok(Array.isArray(words.get('it', 'Good morning')));
      assert.ok(typeof words.get('it', 'Good morning')[0] === 'object');
    });
  });

  suite('Count', () => {
    test('should count only 1 word', () => {
      const words = W();
      assert.equal(words.count('it', 'Good morning'), 1);
    });
  });
});
