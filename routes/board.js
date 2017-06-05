var Client = require('mariasql');
var path = require("path");
var db_config = require('../config/db-config.json');

var c = new Client({
  host: db_config.host,
  user: db_config.user,
  password: db_config.password,
  db: db_config.database
});

exports.showBoardList = function(req, res) {
  c.query('SELECT * FROM board', function(err, reuslts) {
    if(err)
      showError(err, res);
    res.render('board', {reuslts:reuslts, isEmpty: true});
    //res.sendFile(path.join(appRoot + '/views/board.html'));
  });

  c.end();
};

function showError(err, res) {
  console.log(err);
  res.status(500).send('Internal Server Error');
}
