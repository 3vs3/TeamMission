/**
 * Created by boyeon on 2017. 6. 6..
 */


function setNPC(nameEng, stampCnt) {

    $('head').append('<link rel="stylesheet" type="text/css" href="css/NPC.css">');
    console.log(nameEng, stampCnt);
    var nameKOR = changeNameEngToNameKor(nameEng);
    console.log(nameKOR);
    var npcNode =  '<div id="divNPC">    \
                        <div id="divMemberName">'
                            + nameKOR +
                        '</div> \
                        <div id="divCharImg"> \
                            <img id="imgNPC" class="charImg" src="images/'+nameKOR+'.jpeg" />  \
                        </div>  \
                        <div id="divStamp">' +
                            setStampNode(stampCnt) +
                        '</div> \
                    </div>';

    $('body').append(npcNode);

    function setStampNode(stampCnt) {
        var nodeStamp = '';
        for(var i=0; i<stampCnt; i++){
            nodeStamp += '  <img id="" class="stampImg" src="images/stamp.png" />';
        }
        return nodeStamp;
    }
    
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

}


function getQueryParams(qs) {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}

