const MongoClient = require('mongodb');
const async = require('asyncawait/async');
const await = require('asyncawait/await');

module.exports = function(context) {
  const connect = async function() {
    const db = MongoClient.connect('mongodb://localhost:27017/microtranslator');
  };
};
