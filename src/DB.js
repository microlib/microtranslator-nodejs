const MongoClient = require('mongodb');

module.exports = function(context) {
  /**
   * @return {Promise.<*>}
   */
  const connect = function() {
    return MongoClient.connect('mongodb://localhost:27017/microtranslator').
      then((db) => {
        return db;
      }).
      catch((err) => {
        console.log(err);
      });
  };

  return {
    insertTranslation: function(word, translation, locale) {
      return connect().then((db) => {
        return db.collection('translations').insertOne({
          word, translation, locale,
        }).then((res) => {
          console.log(res);
        });
      }).catch((err) => {
        console.log(err);
      });
    },
    readTranslation: function(word, locale) {
      return connect().then((db) => {
        return db.collection('translations').findOne({
          word, locale,
        });
      });
    },
  };
};
