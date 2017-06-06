var path    = require("path");

exports.showTimeline = function(req, res) {
  //res.send('This is board');
  res.sendFile(path.join(appRoot + '/views/timeline.html'));
  gStep = 4;
  console.log('gStep : ' + gStep);
};
