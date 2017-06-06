var path    = require("path");

exports.matchingGame = function(req, res) {
  gMemberName = req.query.char;
  res.sendFile(path.join(appRoot + '/views/keywordMatch.html'));
};
