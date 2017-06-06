var path    = require("path");

exports.matchingGame = function(req, res) {
  gMemberName = req.query.char;
  clearInterval(gInterval);
  gInterval = setInterval(gStartTimer, 10);
  res.sendFile(path.join(appRoot + '/views/keywordMatch.html'));
};
