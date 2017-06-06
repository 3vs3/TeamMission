var path    = require("path");

exports.welcome = function(req, res) {
  global.gMemberName = '';
  res.sendFile(path.join(appRoot + '/views/index.html'));
};
