/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * if9(i): if i<9 then return "0"+i
 * user_*** :ユーザー入力(主にcheckbox,radioによる)
 * ABOUT departure[[[AA.aaa, B,C,D,E, F.f],[AA.aaa ,B,C,D,E, F.f],[ ...... :
 *     ** dep[H][k] = [AA.aaa, B,C,D,E, F.f] **
 *      H時台にk番目に出る電車(code:aaa)がAA分に出てから,
 *      1つ先の駅にB分後, 2つ先の駅にC分後, .... , 5つ先の駅のf番線にF分後に着く
 * 
 */


var t0 = new Date(), //端末より現在時刻を取得 / get present time from phones/PCs
    t0_h = t0.getHours(), t0_m = t0.getMinutes(), t0_s = t0.getSeconds(),
    lastSec = 60, show_left = 0, hide = 0;
const ReT = 20220302, //ダイヤ改正日 / the date on which the timetable is updated
    Valid = 20220301, //システム有効期限 / the date until which this system is valid
    date = t0.getFullYear() *10000 + (t0.getMonth() + 1) *100 + t0.getDate(), //YYYYMMDD
    t_day = t0.getDay(),  //t0から曜日を取得
    dayJp = ["日","月","火","水","木","金","土"],
    dayEn = ["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"],
    code1 = ["普通","普通","区間急行","急行","特急","特急"],
    code2 = ["柏","大宮","春日部","七光台","運河","柏","高柳","船橋"],
    code3 = ["2,3","1","2","3","4"],
    doc_local = "終点まで各駅にとまります。",
    doc_exp = "流山おおたかの森,柏にとまります。<br>江戸川台,初石,豊四季は"
        + "<span class='red'>通過</span>します。";
var aryX = [], i, j, k, x, y, z;

function if9(x){    // x < 9 ならば、xの前に"0"をつける
    if(x <= 9) {x = "0" + x;}
    return x;
}
function Date2(x){  // 8桁(4桁)の x を yyyy/mm/dd(mm/dd) の形にする
    aryX = [Math.floor(x / 10000), Math.floor((x % 10000) / 100), x % 100],
    i = 1;
    while(i <= 2){
        aryX[i] = if9(aryX[i]);
        i++;
    }
    if(x < 10000) {aryX.shift();}
    return aryX.join("/");
}
function output(x,y) {document.getElementById(x).innerHTML = y;}
function debug(x) {if(t0_s === 0 && i === 1) {console.log(x);}}


/*
if(t_day === 0 || t_day === 6){    //土日のとき / if weekends
    document.write("<span class='redB'><br>このシステムは平日限定です "
        +"(今日は"+dayJp[t_day]+"曜日)<br>Available only on weekdays. "
        +"(today: "+dayEn[t_day]+"day)</span><br>");
    var departure = [[[99,undefined]]];
}else{      //平日のとき / if weekdays
*/
    var departure =   [[[ 6.000,  , , , , 0.0],[18.000,  , , , , 0.0],[36.000,  , , , , 0.0],
 [52.002,  , , , , 0.0]],[[45.000,  , , , , 0.0]],[],[],[],  //0-4時台
[[ 7.070,  , , , , 0.0],[15.070,  , , , , 0.0],[25.070,  , , , , 0.0],[33.070,  , , , , 0.0],
 [39.000,  , , , , 0.0],[44.000,  , , , , 0.0],[52.070,  , , , , 0.0]],  //5時台
[[ 1.070,  , , , , 0.0],[ 8.000,  , , , , 0.0],[15.070,  , , , , 0.0],[22.000,  , , , , 0.0],
 [30.000,  , , , , 0.0],[36.000,  , , , , 0.0],[43.070,  , , , , 0.0],[49.000,  , , , , 0.0],
 [54.000,  , , , , 0.0]],  //6時台
[[ 0.000,  , , , , 0.0],[ 6.000,  , , , , 0.0],[12.005,  , , , , 0.0],[18.000,  , , , , 0.0],
 [24.000,  , , , , 0.0],[30.000,  , , , , 0.0],[36.000,  , , , , 0.0],[41.005,  , , , , 0.0],
 [47.000,  , , , , 0.0],[54.000,  , , , , 0.0]],  //7時台
[[ 1.005,  , , , , 0.0],[ 7.000,  , , , , 0.0],[12.005,  , , , , 0.0],[17.000,  , , , , 0.0],
 [23.000,  , , , , 0.0],[30.000,  , , , , 0.0],[39.000,  , , , , 0.0],[46.000,  , , , , 0.0],
 [53.000,  , , , , 0.0]],  //8時台
[[ 0.005,  , , , , 0.0],[ 9.000,  , , , , 0.0],[17.000,  , , , , 0.0],[29.000,  , , , , 0.0],
 [38.000,  , , , , 0.0],[47.000,  , , , , 0.0],[55.000,  , , , , 0.0]],  //9時台
[[ 7.000,  , , , , 0.0],[20.000,  , , , , 0.0],[27.373,  , , , , 0.0],[30.007,  , , , , 0.0],
 [40.000,  , , , , 0.0],[50.000,  , , , , 0.0],[57.000,  , , , , 0.0]],  //10時台
[[ 0.007,  , , , , 0.0],[12.000,  , , , , 0.0],[20.000,  , , , , 0.0],[27.373,  , , , , 0.0],
 [31.077,  , , , , 0.0],[40.000,  , , , , 0.0],[50.000,  , , , , 0.0],[57.373,  , , , , 0.0]],  //11
[[ 0.007,  , , , , 0.0],[10.000,  , , , , 0.0],[20.000,  , , , , 0.0],[27.373,  , , , , 0.0],
 [30.007,  , , , , 0.0],[40.000,  , , , , 0.0],[50.000,  , , , , 0.0],[57.373,  , , , , 0.0]],  //12
[[ 0.007,  , , , , 0.0],[10.000,  , , , , 0.0],[20.000,  , , , , 0.0],[27.373,  , , , , 0.0],
 [30.007,  , , , , 0.0],[40.000,  , , , , 0.0],[50.000,  , , , , 0.0],[57.373,  , , , , 0.0]],  //13
[[ 0.007,  , , , , 0.0],[10.000,  , , , , 0.0],[20.000,  , , , , 0.0],[27.373,  , , , , 0.0],
 [30.007,  , , , , 0.0],[40.000,  , , , , 0.0],[50.000,  , , , , 0.0],[57.373,  , , , , 0.0]],  //14
[[ 0.007,  , , , , 0.0],[10.000,  , , , , 0.0],[20.000,  , , , , 0.0],[27.373,  , , , , 0.0],
 [30.007,  , , , , 0.0],[40.000,  , , , , 0.0],[50.000,  , , , , 0.0],[58.373,  , , , , 0.0]],  //15
[[ 0.007,  , , , , 0.0],[10.000,  , , , , 0.0],[20.000,  , , , , 0.0],[30.373,  , , , , 0.0],
 [33.007,  , , , , 0.0],[41.000,  , , , , 0.0],[49.000,  , , , , 0.0],[56.253,  , , , , 0.0]],  //16
[[ 5.000,  , , , , 0.0],[12.000,  , , , , 0.0],[22.000,  , , , , 0.0],[30.253,  , , , , 0.0],
 [37.000,  , , , , 0.0],[47.000,  , , , , 0.0],[52.000,  , , , , 0.0],[58.000,  , , , , 0.0]],  //17
[[ 5.000,  , , , , 0.0],[14.000,  , , , , 0.0],[23.000,  , , , , 0.0],[29.005,  , , , , 0.0],
 [35.000,  , , , , 0.0],[44.000,  , , , , 0.0],[52.000,  , , , , 0.0],[59.000,  , , , , 0.0]],  //18
[[ 6.000,  , , , , 0.0],[15.000,  , , , , 0.0],[22.000,  , , , , 0.0],[31.000,  , , , , 0.0],
 [43.000,  , , , , 0.0],[51.000,  , , , , 0.0],[58.453,  , , , , 0.0]],  //19
[[ 6.000,  , , , , 0.0],[14.000,  , , , , 0.0],[23.000,  , , , , 0.0],[34.000,  , , , , 0.0],
 [44.000,  , , , , 0.0],[52.005,  , , , , 0.0],[57.553,  , , , , 0.0]],  //20
[[ 2.000,  , , , , 0.0],[12.000,  , , , , 0.0],[21.000,  , , , , 0.0],[32.000,  , , , , 0.0],
 [45.000,  , , , , 0.0],[55.000,  , , , , 0.0]],  //21
[[ 5.000,  , , , , 0.0],[15.000,  , , , , 0.0],[27.000,  , , , , 0.0],[36.000,  , , , , 0.0],
 [45.553,  , , , , 0.0],[49.005,  , , , , 0.0]],  //22
[[ 1.000,  , , , , 0.0],[ 9.000,  , , , , 0.0],[19.000,  , , , , 0.0],[36.000,  , , , , 0.0],
 [52.000,  , , , , 0.0]]];  //23時台
//}
//[AA.aaa, B,C,D,E, F.f],[AA.aaa, B,C,D,E, F.f],[AA.aaa, B,C,D,E, F.f]
const dep = departure; departure = [];
var i_max = 5, dep1, dep2, dep3;
let next = []; next.length = i_max;
var H, M, doc_dep = "";
user_exp = 1; //初期値はユーザー設定の初期設定による

function while_j_isMax(){  //dep[H][j]===undefinedとなるときの処理
    while(j === dep[H].length){ //ifだとバグが発生(1-4時台に電車がないため)
        H++, j = 0;
        if(H === 24) {H = 0;}
        }
}
function Ltd_info(){  //特急の情報
    if(H === 19) {x = "1号(浅草発): せんげん台";}
    else if(H === 20) {x = "2号(大宮発): 春日部";}
    else if(H === 22) {x = "4号(大宮発): 春日部";}
    doc_dep += "アーバンパークライナー" + x 
        + " → <b>運河 → 柏</b> 間は<b>特急券不要</b><br>";
}
function defMkdep(){  //define M,k,dep1-3
    M = Math.floor(dep[H][j][0]),
    k = (dep[H][j][0] *1000) % 1000,    //  kはコード
    dep1 = Math.floor(k / 100),         // 100の位を取り出す
    dep2 = Math.floor((k % 100) / 10),  //  10の位を取り出す
    dep3 = Math.floor(k % 5);           //   1の位を取り出す
}


function fDep(){
    document.getElementById("depArea").innerHTML = "";
    
    H = t0_h, j = 0;
    while(j !== dep[H].length && t0_m > Math.floor(dep[H][j][0])) {j++;}
    j -= show_left;  //前の電車ボタンを押したとき以外 show_left === 0
    while(j < 0) {H -= 1; j += dep[H].length;}
    
    
    for(i = 0; i < i_max; i++, j++){  //i_max回処理を行う
        while_j_isMax();  //dep[H][j]===undefinedとなるときの処理
        defMkdep();  //define M,k,dep1,dep2,dep3
        
        while(user_exp === 0 && dep1 >= 2){  //各駅停車のみ検索用
            j++;
            while_j_isMax();
            defMkdep();  //define M,k,dep1-3
        }
        
        doc_dep = "<div id='dep-" + i + "'><b><sapn class='depL'> "
                + if9(H) + ":" + if9(M) 
                + " <span class='code1_" + dep1 + "'>" + code1[dep1]  + "</span>"
                + " " + code2[dep2] + "行 " 
                + code3[dep3] + "</span><span class='depM'>番線発";
        if(k % 10 >= 5) {doc_dep += "  運河始発";}
        if(H === 0 && M === 52) {doc_dep += "<span class='redB'> 終電</span>";} //終電
        
        doc_dep += "</span></b><span id='arr-" + i + "'></span></div>" // 1行目
                    + "<span id='time-"  + i + "'>***</span>";  // 2行目
        if(i === 0) {doc_dep += "<span id='time2'></span>";}
        doc_dep += "<br>";
        
        next[i] = [H, j, M]; //nowClock関数などで使用
        
        if(dep1 >= 4) {Ltd_info();}               // 3行目以降
        if(dep1 <= 2) {doc_dep += doc_local;}     // 3行目以降
        else if(dep1 >= 3) {doc_dep += doc_exp;}  // 3行目以降
        
        document.getElementById("depArea").innerHTML += doc_dep
                + "<br><span id='add-" + i + "'></span><br><br>";
    }
}

function nowClock(){
    if(hide === 1) {fDep(); hide = 0, lastSec = t0_s;}
    var t0 = new Date();
    
    t0_h = t0.getHours(), t0_m = t0.getMinutes(), t0_s = t0.getSeconds();
            //既に宣言済みの変数
    
    
    document.getElementById("clock").innerHTML
            = t0_h + ":" + if9(t0_m) + ":" + if9(t0_s);
    document.getElementById("clock2").innerHTML
            = t0_h + ":" + if9(t0_m) + ":" + if9(t0_s);
    
    debug("test1_" + t0_m);
    
    for(i = 0; i < i_max; i++){
        //output("add-"+i, "test1_" + t0_s);
        
        var timelimit = [next[i][0] - t0_h, next[i][2] - t0_m - 1, 60 - t0_s];
        if(timelimit[2] === 60) {timelimit[2] = 0, timelimit[1] += 1;}
        if(timelimit[1] < 0) {timelimit[0] -= 1, timelimit[1] += 60;}
        
        if(t0_h > 15 && next[i][0] < 15) {
            timelimit[0] += 24;
        }
            //0時以降の電車が発車済み扱いになるバグの対策
            //★★★要解決: 15時前後のバグ★★★
        
        
        if(timelimit[0] >= 0){
            document.getElementById("time-"+i).innerHTML
                    = " 発車まで <span class='depM'>" + if9(timelimit[0]) + ":" 
                    + if9(timelimit[1]) + ":" + if9(timelimit[2]) + "</span>";
        }else{
            var timelimit = [t0_h - next[i][0], t0_m - next[i][2], t0_s];
            if(timelimit[1] < 0) {timelimit[0] -= 1, timelimit[1] += 60;}
            
            document.getElementById("time-"+i).innerHTML
                    = "<font color='#dc143c'> 経過時間 <span class='depM'>" + if9(timelimit[0])
                    + ":" + if9(timelimit[1]) + ":" + if9(timelimit[2]) + "</span></font>";
            
            //document.getElementById("time-"+i).innerHTML
            //        = "<font color='#dc143c'> 経過時間 <span class='depM'>";
            //document.getElementById("time-"+i).innerHTML += if9(timelimit[0])
            //        + ":" + if9(timelimit[1]) + ":" + if9(timelimit[2]) + "</span></font>";
            
            if(timelimit[1] >= 1){
                if(document.getElementById("auto_check").checked) {fDep();}
                else if(timelimit[1] === 0 && timelimit[2] === 0)
                    {document.getElementById("time2").innerHTML = "&ensp;既に発車";}
            }
        }
        
        /*
        if(timelimit[1] === 0 && i === 0){  //発車時刻前後1分以内のとき
            document.getElementById("time2").innerHTML
                    = "&ensp;<span class='redB'>まもなく発車</span>";
            if(lastSec !== t0_s && t0_s % 3 === 0 && hide === 0) {
                hide = 4;  // hideは(発車前後1分の項目を) 0.2(hide-1)秒間隠す
                output("dep-"+i, "<div class='depL'>&ensp;</div>");
            }
            if(hide > 0){
                hide--;
            }
        } */
        //document.getElementById("add-"+i).innerHTML = "achieved" + t0_s;
    }
}

fDep();
var clock_interval = setInterval("nowClock()",200);


document.write("<br><br><br><br><br><br><br>" +
        "This system is valid until<br>(システム有効期限):"
        + Date2(Valid));



function before(x){
    show_left += x;
    //add_i_max(5); //関数fDep()はadd_i_max(5)に含まれる
    clearInterval(clock_interval);
    fDep();
    var clock_interval = setInterval("nowClock()",200);
    
    document.getElementById("show_before").innerHTML
            = show_left + "本前の列車から表示中";
    
    for(i = 0; i < i_max; i++){
        document.getElementById("add-"+i).innerHTML += "i=" + i;
    }
}
function add_i_max(x){
    i_max += x;
    fDep();
    document.getElementById("show_i_max").innerHTML = i_max;
}
function reset(x,y){
    show_left = x, i_max = y;
    fDep();
    document.getElementById("show_before").innerHTML = "";
    document.getElementById("show_i_max").innerHTML = i_max;
}

function arr_info(x){
    document.getElementById("spaceA").innerHTML = x; //MUST deleted
    for(i = 0; i < i_max; i++){
        document.getElementById("arr-"+i).innerHTML
                = next[i][0] + "時台" + (next[i][1] + 1) + "番目" + next[i][2] + "分発";
        document.getElementById("add-"+i).innerHTML
                = next[i][0] + "時台" + (next[i][1] + 1) + "番目" + next[i][2] + "分発";
    }
}






/* 想定するUI例
 * 現在時刻: **:**:**  
 * 到着駅選択へ
 * 
 * 次の電車は / Next departure:
 *  **:** 普通 柏行   3番線発  → **:**着 (**分)
 *     あと *:**(取り消し線)　次の電車が先着！ / The next train arrives first
 *  **:** 急行 船橋行 2番線発  → **:**着 (**分) 先着
 *     あと *:**(赤字)
 *  **:** 普通 柏行   2番線発  → **:**着 (**分)
 *     あと *:**  運河始発
 * 
 * 前の電車を確認 / 後の電車を確認
 * 
 * （出発駅構内図）
 * 
 * 到着駅を選択すると、到着駅情報を表示します
 * （中略）
 * 
 * 到着駅の情報: お出口は左側です
 * オススメ乗降口: 先頭を6号車として、下記の通り
 *      *号車 前から*番目のドア (階段に近い)
 *      *号車 前から*番目のドア (エスカレーター・階段に近い)
 *      1号車 前から1番目のドア (3・4番線連絡通路(ホーム奥)・トイレに近い)
 * （到着駅構内図）
 * 
 * 
 *  Code (含める情報: 種別,行先,番線,始発,特急〇号,時刻)
 *    * dep1 種別  1,0:普通 / 2:区間急行 / 3:急行 / 4:特急(浅草発着) / 5:特急(4以外)
 *    * dep2 行先  1:大宮 / 2:春日部 / 3:七光台 / 4:運河 / 5,0:柏 / 6:高柳 / 7:船橋
 *    * dep3 番線・始発  n:n番線(始発でない) / n+5:n番線(始発) / 0:不明等
 *  
 *  
 *  
 *  行列depの解説
 *  (H = 0, 1, 2, ... , 23,  k = 0, 1, 2, ... , (a時台の電車の本数 -1) )
 *  dep[H][k] === [AA.aaa, B.b, C.c, D.d, E.e, ... ]
 *      (大文字は整数部分, 小文字は小数部分)
 *  
 *  AA  = H時台のk+1番目に来る電車の出発時刻(分) 
 *  aaa = 上記電車のコード (1-3桁)
 *      コードの100の位は種別, 10の位は行先, 
 *      1の位を5で割った商が 1なら始発, 0なら始発でない
 *                      余りが 発着番線
 *  B, C, D, E, ... === 次駅, 次々駅, ... までの所要時間(分)
 *  b, c, D, E, ... === 次駅, 次々駅, ... での到着番線
 *  
 *  
 *  
 *          Code = [[0,0,0,2],[],[],[],[],  //0-4
            [70,70,70,70,0,0,70],
            [70,0,70,0,0,0,70,0,0],  //5-6
            [0,0,5,0,0,0,5,0,0],
            [5,0,5,0,0,0,0,0,0],  //7-8
            [5,0,0,0,0,0,0],
            [0,0,373,7,0,0,373],  //9-10
            [7,0,0,373,77,0,0,373],
            [7,0,0,373,7,0,0,373],  //11-12
            [7,0,0,373,7,0,0,373],
            [7,0,0,373,7,0,0,373],  //13-14
            [7,0,0,373,7,0,0,373],
            [7,0,0,373,7,0,0,203],  //15-16
            [],[],  //17-18
            [],[]],
 *  
 *  
 *  function whileDepLength(x,y){
    while(x === dep[y].length){
        x = 0;
        y++;
        if(y === 24) {y = 0;}
        alert("1");
    }
}
 *  
 *  
 *  
 *  
 *  
 *  
 *  
 *  
 *  
 *  document.write(j);
    if(j === dep[H].length){
        document.write("j="+j+", dep[H].length="+dep[H].length
                +",<br>H="+H+", t0_h="+t0_h+
                ",<br>");
        
    }
 * */



