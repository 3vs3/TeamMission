var path    = require("path");

exports.matchingGame = function(req, res) {
  gMemberName = req.query.char;
  if(!gIsClearPrevStep()) {
    res.redirect('/');
  }

  gStep = 2;

  clearInterval(gInterval);
  gInterval = setInterval(gStartTimer, 10);
  global.gMemberNameKor = changeNameEngToNameKor(gMemberName);
  global.gMemberName = gMemberName + '-mini.jpg';
  gMemberName2 = req.query.char;
  res.render('keywordMatch', {membername:gMemberName, gStep:gStep});
};

function changeNameEngToNameKor(EngName) {
    var name = '보연';
    switch (EngName){
        case 'boyeon':
            break;
        case 'dongju':
            name = '동주';
            break;
        case 'daeun':
            name = '다은';
            break;
        case 'jaejin':
            name = '재진';
            break;
        default:
            break;
    }
    return name;
}
