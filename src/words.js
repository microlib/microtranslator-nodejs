/**
 * Locale function
 *
 * @param {Object=} context
 * @return {Object[]}
 */
const Words = context => {
  const DB = require('src/DB')(context);

  return {
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
      const getOne = word => {
        return DB.readTranslation(word, locale).then((res) => (res));
      };
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
  };
};

// const getAll()

module.exports = Words;
