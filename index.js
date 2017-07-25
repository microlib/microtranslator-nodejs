const DB = require('./src/DB')();

// DB.insertTranslation('hello', 'hallo', 'de_DE');

var res = DB.readTranslation('hello', 'de_DE');

res.then(function(r) { console.log(r)} );
