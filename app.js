var express = require('express');
var path    = require("path");
var bodyParser = require("body-parser");
//routes 의 (name).js 파일 선언
//1단계 : main
var main = require('./routes/main');
//2단계 : keyword
var keyword = require('./routes/keyword');
//3단계 : cardgame
var cardGame = require('./routes/cardgame');
//4단계 : timeline
var timeline = require('./routes/timeline');
//5단계 : 게시판
var board = require('./routes/board');
//패자부활전
var ladder = require('./routes/ladder');
var app = express();

//appRoot Path 전역변수 지정
global.appRoot = path.resolve(__dirname);
// 선택한 캐릭터 전역변수
// boyeon, daeun, jaejin, dongju
global.gMemberName = '';
global.gInterval = 0;
global.gTens = 0;
global.gStartTimer = function () {
  gTens++;
}
global.gStep = 1;


app.locals.pretty = true ;  //페이지 소스보기 이쁘게


/**
 * 정적 파일이란?
 * HTML 에서 사용되는 .js 파일, css 파일, image 파일
 */
//서버에서 정적파일을 다루기 위해선, express.static() 메소드를 사용
app.use(express.static('public'));

//bodyParser : post방식 body 사용
app.use(bodyParser.urlencoded({extended:false}));

//pug (jade)
app.set('view engine', 'pug');
app.set('views', './views');

/**
 * app.get[post, etc...] (URL경로, 라우터의 콜백 메소드);
 * 해당 router 의 function으로 이동
 */
//메인
app.get('/', main.welcome);

//2단계 : 키워드 매칭
app.get('/keyword', keyword.matchingGame);

//3단계 : 카드게임
app.get('/cardgame', cardGame.startGame);

//4단계 : 타임라인
app.get('/timeline', timeline.showTimeline);

//5단계 : 게시판
app.get('/board', board.showBoardList);
app.post('/board/add', board.addBoard);

//패자부활전 : 사다리게임
app.get('/ladder', ladder.startGame);

//NPC test
app.get('/NPC',ladder.startGame);

//서버 구동
app.listen(3000, function() {
  console.log('Connected 3000 port!');
});
