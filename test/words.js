const assert = require('assert');
const words = require('../src/words');

suite('Words', () => {
  suite('Get (1 word)', () => {
    test('should return the word "Buongiorno"', () => {
      const w = words();
      assert.deepEqual(
          w.get('it', 'Good morning'),
          [{'Good morning': 'Buongiorno'}]
      );
    });
    test('should be an array of objects', () => {
      const w = words();
      assert.ok(Array.isArray(w.get('it', 'Good morning')));
      assert.ok(typeof w.get('it', 'Good morning')[0] === 'object');
    });
  });

  suite('Get (many words)', () => {
    test('should return the words "Buongiorno" and "Salve"', () => {
      const w = words();
      const wordsList = w.get('it');
      assert.deepEqual(
          wordsList,
          [{'Howdy': 'Salve'}, {'Good morning': 'Buongiorno'}]
      );
    });
    test('should be an array of 2 objects', () => {
      const w = words();
      const wordsList = w.get('it');
      assert.ok(Array.isArray(wordsList));
      assert(wordsList.length === 2, 'The array should contain two objects');
    });
  });

  suite('Count', () => {
    test('should count only 1 word', () => {
      const w = words();
      assert.equal(w.count('it', 'Good morning'), 1);
    });
  });
});
