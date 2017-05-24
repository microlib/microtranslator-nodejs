/**
 * Locale function
 * @param {Object=} DB
 */
const Locale = DB => ({
  /**
   * Gets all locales
   * @memberof Locale
   * @method get
   */
  get: () => (['sp', 'en', 'it', 'fr', 'de']),
  /**
   * Counts all locales
   * @memberof Locale
   * @method count
   */
  count() {
    return this.get().length;
  },
});

module.exports = Locale;
