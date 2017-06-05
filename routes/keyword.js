var path    = require("path");

exports.matchingGame = function(req, res) {
  res.sendFile(path.join(appRoot + '/views/keywordMatch.html'));
};
