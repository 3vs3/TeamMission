var path    = require("path");

exports.startGame = function(req, res) {
  gStep = 3;
  res.sendFile(path.join(appRoot + '/views/cardgame.html'));
};
