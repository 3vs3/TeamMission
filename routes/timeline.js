var path    = require("path");

exports.showTimeline = function(req, res) {
  gStep = 4;
  res.render('timeline', {membername:global.gMemberName, gStep:gStep});
};
