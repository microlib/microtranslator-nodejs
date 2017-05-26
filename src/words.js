/**
 * Locale function
 * @param {Object=} DB
 */
const Words = DB => ({
  /**
   * Gets all terms
   * @memberof Words
   * @method get
   * @param {string} [locale=en] - The locale (e.g. 'en' or 'fr')
   * @param {string} [word] - The word needed (e.g. 'Hello')
   * @return {string}
   */
  get: (locale = 'en', word = '') => ('Buongiorno'),
  /**
   * Counts all words
   * @memberof Words
   * @method count
   * @param {string} [locale=en] - The locale (e.g. 'en' or 'fr')
   * @param {string} [word] - The word needed (e.g. 'Hello')
   * @return {Number}
   */
  count(locale = 'en', word = '') {
    return 1;
  },
});

module.exports = Words;
