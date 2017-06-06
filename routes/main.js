var path    = require("path");

exports.welcome = function(req, res) {
  global.gMemberName = '';
  global.gMemberNameKor = '';
  gIsAddedComment = false;
  res.sendFile(path.join(appRoot + '/views/index.html'));
};
