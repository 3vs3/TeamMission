var path = require("path");
var querystring = require('querystring');
var Client = require('mariasql');
var db_config = require('../config/db-config.json');

var c = new Client({
  host: db_config.host,
  user: db_config.user,
  password: db_config.password,
  db: db_config.database,
  charset  : 'utf8'
});

exports.showBoardList = function(req, res) {
  var order = req.query.order;
  var sql = 'SELECT * FROM board order by';
  if(order === 'ranking') {
    sql += ' duration asc';
  } else {
    sql += ' reg_time desc';
  }
  c.query(sql, function(err, results) {
    if(err)
      showError(err, res);
    res.render('board', {results:results});
  });

  c.end();
};

exports.addBoard = function(req, res) {
  var user_name = req.body.user_name;
  var comment = req.body.comment;
  var character = global.character;
  var duration = global.duration;
  var params = [user_name, comment, character, duration];
  c.query('INSERT INTO board (user_name, comment, selected_character, duration) VALUES (?, ?, ?, ?)', params, function(err, result) {
    if(err)
      showError(err, res);
    res.redirect('/board');
  });
};

function showError(err, res) {
  console.log(err);
  res.status(500).send('Internal Server Error');
}
