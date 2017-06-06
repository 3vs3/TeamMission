var path = require("path");
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
  if(!gIsClearPrevStep()) {
    res.redirect('/');
  }

  clearInterval(gInterval);

  var pageNum = req.query.pageNum;
  var order = req.query.order;

  var totalCount = 0;
  var totalPageNum = 1;

  var countSql = 'SELECT count(*) as count FROM board';
  c.query(countSql, function(err, results) {
    if(err)
      showError(err, res);

    totalCount = results[0].count;
    totalPageNum = parseInt(totalCount / 10);
    if(totalCount % 10 !== 0) {
      totalPageNum += 1;
    }
    //console.dir(results);
    //console.log('totalCount : ' + totalCount);

    var offset = 0;
    if(pageNum === undefined) {
      offset = 0;
    } else if(pageNum > 0) {
      //10개씩 불러옴
      offset = (pageNum - 1) * 10;
    }

    //console.log('offset : ' + offset);

    var sql = 'SELECT * FROM board order by';
    if(order === 'ranking') {
      sql += ' duration asc';
    } else {
      sql += ' reg_time desc';
    }
    //pageNum 부터 10개 row
    sql += ' limit ' + offset + ', 10';

    c.query(sql, function(err2, results2) {
      if(err2)
        showError(err2, res);
      res.render('board', {results:results2, gMemberName:gMemberName, totalPageNum:totalPageNum});
    });

    c.end();
  });

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

  return second;
}

function showError(err, res) {
  console.log(err);
  res.status(500).send('Internal Server Error');
}
