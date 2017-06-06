var path    = require("path");

exports.startGame = function(req, res) {
  //res.sendFile(path.join(appRoot + '/views/cardgame.html'));

  gStep = 3;
  res.render('cardgame', {membername:global.gMemberName, gStep:gStep});
  console.log('gStep : ' + gStep);
};
