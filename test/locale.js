const mocha = require('mocha');
const assert = require('assert');
const L = require('../src/locale');

suite('Locale', () => {
  suite('Get', () => {
    test('should return a list of Locales', () => {
      const locale = L();
      assert.deepEqual(locale.get(), ['sp', 'en', 'it', 'fr', 'de']);
    });
    test('should be an Array', () => {
      const locale = L();
      assert.equal(locale.get() instanceof Array, true);
    });
  });

  suite('Count', () => {
    test('should return the number of locales', () => {
      const locale = L();
      assert.equal(locale.count(), 5, 'The number of locales should be 5');
    });
  });
});
