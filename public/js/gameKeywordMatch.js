/**
 * Created by boyeon on 2017. 6. 4..
 */

$(function(){

    console.log(getQueryParams('char').char) ;
    //setNPC();
    var arrKeywordBoyeon = ["CGV 5년간 VIP", "오늘도 나는 배가 고프다", "볼링", "인도", "배낭여행", "택시타는 것을 매우 싫어함", "몽니 (인디밴드)","자비에돌란", "갓헬프더걸", "죽음의 수용소"];
    var arrKeyword2da = ["안드로이드", "픽시", "서핑", "익스트림", "음악", "중국", "새로운 것", "재밌게 살자", "나는 아직 더 까매질수있다(?)", "아마추어 경륜대회"];
    var arrKeywordDongju = ["비전공자", "비개발자", "법학도", "우주비행사", "크리스토퍼 놀란", "만화책", "아이돌", "덕후는아니라능", "디지털노마드", "미니멀리스트"];
    var arrKeywordJaejin = ["대학생", "연구실","음악듣기", "Jazz hiphop", "이상하고 특이한것", "막창","치킨", "배드민턴", "족구", "크레이지닭 인형( 꽤애애ㅐ애애액 )"];
    var arrMemberNames = ['boyeon', '2da', 'dongju', 'jaejin'];

    // array Json 생성
    var arrKeywordTeam = [];
    arrKeywordTeam.boyeon = arrKeywordBoyeon;
    arrKeywordTeam['2da'] = arrKeyword2da;
    arrKeywordTeam.dongju = arrKeywordDongju;
    arrKeywordTeam.jaejin = arrKeywordJaejin;

    // 멤버 키워드 출력
    showTeamMembers();

    // 멤버 키워드 맞추기 게임
    function gameKeywordMatch() {
        getGameTxt();
        var gameCnt = 0;

        function getGameTxt(){

            var keyword = arrKeywordTeam[arrMemberNames[getRandomInt(0,3)]][getRandomInt(0,9)];
            var node = '<p style="text-align: center; font-size:'+getRandomInt(50,100)+'px; margin: 0 auto; ">'+keyword+'</p>';
            $('#divTxtKeyword').html('').append(node);

            $('.memberImg').off('click').on('click',function () {

                var memberName = $(this).attr('id');
                if(checkKeywordRight(keyword, memberName)){
                    // 맞으면
                    userScore.setScore(1);
                }

                gameCnt++;

                // 게임 남은 횟수, 맞춘 횟수 출력
                $('#matchCnt').text(userScore.getScore());
                $('#remainCnt').text(10-gameCnt);

                if(gameCnt > 9){
                    // 게임 10회
                    $('#remainCnt').text(0);
                    setTimeout(function () {
                        finishGame(userScore.getScore());
                    },500);
                    return;
                }else{
                    getGameTxt();
                }
            });
        }

        var userScore = Score();
        function Score() {
            var score = 0;
            return {
                getScore: function() {
                    return score;
                },
                setScore: function(num) {
                    score += num;
                }
            }
        }
    }

    // 게임 끝
    function finishGame(score) {
        if(score > 4){
            alert(score + '점을 획득하셨군요 통과입니다');
            // 스탬프 증가 함수 콜
            location.href="/cardgame?char="  + getQueryParams('char').char;
        }else{
            alert(score + '점으로 아쉽게 스탬프 획득을 실패하였습니다');
            location.href="/ladder?char=" +getQueryParams('char').char;
        }
    }

    // 키워드 체크
    function checkKeywordRight(keword, memberName){
        for(var idx in arrKeywordTeam[memberName]){
            if(keword == arrKeywordTeam[memberName][idx] ){
                return true;
            }
        }
        return false;
    }

    // 멤버 키워드 출력
    function showTeamMembers() {

        for (i=0; i < 4; i++) {
            for(j=0; j<11; j++){
                (function(x,y) {
                    setTimeout(function() {
                        var tmpY=y;
                        var keyword = '';
                        var arrTxtColor = ['yellow', 'green','pink','blue'];
                        if(y==0){
                            keyword = changeEngNameToKorName(arrMemberNames[x]);
                            txtColor = arrTxtColor[getRandomInt(0,3)];
                        }else{
                            keyword = arrKeywordTeam[arrMemberNames[x]][tmpY-1];
                            txtColor = '#fff'
                        }

                        var node = '<p style="text-align: center; font-size:'+getRandomInt(30,100)+'px; margin: 0 auto; color:'+txtColor+'">'+keyword+'</p>';
                        $('#divKeyword').html('').append(node);

                        if(x==3 && y==10){
                            setTimeout(function(){
                                $('#divKeyword').html('');
                                $('#divKeywordGameStart').show();
                                gameKeywordMatch();
                            },300);
                        }
                    }, 3300*(x)+300*(y));
                })(i,j);
            }
        }
    }


    function changeEngNameToKorName(name) {
        var returnName = '최보연';
        switch (name){
            case 'boyeon':
                break;
            case '2da':
                returnName = '이다은';
                break;
            case 'dongju':
                returnName = '이동주';
                break;
            case 'jaejin':
                returnName = '이재진';
                break;
            default:
                break;
        }

        return returnName;
    }

     function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


});
