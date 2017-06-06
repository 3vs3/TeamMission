var path    = require("path");

exports.showTimeline = function(req, res) {
  gStep = 4
  res.sendFile(path.join(appRoot + '/views/timeline.html'));
};
