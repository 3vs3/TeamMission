var path    = require("path");

exports.showTimeline = function(req, res) {
  //res.send('This is board');
  //res.sendFile(path.join(appRoot + '/views/timeline.html'));

  gStep = 4;

  res.render('timeline', {membername:global.gMemberName, gStep:gStep, gMemberNameko: gMemberNameko});

  console.log('gStep : ' + gStep);
};
