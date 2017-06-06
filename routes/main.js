var path    = require("path");

exports.welcome = function(req, res) {
  global.gMemberName = '';
  global.gMemberNameKor = '';
  res.sendFile(path.join(appRoot + '/views/index.html'));
};
