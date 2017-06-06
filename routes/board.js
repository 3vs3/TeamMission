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
  clearInterval(gInterval);

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
    res.render('board', {results:results, gMemberName:gMemberName});
  });

  c.end();
};

exports.addBoard = function(req, res) {
  var user_name = req.body.user_name;
  var comment = req.body.comment;
  var character = global.gMemberName;
  var duration = calculateTime(gTens);

  var params = [user_name, comment, character, duration];
  c.query('INSERT INTO board (user_name, comment, selected_character, duration)'
   + 'VALUES (?, ?, ?, SEC_TO_TIME(?))', params, function(err, result) {
    if(err)
      showError(err, res);
    res.redirect('/board');
  });
};

function calculateTime(tens) {
  var tempTens = tens % 100;
  var second = parseInt(tens / 100);
  //var min = parseInt(second / 60);
  //var hour = parseInt(min / 60);

  return second;
}

function showError(err, res) {
  console.log(err);
  res.status(500).send('Internal Server Error');
}
