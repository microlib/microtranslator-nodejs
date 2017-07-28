const assert = require('assert');
const words = require('../src/words');
const proxyquire = require('proxyquire');

suite('Words', () => {
  suite('Get (1 word)', () => {
    test('should return the word "Buongiorno"', () => {
      const w = proxyquire('../src/words', {
        'src/DB': () => {
          return {
            readTranslation: (word, locale) => (Promise.resolve('buongiorno'))
          };
        },
      })();

      return w.get('it', 'Good morning').then((res) => {
        assert.deepEqual(
            res,
            [{'Good morning': 'Buongiorno'}]
        );
      });
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
