var path    = require("path");

exports.startGame = function(req, res) {
  res.sendFile(path.join(appRoot + '/views/cardgame.html'));
};
