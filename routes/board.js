var Client = require('mariasql');
var db_config  = require('../config/db-config.json');

var c = new Client({
  host     : db_config.host,
  user     : db_config.user,
  password : db_config.password,
  database : db_config.database
});

exports.showBoardList = function(req, res) {
  res.send('This is board');
};
