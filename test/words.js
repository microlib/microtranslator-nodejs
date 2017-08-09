const assert = require('assert');
const words = require('../src/words');
const proxyquire = require('proxyquire');

suite('Words', () => {
  suite('Get (1 word)', () => {
    test('should return the word "Buongiorno"', () => {
      const w = proxyquire('../src/words', {
        'src/DB': () => {
          return {
            readTranslation: (word, locale) => (
                Promise.resolve({
                  word: 'Good morning',
                  translation: 'Buongiorno',
                  locale: 'it_IT',
                })
            ),
          };
        },
      })();

      return w.get('it', 'Good morning').then((res) => {
        assert.deepEqual(
            res,
            {word: 'Good morning', translation: 'Buongiorno', locale: 'it_IT'}
        );
      });
    });
    test('should be an object', () => {
      const w = proxyquire('../src/words', {
        'src/DB': () => {
          return {
            readTranslation: (word, locale) => (
                Promise.resolve({
                  word: 'Good morning',
                  translation: 'Buongiorno',
                  locale: 'it_IT',
                })
            ),
          };
        },
      })();
      return w.get('it', 'Good morning').then((res) => {
        assert.ok(typeof res === 'object');
      });
    });
  });

  suite('Get (many words)', () => {
    test.only('should return multiple words', () => {
      const w = proxyquire('../src/words', {
        'src/DB': () => {
          return {
            readTranslations: (locale) => (
                Promise.resolve([
                  {
                    word: 'Good morning',
                    translation: 'Buongiorno',
                    locale: 'it_IT',
                  },
                  {
                    word: 'Hello',
                    translation: 'Ciao',
                    locale: 'it_IT',
                  },
                ])
            ),
          };
        },
      })();
      return w.get('it_IT').then((res) => {
        assert.deepEqual(
            res,
            [
              {
                word: 'Good morning',
                translation: 'Buongiorno',
                locale: 'it_IT',
              },
              {
                word: 'Hello',
                translation: 'Ciao',
                locale: 'it_IT',
              },
            ]
        );
      });
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
