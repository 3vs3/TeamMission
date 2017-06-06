var path    = require("path");

exports.matchingGame = function(req, res) {
  gMemberName = req.query.char;

  gStep = 2;
  clearInterval(gInterval);
  gInterval = setInterval(gStartTimer, 10);
  global.gmember(); //한글 캐릭터이름 가져오기.

  global.gMemberName = gMemberName +'-mini.jpg';
  res.render('keywordMatch', {membername:gMemberName, gStep:gStep, gMemberNameko: gMemberNameko});



  console.log('gStep : ' + gStep);
  //res.sendFile(path.join(appRoot + '/views/keywordMatch.html'));
};
