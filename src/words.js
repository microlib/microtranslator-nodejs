/**
 * Locale function
 *
 * @param {Object=} DB
 * @return {Object[]}
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
  get: (locale = 'en', word = '') => {
    const getAll = () => [{'Howdy': 'Salve'}, {'Good morning': 'Buongiorno'}];
    const getOne = word => [{'Good morning': 'Buongiorno'}];
    return (word === '') ? getAll() : getOne(word);
  },
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

// const getAll()

module.exports = Words;
