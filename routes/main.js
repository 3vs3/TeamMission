var path    = require("path");

exports.welcome = function(req, res) {
  gMemberName = '';
  gStep = 1;
  res.sendFile(path.join(appRoot + '/views/index.html'));
};
