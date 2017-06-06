var path    = require("path");

exports.startGame = function(req, res) {
  if(!gIsClearPrevStep()) {
    res.redirect('/');
  }
  gStep = 3;
  res.render('cardgame', {membername:global.gMemberName, gStep:gStep});
 };
