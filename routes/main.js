var path    = require("path");

exports.welcome = function(req, res) {
  res.sendFile(path.join(appRoot + '/views/index.html'));
};
