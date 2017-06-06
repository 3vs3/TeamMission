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
  gInterval = setInterval(gStartTimer, 10);

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
  //var duration = global.gSeconds;
  var duration = '';
  calculateTime(gTens, duration);
  var params = [user_name, comment, character, duration];
  c.query('INSERT INTO board (user_name, comment, selected_character, duration) VALUES (?, ?, ?, ?)', params, function(err, result) {
    if(err)
      showError(err, res);
    res.redirect('/board');
  });
};

function calculateTime(tens, duration) {
  var tempTens = tens % 100;
  var second = parseInt(tens / 100);
  var min = parseInt(second / 60);
  var hour = parseInt(min / 60);

  if(second <= 9) {
    second = '0' + second;
  }

  if(min <= 9) {
    min = '0' + min;
  }

  if(hour <= 9) {
    hour = '0' + hour;
  }

  duration = hour + ':' + min + ':' + second;
  console.log('tens : ' + tens + ', duration : ' + duration);
}

function showError(err, res) {
  console.log(err);
  res.status(500).send('Internal Server Error');
}
