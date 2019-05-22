// function Refresh() {  //刷新产生随机摆放的图片函数
//   // alert("志银");
//   var b = [];
//   for(var i = 0; i <= 16; i++) {  //初始值全为1,用来标记随机抽取的图片是否重复
//     b[i] = false;
//   }
//   // document.getElementById("info").innerText += b;
//   for(var i = 1; i <= 16; i++) {  //找0~15的16个随机数
//     var num = Math.floor(Math.random()*16);  //产生0~15的随机数(floor为向下取整)
//     while(b[num]) {  //如果图片重复,则一直循环找图片的编号
//       num = Math.floor(Math.random()*16);
//     }
//     b[num] = true;  //标记该图片编号找到过
//     // document.getElementById("info").innerText += num+"　";
//     var td = document.getElementById("td"+i);
//     if(num == 0) {
//       td.style.backgroundImage = "";
//     } else {
//       td.style.backgroundImage = "url(image/dog_"+num+".jpg)";
//     }
//   }
// }
var rd = "0";  //记录玩家移动的步骤和撤销的步数
var imgfile = "Image4_4g";  //储蓄拼图文件所在的文件夹,用来切换提示图片
var startnum = 0;  //记录单击开始按钮的次数
var kong = 0;  //代表当前空格子的td位置编号
var upset_num = "000", player_num = "000", player = true;  //随机打乱图片所用的步数和玩家移动的步数
var m = 0, s = 0, ms = 0;  //计时器记录玩家完成游戏所用时间
var timer0;  //延迟消息触发时间
function Timer() {  //计时器
  var m_string ="", s_string = "";
  if(s <= 9) {
    s_string = "0"+s;
  } else {
    s_string = s;
  }
  if(m <= 9) {
    m_string = "0"+m;
  } else {
    m_string = m;
  }
  document.getElementById("imgtext4").innerText = "Time:"+m_string+":"+s_string+"."+ms;  //显示计时情况
  if(ms <= 8) {
    ms++;
  } else {
    ms = "0";
    if(s <= 58) {
      s++;
    } else {
      s = "0";
      if(m <= 58) {
        m++;
      } else {
        alert("1h, Long Time!!");
      }
    }
  }
  timer0 = setTimeout(Timer, 100);  //延迟消息触发
}
function InfoMess() {  //最下方的进度条控制
  var me = document.getElementById("mess"), l = MessDegree()*44;
  if(l == 660) {
    l = 700;
  }
  me.style.width = l+"px";
  switch(l) {
    case 44*1: me.style.background = "rgba(128,255,0,0.7)"; break;
    case 44*2: me.style.background = "rgba(1,252,0,0.7)"; break;
    case 44*3: me.style.background = "rgba(2,253,128,0.7)"; break;
    case 44*4: me.style.background = "rgba(149,254,156,0.7)"; break;
    case 44*5: me.style.background = "rgba(85,255,157,0.7)"; break;
    case 44*6: me.style.background = "rgba(124,255,212,0.7)"; break;
    case 44*7: me.style.background = "rgba(150,252,254,0.7)"; break;
    case 44*8: me.style.background = "rgba(39,221,215,0.7)"; break;
    case 44*9: me.style.background = "rgba(29,144,251,0.7)"; break;
    case 44*10: me.style.background = "rgba(1,0,207,0.7)"; break;
    case 44*11: me.style.background = "rgba(72,61,137,0.7)"; break;
    case 44*12: me.style.background = "rgba(0,255,3,0.7)"; break;
    case 44*13: me.style.background = "rgba(254,186,12,0.7)"; break;
    case 44*14: me.style.background = "rgba(204,252,115,0.7)"; break;
    case 700: me.style.background = "rgba(0,255,0,0.1)"; break;
  }
}
function Pcyy1YC() {
  var pcyy1 = document.getElementById("audiobj");  //使背景音乐延迟几秒再播放
  pcyy1.play();  //暂停音乐
}
function Refresh() {  //页面刷新后将16张图片按顺序放入table表格中,并初始化移动步数和时间
  for(var i = 1; i <= 16; i++) {  //放图片
    var td = document.getElementById("td"+i);
    td.style.backgroundImage = "url(image/"+imgfile+"/img_"+i+".gif)";
  }
  upset_num = "000"; player_num = "000"; player = true;
  document.getElementById("imgtext3").innerText = "Num:"+upset_num+"/"+player_num;  //初始化移动步数
  InfoMess();  //最下方的进度条控制
  document.getElementById("menu_info").innerText = "Please click on the start button to disrupt the picture!";
  document.getElementById("menu_info").title = "请点击开始按钮打乱图片！";
  var pcyy1 = document.getElementById("audiobj");  //使背景音乐延迟几秒再播放
  pcyy1.pause();  //暂停音乐
  // pcyy1.volume = 0.5;  //音量控制
  setTimeout(Pcyy1YC, 2000);
}
function EmptyTd16() {  //第一次单击开始游戏时,先将第16张图片清空(注意:不是第16个格子,否则游戏中途暂停会有bug),并打乱
  document.getElementById("td16").style.backgroundImage = "";
  kong = 16;  //代表当前空格子的td位置编号
}
function MessDegree() {  //该函数返回图片打乱程度,返回15代表15张图片都在自己位置上
  var n = 0;  //在自己位置上的图片数量
  for(var i = 1; i <= 15; i++) {
    var t, k, imgn = document.getElementById("td"+i).style.backgroundImage;
    var y = true;
    for(var j = imgn.length-1; j >= 0; j--) {
      if(imgn[j] == 'f' && imgn[j-1] == 'i' && imgn[j-2] == 'g' && imgn[j-3] == '.') {
        k = j-4;
        break;
      }
    }
    if(imgn[k-1] != '_') {
      t = imgn[k-1]+imgn[k];
    } else {
      t = imgn[k];
    }
    if(t == i) {
      n++;
    }
  }
  return n;
}
function Simulate() {  //模拟人工移动方法随机打乱(可防止出现死局)
  document.getElementById("menu_info").innerText = "Is upset, please wait for a moment!";  //上方菜单提示
  document.getElementById("menu_info").title = "正在打乱，请稍等";
  var snum = Math.floor(Math.random()*4)+1;  //snum为随机数1~4,分别代表上下左右移动图片操作;
  var k = kong;
  switch(snum) {
    case 1: Up();  //向上移动图片
            if(MessDegree() >= 15 && k != kong) Down();
            break;
    case 2: Down();  //向下
            if(MessDegree() >= 15 && k != kong) Up();
            break;
    case 3: Left();  //向左
            if(MessDegree() >= 15 && k != kong) Right();
            break;
    case 4: Right();  //向右
            if(MessDegree() >= 15 && k != kong) Left();
            break;
  }
  InfoMess();  //最下方的进度条控制
  upset_num++;  //记录模拟人工打乱的步数
  var up_n_string;
  if(upset_num < 10) {
    up_n_string = "00"+upset_num;
  } else if(upset_num >=10 && upset_num < 100) {
    up_n_string = "0"+upset_num;
  } else {
    up_n_string = upset_num;
  }
  document.getElementById("imgtext3").innerText = "Num:"+up_n_string+"/"+player_num;

  var time1 = setTimeout(Simulate, 10);  //延迟消息触发

  var pcyy1 = document.getElementById("audiobj");
  pcyy1.pause();  //暂停音乐

  if(MessDegree() == 0) {  //一张在自己位置上的图片都没有才结束打乱
    clearTimeout(time1);  //清除延迟消息触发事件
    upset_num = up_n_string;
    player = true;  //可以开始记录玩家移动次数了
    Timer();  //开始计时器
    document.getElementById("menu_info").innerText = "Complete upset, you can play!";
    document.getElementById("menu_info").title = "完成打乱，你可以玩了！";
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.pause();  //暂停音乐
    pcyy.src = "./music/start.mp3";
    pcyy.play();
    var pcyy1 = document.getElementById("audiobj");
    pcyy1.play();
    startnum++;
    rd = "0";  //模拟人工打乱完成后开始初始化记录玩家详细步骤变量
  }
}
function FoundEmpty() {  //找到空格子的td编号
  for(var i = 1; i <= 16; i++) {
    var td = document.getElementById("td"+i);
    if(td.style.backgroundImage == "") {  //找到哪个格子里面没有图片,判断某个格子里的图片是哪张td.style.backgroundImage == "url(http://localhost/www/game/puzzle/image/dog_4.jpg)"
      // document.getElementById("info").innerText += "\rczyczyczy";
      return i;
      break;
    }
  }
  return 0;
}
function FoundMove(f) {  //找出照片需要换位置的照片的名字编号并替换空格子
  // alert(Number(kong+f));
  var t, k, imgn = document.getElementById("td"+Number(kong+f)).style.backgroundImage;
  for(var i = imgn.length-1; i >= 4; i--) {
    if(imgn[i] == 'f' && imgn[i-1] == 'i' && imgn[i-2] == 'g' && imgn[i-3] == '.') {
      k = i-4;
      break;
    }
  }
  if(imgn[k-1] != '_') {
    t = imgn[k-1]+imgn[k];
  } else {
    t = imgn[k];
  }
  // document.getElementById("info").innerText += "\r"+len+"-->"+document.getElementById("td1").style.backgroundImage;
  // document.getElementById("info").innerText += t+"　";
  document.getElementById("td"+kong).style.backgroundImage = "url(image/"+imgfile+"/img_"+t+".gif)";
  document.getElementById("td"+Number(kong+f)).style.backgroundImage = "";
  kong += f;
}
function PeopleNum() {  //记录模拟人工打乱的步数
  player_num++;
  var Peo_n_string;
  if(player_num < 10) {
    Peo_n_string = "00"+player_num;
  } else if(player_num >=10 && player_num < 100) {
    Peo_n_string = "0"+player_num;
  } else {
    Peo_n_string = player_num;
  }
  document.getElementById("imgtext3").innerText = "Num:"+upset_num+"/"+Peo_n_string;
}
function pengmusic() {  //图片交换碰撞声音
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/peng.mp3";
    pcyy.play();
  }
}
function Tihuan(rd, player_num, a) {  //自定义替换函数，将rd串的第player_num个字符替换成字符a
  var s = "";  //s为玩家步骤变化后的详细步骤
  for(var i = 0; i <= player_num-1; i++) {
    s += rd[i];
  }
  s += a;
  for(var i = player_num+1; i < rd.length && rd[i] != '5'; i++) {// && i <= player_num
    s += rd[i];
  }
  return s;
}
function Up() {  //图片块向上移动函数
  var kong = FoundEmpty();  //储存没有图片的格子的编号
  if(kong+4 <= 16 && kong > 0) {  //如果下面有图片就进行上移操作(原理:交换上下两图片位置)
    pengmusic();  //图片交换碰撞声音
    FoundMove(4);  //找出照片需要换位置的照片的名字编号并替换空格子
    if(player){
      PeopleNum();  //记录玩家移动步数
      rd += "5";
      rd = Tihuan(rd, player_num, '1');  //自定义替换函数，将rd串的第player_num个字符替换成'1'
      // alert(rd);
    }
  }
}
function Down() {  //图片块向下移动函数
  var kong = FoundEmpty();  //储存没有图片的格子的编号
  if(kong-4 >= 1) {
    pengmusic();  //图片交换碰撞声音
    FoundMove(-4);  //找出照片需要换位置的照片的名字编号并替换空格子
    if(player){
      PeopleNum();  //记录玩家移动步数
      rd += "5";
      rd = Tihuan(rd, player_num, '2');  //自定义替换函数，将rd串的第player_num个字符替换成'1'
      // alert(rd);
    }
  }
}
function Left() {  //图片块向左移动函数
  var kong = FoundEmpty();  //储存没有图片的格子的编号
  if(kong+1 != 5 && kong+1 != 9 && kong+1 != 13 && kong+1 != 17 && kong != 0) {
    pengmusic();  //图片交换碰撞声音
    FoundMove(1);  //找出照片需要换位置的照片的名字编号并替换空格子
    if(player){
      PeopleNum();  //记录玩家移动步数
      rd += "5";
      rd = Tihuan(rd, player_num, '3');  //自定义替换函数，将rd串的第player_num个字符替换成'1'
      // alert(rd);
    }
  }
}
function Right() {  //图片块向右移动函数
  var kong = FoundEmpty();  //储存没有图片的格子的编号
  if(kong-1 != 4 && kong-1 != 8 && kong-1 != 12 && kong-1 != 0 && kong != 0) {
    pengmusic();  //图片交换碰撞声音
    FoundMove(-1);  //找出照片需要换位置的照片的名字编号并替换空格子
    if(player){
      PeopleNum();  //记录玩家移动步数
      rd += "5";
      rd = Tihuan(rd, player_num, '4');  //自定义替换函数，将rd串的第player_num个字符替换成'1'
      // alert(rd);
    }
  }
}
function complete() {  //判断是否完成拼图
  InfoMess();  //最下方的进度条控制
  if(MessDegree() >= 15 && document.getElementById("td16").style.backgroundImage == "") {
    document.getElementById("td16").style.backgroundImage = "url(image/"+imgfile+"/img_16.gif)";
    MouseoverSP();  //完成拼图后需要把按钮按回暂停样式(必须要以下两个鼠标事件函数)
    MousedownSP();
    MouseupSP();
    MouseoutSP();
    startnum = 0;  //通关之后作为重新开始游戏,单击开始按钮次数改为0
    // document.getElementById("menu_info").innerText = "Please click on the start button to disrupt the picture!";
    document.getElementById("menu_info").innerText = "Orz,Worship God!";
    document.getElementById("menu_info").title = "Orz，膜拜大神！";
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/mbgod.mp3";
    pcyy.play();
    // alert("恭喜你通关了！");
  }
}
function keyboard(e){  //自定义键盘按键事件函数
  var d1 = document.getElementById("imgbutton"), k;
  for(var i = d1.src.length-1; i >= 4; i--) {  //找到按钮图片名字的编号
    if(d1.src[i] == 'g' && d1.src[i-1] == 'n' && d1.src[i-2] == 'p' && d1.src[i-3] == '.') {
      k = d1.src[i-4];  //找到了的图片名字的编号
      break;
    }
  }
  if(k == 3 || k == 4) {  //非暂停游戏状态下才能操作图片移动
    if(e && e.keyCode == 87 || e && e.keyCode == 38) {
      Up();  //向上移动图片操作
      // document.getElementById("info").innerText += "\r"+e.keyCode;
      // alert("ESC");
    } else if(e && e.keyCode == 83 || e && e.keyCode == 40) {
      Down();
      // document.getElementById("info").innerText += "\r"+e.keyCode;
    } else if(e && e.keyCode == 65 || e && e.keyCode == 37) {
      Left();
    } else if(e && e.keyCode == 68 || e && e.keyCode == 39) {
      Right();
    }
    complete();  //判断是否完成拼图
  }
}
// =====================鼠标相关事件=====================================================
//--------------最上方菜单内元素事件-------------------------------
//.......返回前一个游戏菜单界面return0按钮
//---移动经过事件
function MouseoverRN(e) {  //鼠标移动到return0元素事件
  var el = e.target;
  el.style.height = "60px";
  el.style.width = "110px";
  el.style.boxShadow = "inset 0 0 10px #00C";
  el.style.fontSize = "20px";
  el.style.lineHeight = "60px";
  el.style.cursor = "pointer";
  el.style.transition = "0.3s";
  // alert("fdsaf");
  // var rn01 = document.getElementById("return01");
  // rn01.
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/return.mp3";
    pcyy.play();
  }
}
function MouseoutRN(e) {  //鼠标离开return0元素事件
  var el = e.target;
  el.style.height = "50px";
  el.style.width = "100px";
  el.style.boxShadow = "";
  el.style.fontSize = "18px";
  el.style.lineHeight = "50px";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.pause();  //暂停
    pcyy.src = "";
  }
}
//---单击事件
function MousedownRN(e) { //鼠标按下return0触发事件
  window.location.href = "../PuzzleMoShi/index.html";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/resetanxia.mp3";
    pcyy.play();
  }
}
//.......重置当前游戏界面reset按钮..........................
//---移动经过事件
function MouseoverRT0(e) {  //鼠标移动到reset0元素事件
  var el = e.target;
  el.style.height = "60px";
  el.style.width = "110px";
  el.style.boxShadow = "inset 0 0 10px #0C0";
  el.style.fontSize = "20px";
  el.style.lineHeight = "60px";
  el.style.cursor = "pointer";
  el.style.transition = "0.3s";
  var rtn = document.getElementById("reset_n");
  rtn.style.top = "60px";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/reset.mp3";
    pcyy.play();
  }
}
function MouseoverRTY(e) {
  var rt0 = document.getElementById("reset0");
  rt0.style.height = "60px";
  rt0.style.width = "110px";
  rt0.style.boxShadow = "inset 0 0 10px #0C0";
  rt0.style.fontSize = "20px";
  rt0.style.lineHeight = "60px";
  var el = e.target;
  el.style.height = "55px";
  el.style.width = "55px";
  el.innerText = "Yes!";
  el.style.boxShadow = "inset 0 0 10px #FF0000";
  el.style.cursor = "pointer";
  var rtn = document.getElementById("reset_n");
  rtn.style.top = "60px";
}
function MouseoverRTN(e) {
  var rt0 = document.getElementById("reset0");
  rt0.style.height = "60px";
  rt0.style.width = "110px";
  rt0.style.boxShadow = "inset 0 0 10px #0C0";
  rt0.style.fontSize = "20px";
  rt0.style.lineHeight = "60px";
  var el = e.target;
  el.style.height = "55px";
  el.style.width = "55px";
  el.innerText = "No!";
  el.style.boxShadow = "inset 0 0 10px #00FF00";
  el.style.cursor = "pointer";
  el.style.top = "60px";
}
function MouseoutRT0(e) {  //鼠标离开reset0元素事件
  var el = e.target;
  el.style.height = "50px";
  el.style.width = "100px";
  el.style.boxShadow = "";
  el.style.fontSize = "18px";
  el.style.lineHeight = "50px";
  var rty = document.getElementById("reset_y");
  rty.style.height = "0px";
  rty.innerText = "";
  var rtn = document.getElementById("reset_n");
  rtn.style.top = "50px";
  rtn.style.height = "0px";
  rtn.innerText = "";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.pause();  //暂停
    pcyy.src = "";
  }
}
function MouseoutRTY(e) {
  var rt0 = document.getElementById("reset0");
  rt0.style.height = "50px";
  rt0.style.width = "100px";
  rt0.style.boxShadow = "";
  rt0.style.fontSize = "18px";
  rt0.style.lineHeight = "50px";
  var el = e.target;
  el.style.height = "0px";
  el.innerText = "";
  el.style.boxShadow = "";
}
function MouseoutRTN(e) {
  var rt0 = document.getElementById("reset0");
  rt0.style.height = "50px";
  rt0.style.width = "100px";
  rt0.style.boxShadow = "";
  rt0.style.fontSize = "18px";
  rt0.style.lineHeight = "50px";
  var el = e.target;
  el.style.height = "0px";
  el.innerText = "";
  el.style.boxShadow = "";
  el.style.top = "50px";
}
//---单击事件
function MousedownRT0(e) { //鼠标按下reset0触发事件
  var el = e.target;
  el.style.background = "rgba(0,255,0,0.5)"
  el.style.boxShadow = "";
  var rty = document.getElementById("reset_y");
  rty.style.height = "55px";
  rty.style.width = "55px";
  rty.style.background = "rgba(0,255,0,0.5)";
  // rty.style.boxShadow = "inset 0 0 10px #FF0000";
  rty.innerText = "Yes!";
  rty.style.transition = "0.3s";
  var rtn = document.getElementById("reset_n");
  rtn.style.height = "55px";
  rtn.style.width = "55px";
  rtn.style.background = "rgba(255,0,0,0.5)";
  rtn.innerText = "No!";
  rtn.style.transition = "0.3s";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/resetanxia.mp3";
    pcyy.play();
  }
}
function MousedownRTY(e) {
  window.location.href = "index.html";  //重新加载当前页面达到重置效果
}
function MousedownRTN(e) {
  MouseoutRTN(e);
}
function MouseupRT0(e) { //鼠标松开reset事件
  var el = e.target;
  el.style.background = "rgba(116,197,226, 0.8)"
  el.style.boxShadow = "inset 0 0 10px #0C0";
}
//--------------td里的div元素事件-------------------------------
//---移动经过事件
function MouseoverTd(e) {  //鼠标移动到td里的div元素事件
  var el = e.target, k;
  if(el.id[2]) {
    k = el.id[1]+el.id[2];
  } else {
    k = el.id[1];
  }
  if(k != FoundEmpty()) {
    /*鼠标样式[<uri> ,]*: 根据用户定义的资源显示;
    crosshair: 十字鼠标;
    default: 默认鼠标;
    pointer:点状鼠标;
    move:移动鼠标;
    text: 文字鼠标;
    wait: 等待鼠标;
    help: 求助鼠标;
    progress: 过程鼠标;
    inherit: 继承
    e-resize是向右的箭头
    ne-resize是向右上的箭头
    n-resize是向上的箭头
    nw-resize是向左上的箭头
    w-resize是向左的箭头
    sw-resize是左下的箭头
    s-resize是向下的箭头
    se-resize是向右下的箭头
    auto是由系统自动给出效果
    */
    var k1 = parseInt(k, 10);
    if(k1-4 >= 1 && k1-4 == FoundEmpty()) {  //鼠标所指的格子上方是否是空格子,FoundEmpty()为找到空格子的td编号函数
      el.style.cursor = "n-resize";
      el.style.background = "rgba(194,236,40,0.2)";  //"linear-gradient(135deg, rgba(194,236,40,0.2), rgba(194,236,40,0.2))"; //径向渐变
      el.style.boxShadow = "inset 0 0 10px #C2EC28";  //设置div向内部渐变
    } else if(k1+4 <= 16 && k1+4 == FoundEmpty()) {  //下方
      el.style.cursor = "n-resize";
      el.style.background = "rgba(194,236,40,0.2)";
      el.style.boxShadow = "inset 0 0 10px #C2EC28";
    } else if((k1-1 != 4 && k1-1 != 8 && k1-1 != 12 && k1-1 != 0 && k1-1 ==  FoundEmpty()) || (k1+1 != 5 && k1+1 != 9 && k1+1 != 13 && k1+1 != 17 && k1+1 == FoundEmpty())) {  //左方和右方
      el.style.cursor = "e-resize";
      el.style.background = "rgba(194,236,40,0.2)";
      el.style.boxShadow = "inset 0 0 10px #C2EC28";
    } else {
      el.style.cursor = "move";
      el.style.background = "rgba(116,197,226,0.2)";
      el.style.boxShadow = "inset 0 0 10px #0CC";
    }
  }
  // alert(k+4);
}
function MouseoutTd(e) {  //鼠标离开td里的div元素事件
  var el = e.target;
  el.style.background = "";
  el.style.boxShadow = "";
  el.style.cursor = "default";
}
//---单击事件
function MousedownTd(e) {  //鼠标按下触发拼图区域事件
  var d1 = document.getElementById("imgbutton"), k2;
  for(var i = d1.src.length-1; i >= 4; i--) {  //找到按钮图片名字的编号
    if(d1.src[i] == 'g' && d1.src[i-1] == 'n' && d1.src[i-2] == 'p' && d1.src[i-3] == '.') {
      k2 = d1.src[i-4];  //找到了的图片名字的编号
      break;
    }
  }
  var el = e.target, k;  //el为获取td元素
  if(el.id[2]) {
    k = el.id[1]+el.id[2];
  } else {
    k = el.id[1];
  }
  var k1 = parseInt(k, 10);  //当前格子的编号的十进制数
  if(k2 == 3 || k2 == 4) {  //非暂停游戏状态下才能操作图片移动
    if(k1-4 >= 1 && k1-4 == FoundEmpty()) {  //鼠标所指的格子上方是否是空格子,FoundEmpty()为找到空格子的td编号函数
      Up();
      el.style.background = "";
      el.style.boxShadow = "inset 0 0 10px #0CC";
      el.style.cursor = "move";
    } else if(k1+4 <= 16 && k1+4 == FoundEmpty()) {  //向下
      Down();
      el.style.background = "";
      el.style.boxShadow = "inset 0 0 10px #0CC";
      el.style.cursor = "move";
    } else if(k1-1 != 4 && k1-1 != 8 && k1-1 != 12 && k1-1 != 0 && k1-1 ==  FoundEmpty()) {  //向左
      Left();
      el.style.background = "";
      el.style.boxShadow = "inset 0 0 10px #0CC";
      el.style.cursor = "move";
    } else if(k1+1 != 5 && k1+1 != 9 && k1+1 != 13 && k1+1 != 17 && k1+1 == FoundEmpty()) {  //向右
      Right();
      el.style.background = "";
      el.style.boxShadow = "inset 0 0 10px #0CC";
      el.style.cursor = "move";
    }
    complete();  //判断是否完成拼图
  }
}
function MouseupTd(e) {  //松开鼠标触发拼图区域事件
  var d1 = document.getElementById("imgbutton"), k2, el = e.target;
  for(var i = d1.src.length-1; i >= 4; i--) {  //找到按钮图片名字的编号
    if(d1.src[i] == 'g' && d1.src[i-1] == 'n' && d1.src[i-2] == 'p' && d1.src[i-3] == '.') {
      k2 = d1.src[i-4];  //找到了的图片名字的编号
      break;
    }
  }
  var k;
  if(el.id[2]) {
    k = el.id[1]+el.id[2];
  } else {
    k = el.id[1];
  }
  if(k2 == 3 || k2 == 4) {
    if(k == kong) {
      el.style.boxShadow = "";
    }
  }
}

//--------------右边操作相关事件-------------------------------
//开始或暂停按钮事件
//---移动经过事件
function MouseoverSP(e) {  //鼠标移动到开始或暂停按钮区域事件
  //var el = e.target;  //获取当前标签对象
  var d1 = document.getElementById("imgbutton"), k;
  var d2 = document.getElementById("start");
  var d3 = document.getElementById("imgtext2_2");
  var d4 = document.getElementById("imgtext2_1");
  // alert(d1.src[50]);
  for(var i = d1.src.length-1; i >= 4; i--) {  //找到按钮图片名字的编号
    if(d1.src[i] == 'g' && d1.src[i-1] == 'n' && d1.src[i-2] == 'p' && d1.src[i-3] == '.') {
      k = d1.src[i-4];  //找到了的图片名字的编号
      break;
    }
  }
  if(k == 1 && player) {  //移进来前是淡红色
    if(startnum != 1) {
      var pcyy = document.getElementById("music");  //播放语音
      pcyy.src = "./music/anniu1.mp3";
      pcyy.play();
    }
    d1.src = "./image/Icon/button2.png";
    d2.style.background = "rgba(241,122,114, 1)";  //变成深红色
    d2.style.boxShadow = "0 0 10px #00FF00";
    d3.style.background = "rgba(0,0,255,0.5)";
  } else if(k == 3 && player) {  //是淡绿色的话
    if(startnum != 1) {
      var pcyy = document.getElementById("music");  //播放语音
      pcyy.src = "./music/anniu1.mp3";
      pcyy.play();
    }
    d1.src = "./image/Icon/button4.png";
    d2.style.background = "rgba(194,236,40, 1)"  //变为深绿色
    d2.style.boxShadow = "0 0 10px #FF0000";
    d4.style.background = "rgba(0,0,255,0.8)";
  }
  d1.style.cursor = "pointer";  //鼠标手形样子
  d2.style.cursor = "pointer";
}
function MouseoutSP(e) {  //鼠标离开开始或暂停按钮区域事件
  var d1 = document.getElementById("imgbutton"), k;
  var d2 = document.getElementById("start");
  var d3 = document.getElementById("imgtext2_2");
  var d4 = document.getElementById("imgtext2_1");
  for(var i = d1.src.length-1; i >= 4; i--) {  //找到按钮图片名字的编号
    if(d1.src[i] == 'g' && d1.src[i-1] == 'n' && d1.src[i-2] == 'p' && d1.src[i-3] == '.') {
      k = d1.src[i-4];  //找到了的图片名字的编号
      break;
    }
  }
  if(k == 2 && player) {
    if(startnum != 1) {
      var pcyy = document.getElementById("music");  //播放语音
      pcyy.src = "./music/anniu1.mp3";
      pcyy.play();
    }
    d1.src = "./image/Icon/button1.png";
    d2.style.background = "rgba(241,122,114, 0.7)";
    d2.style.boxShadow = "";
    d3.style.background = "rgba(0,0,255,0.3)";
  } else if(k == 4 && player) {
    if(startnum != 1) {
      var pcyy = document.getElementById("music");  //播放语音
      pcyy.src = "./music/anniu1.mp3";
      pcyy.play();
    }
    d1.src = "./image/Icon/button3.png";
    d2.style.background = "rgba(194,236,40, 0.7)"
    d2.style.boxShadow = "";
    d4.style.background = "rgba(0,0,255,0.6)";
  }
}
//---单击事件
function MousedownSP(e) {  //鼠标按下触发开始或暂停按钮区域事件
  var d1 = document.getElementById("imgbutton"), k;
  var d2 = document.getElementById("start");
  var d3 = document.getElementById("imgtext2_2");
  var d4 = document.getElementById("imgtext2_1");
  for(var i = d1.src.length-1; i >= 4; i--) {  //找到按钮图片名字的编号
    if(d1.src[i] == 'g' && d1.src[i-1] == 'n' && d1.src[i-2] == 'p' && d1.src[i-3] == '.') {
      k = d1.src[i-4];  //找到了的图片名字的编号
      break;
    }
  }
  if(k == 2 && player) {  //单击前是红色(单击开始)
    if(startnum != 1) {
      var pcyy = document.getElementById("music");  //播放语音
      pcyy.src = "./music/anniu2.mp3";
      pcyy.play();
    }
    d1.src = "./image/Icon/button3.png";
    d2.style.boxShadow = "";
    d2.style.background = "rgba(194,236,40, 0.7)";
    d3.style.background = "rgba(0,0,255,0)";
    d4.style.background = "rgba(0,0,255,0.6)";
    startnum++;  //单击开始按钮次数
    if(startnum == 1) {  //startnum=1代表图片是拼好状态
      Peo_n_string = "";
      Peo_n_string = "";
      upset_num = "000";
      player_num = "000";
      document.getElementById("imgtext3").innerText = "Num:"+upset_num+"/"+player_num;  //初始化移动步数
      player = false;  //很重要:禁止模拟人工打乱时增加玩家移动次数
      //初始化计时器
      m = 0, s = 0, ms = 0;
      document.getElementById("imgtext4").innerText = "Time:00:00.0";  //显示计时情况
      EmptyTd16();  //开始游戏,先将第16张图片清空(注意:不是第16个格子,否则游戏中途暂停会有bug)
      var pcyy = document.getElementById("music");  //播放语音
      pcyy.src = "./music/daluaning.mp3";
      pcyy.play();
      Simulate();  //模拟人工打乱图片
    } else {
      // timer0 = setTimeout(Timer, 100);  //延迟消息触发
      Timer();  //开始计时器
      document.getElementById("menu_info").innerText = "Please continue the game!";
      document.getElementById("menu_info").title = "请继续游戏！";
    }
  } else if(k == 4 && player){  //单击前是绿色(单击结束)
    if(startnum != 1) {
      var pcyy = document.getElementById("music");  //播放语音
      pcyy.src = "./music/anniu2.mp3";
      pcyy.play();
    }
    d1.src = "./image/Icon/button1.png";
    d2.style.boxShadow = "";
    d2.style.background = "rgba(241,122,114, 0.7)";
    d3.style.background = "rgba(0,0,255,0.3)";
    d4.style.background = "rgba(0,0,255,0)";
    clearTimeout(timer0);  //清除延迟消息触发事件
    document.getElementById("menu_info").innerText = "Pause in!";
    document.getElementById("menu_info").title = "暂停中!";
  }
}
function MouseupSP(e) {  //松开鼠标触发开始或暂停按钮区域事件
  var d1 = document.getElementById("imgbutton"), k;
  var d2 = document.getElementById("start");
  var d3 = document.getElementById("imgtext2_2");
  var d4 = document.getElementById("imgtext2_1");
  for(var i = d1.src.length-1; i >= 4; i--) {  //找到按钮图片名字的编号
    if(d1.src[i] == 'g' && d1.src[i-1] == 'n' && d1.src[i-2] == 'p' && d1.src[i-3] == '.') {
      k = d1.src[i-4];  //找到了的图片名字的编号
      break;
    }
  }
  if(k == 3 && player) {
    d1.src = "./image/Icon/button4.png";
    d2.style.background = "rgba(194,236,40, 1)";
    d2.style.boxShadow = "0 0 10px #FF0000";
    d4.style.background = "rgba(0,0,255,0.8)";
  } else if(k == 1 && player) {
    d1.src = "./image/Icon/button2.png";
    d2.style.boxShadow = "0 0 10px #00FF00";
    d2.style.background = "rgba(241,122,114, 1)";
    d3.style.background = "rgba(0,0,255,0.5)";
  }
}
//----------左上方上方菜单语音功能------------------
function MouseoverMU(e) {  //鼠标移入事件
  var el = e.target;
  el.style.fontSize = "18px";
  el.style.transition = "0.3s";
  var mut = document.getElementById("menu_info").innerText;
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    // alert(document.getElementById("menu_info").innerText);
    if(mut == "Please click on the start button to disrupt the picture!") {
      pcyy.src = "./music/menu1.mp3";
    } else if(mut == "Is upset, please wait for a moment!") {
      pcyy.src = "./music/menu2.mp3";
    } else if(mut == "Complete upset, you can play!") {
      pcyy.src = "./music/menu3.mp3";
    } else if(mut == "Pause in!") {
      pcyy.src = "./music/menu4.mp3";
    } else if(mut == "Please continue the game!") {
      pcyy.src = "./music/menu5.mp3";
    } else if(mut == "Orz,Worship God!") {
      pcyy.src = "./music/mbgod.mp3";
    }
    else {
      pcyy.src = "";
    }
    pcyy.play();
  }
}
function MouseoutMU(e) {  //鼠标移出事件
  var el = e.target;
  el.style.fontSize = "16px";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.pause();  //暂停
    pcyy.src = '';
  }
}
//----------右方示例图片按键切换是否有编号的图片------------------
function MouseoverIGD(e) {
  var el = e.target;
  el.style.cursor = "pointer";
  el.style.boxShadow = "2px 2px 2px";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/anniu1.mp3";
    pcyy.play();
  }
}
function MouseoutIGD(e) {
  var el = e.target;
  el.style.boxShadow = "0px 0px 0px";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/anniu1.mp3";
    pcyy.play();
  }
}
function MousedownIGD(e) {
  var el = e.target;
  el.style.boxShadow = "0px 0px 0px";
  if(imgfile == "Image4_4g") {
    imgfile = "Image4_4t";
  } else {
    imgfile = "Image4_4g";
  }
  // alert(imgfile);
  document.getElementById("imgsl").src = "./image/"+imgfile+"/img.gif";
  for(var i = 1; i <= 16; i++) {
    var td = document.getElementById("td"+i), t, k;
    var imgn = td.style.backgroundImage;
    // alert(imgn);
    if(imgn != "") {
      for(var j = imgn.length-1; j >= 4; j--) {
        if(imgn[j] == 'f' && imgn[j-1] == 'i' && imgn[j-2] == 'g' && imgn[j-3] == '.') {
          k = j-4;
          break;
        }
      }
      if(imgn[k-1] != '_') {
        t = imgn[k-1]+imgn[k];
      } else {
        t = imgn[k];
      }
      td.style.backgroundImage = "url(image/"+imgfile+"/img_"+t+".gif)";
    }
  }
  if(startnum != 1) {  //防止正在打乱的时候发出声音切换掉打乱音乐
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/anniu2.mp3";
    pcyy.play();
  }
}
function MouseupIGD(e) {
  var el = e.target;
  el.style.boxShadow = "2px 2px 2px";
}
//----------右方示例图片语音功能------------------
function MouseoverIGT(e) {  //鼠标移入事件
  var el = e.target;
  el.style.fontSize = "18px";
  el.style.transition = "0.3s";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/sample_graph.mp3";
    pcyy.play();
  }
}
function MouseoutIGT(e) {  //鼠标移出事件
  var el = e.target;
  el.style.fontSize = "16px";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.pause();  //暂停
    pcyy.src = '';
  }
}
//-----------右下方操作图片提示语音-----------
function MouseoverEX(e) {  //鼠标移入事件
  var el = e.target;
  el.style.fontSize = "18px";
  el.style.transition = "0.3s";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/operation_notice.mp3";
    pcyy.play();
  }
}
function MouseoutEX(e) {  //鼠标移出事件
  var el = e.target;
  el.style.fontSize = "16px";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.pause();  //暂停
    pcyy.src = '';
  }
}
//---------最下方信息提示语音------------
function MouseoverP1(e) {  //鼠标移入事件
  var el = e.target;
  el.style.cursor = "default";
  var p = document.getElementById("p1");
  p.style.fontSize = "20px";
  p.style.transition = "0.3s";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.src = "./music/info1.mp3";
    pcyy.play();
  }
}
function MouseoutP1(e) {  //鼠标移出事件
  var p = document.getElementById("p1");
  p.style.fontSize = "18px";
  if(startnum != 1) {
    var pcyy = document.getElementById("music");  //播放语音
    pcyy.pause();  //暂停
    pcyy.src = '';
  }
}

//==========================音量控制按钮功能实现=========================
//--------------------背景音乐音量控制-------------------
//---------音量增加按键-----------------
var bkmusicbig = "10", tgmusicbig = "10";  //分别初始背景和按钮音量大小
function MousedownBADD(e) {
  var el = e.target;
  el.style.background = "#0f0";
  var pcyy1 = document.getElementById("audiobj");
  if(bkmusicbig < 10) {
    bkmusicbig += 1;
  }
  if(bkmusicbig < 10) {
    pcyy1.volume = "0."+bkmusicbig;  //音量控制
  } else {
    pcyy1.volume = "1";
  }
  var lk = document.getElementById("b_look");  //显示音量高度
  lk.style.height = bkmusicbig*20+"px";
}
function MouseupBADD(e) {
  var el = e.target;
  el.style.background = "rgba(109,186,218,1)";
}
//-------音量减少按键-------------
function MousedownBRED(e) {
  var el = e.target;
  el.style.background = "#f00";
  var pcyy1 = document.getElementById("audiobj");
  if(bkmusicbig > 0) {
    bkmusicbig -= 1;
  }
  if(bkmusicbig > 0) {
    pcyy1.volume = "0."+bkmusicbig;
  } else {
    pcyy1.volume = "0";
  }
  var lk = document.getElementById("b_look");  //显示音量高度
  lk.style.height = bkmusicbig*20+"px";
}
function MouseupBRED(e) {
  var el = e.target;
  el.style.background = "rgba(109,186,218,1)";
}
//--------------------语音和按钮音乐音量控制-------------------
//---------音量增加按键-----------------
function MousedownTADD(e) {
  var el = e.target;
  el.style.background = "#00f";
  var pcyy = document.getElementById("music");
  if(tgmusicbig < 10) {
    tgmusicbig += 1;
  }
  if(tgmusicbig < 10) {
    pcyy.volume = "0."+tgmusicbig;  //音量控制
  } else {
    pcyy.volume = "1";
  }
  var lk = document.getElementById("t_look");  //显示音量高度
  lk.style.height = tgmusicbig*20+"px";
}
function MouseupTADD(e) {
  var el = e.target;
  el.style.background = "rgba(140,224,159,1)";
}
//-------音量减少按键-------------
function MousedownTRED(e) {
  var el = e.target;
  el.style.background = "#f00";
  var pcyy = document.getElementById("music");
  if(tgmusicbig > 0) {
    tgmusicbig -= 1;
  }
  if(tgmusicbig > 0) {
    pcyy.volume = "0."+tgmusicbig;
  } else {
    pcyy.volume = "0";
  }
  var lk = document.getElementById("t_look");  //显示音量高度
  lk.style.height = tgmusicbig*20+"px";
}
function MouseupTRED(e) {
  var el = e.target;
  el.style.background = "rgba(140,224,159,1)";
}

//=======游戏撤销、回顾、前进按钮功能实现=========
//var rd = "0";  //记录玩家移动的步骤和撤销的步数
function PauseNo() {  //判断是否是非暂停状态
  var d1 = document.getElementById("imgbutton"), k2;
  for(var i = d1.src.length-1; i >= 4; i--) {  //找到开始或暂停按钮图片名字的编号
    if(d1.src[i] == 'g' && d1.src[i-1] == 'n' && d1.src[i-2] == 'p' && d1.src[i-3] == '.') {
      k2 = d1.src[i-4];  //找到了的图片名字的编号
      break;
    }
  }
  if(k2 == 3 || k2 == 4) {
    return true;
  } else {
    return false;
  }
}
function MouseoverRRD(e) {  //鼠标移入
  var el = e.target;
  if(player) {  //模拟人工打乱完成后才能进行这些操作
    if(el.id == "revoke") {  //撤销按钮
      if(player_num > 0 && PauseNo()) {  //当玩家有移动时才能撤销,并且在分暂停状态下才能撤销
        el.style.cursor = "pointer";
        el.style.boxShadow = "inset 0 0 20px #00AD00";
      }
    } else if(el.id == "review") {  //当玩家完成拼图时才能浏览回顾自己的游戏
      if(MessDegree() == 15 && player_num > 0) {
        el.style.cursor = "pointer";
        el.style.boxShadow = "inset 0 0 20px #00AD00";
      }
    } else if(el.id == "forward") {
      if(player_num < rd.length-1 && PauseNo()) {  //当玩家移动步数小于记步骤的长度时才能撤销撤销的步骤,并且在分暂停状态下才能撤销
        el.style.cursor = "pointer";
        el.style.boxShadow = "inset 0 0 20px #0000D8";
      }
    }
  }
}
function MouseoutRRD(e) {  //鼠标移出
  var el = e.target;
  el.style.boxShadow = "inset 0 0 0px #00AD00";
  el.style.cursor = "default";
}
function Up1() {  //撤销时的图片块向上移动函数
  var kong = FoundEmpty();  //储存没有图片的格子的编号
  if(kong+4 <= 16 && kong > 0) {  //如果下面有图片就进行上移操作(原理:交换上下两图片位置)
    pengmusic();  //图片交换碰撞声音
    FoundMove(4);  //找出照片需要换位置的照片的名字编号并替换空格子
  }
}
function Down1() {  //撤销时的图片块向下移动函数
  var kong = FoundEmpty();  //储存没有图片的格子的编号
  if(kong-4 >= 1) {
    pengmusic();  //图片交换碰撞声音
    FoundMove(-4);  //找出照片需要换位置的照片的名字编号并替换空格子
  }
}
function Left1() {  //撤销时的图片块向左移动函数
  var kong = FoundEmpty();  //储存没有图片的格子的编号
  if(kong+1 != 5 && kong+1 != 9 && kong+1 != 13 && kong+1 != 17 && kong != 0) {
    pengmusic();  //图片交换碰撞声音
    FoundMove(1);  //找出照片需要换位置的照片的名字编号并替换空格子
  }
}
function Right1() {  //撤销时的图片块向右移动函数
  var kong = FoundEmpty();  //储存没有图片的格子的编号
  if(kong-1 != 4 && kong-1 != 8 && kong-1 != 12 && kong-1 != 0 && kong != 0) {
    pengmusic();  //图片交换碰撞声音
    FoundMove(-1);  //找出照片需要换位置的照片的名字编号并替换空格子
  }
}
function PeopleNum1() {  //撤销时的步数显示
  var Peo_n_string;
  if(player_num < 10) {
    Peo_n_string = "00"+player_num;
  } else if(player_num >=10 && player_num < 100) {
    Peo_n_string = "0"+player_num;
  } else {
    Peo_n_string = player_num;
  }
  document.getElementById("imgtext3").innerText = "Num:"+upset_num+"/"+Peo_n_string;
}
function LookPlayerChu() {  //将拼图回到玩家移动0步之前的状态
  EmptyTd16();  //清空第16个格子里的照片
  for(var i = rd.length-1; i >= 0; i--) {
    if(rd[i] == '1') {  //如果玩家向上移动了,则撤销要向下移动
      Down1();  //向下移动
    } else if(rd[i] == '2') {
      Up1();
    } else if(rd[i] == '3') {
      Right1();
    } else if(rd[i] == '4') {
      Left1();
    }
    player_num--;
    PeopleNum1();
  }
}
var kk = 0;  //kk记录回放的步数
function LookPlayering() {  //自定义回放玩家整个游戏过程函数,按照rd记录的详细步骤回放
  kk++;
  // alert(rd);
  if(rd[kk] == '1') {  //如果玩家向上移动了,则撤销要向下移动
    Up1();
  } else if(rd[kk] == '2') {
    Down1();
  } else if(rd[kk] == '3') {
    Left1();
  } else if(rd[kk] == '4') {
    Right1();
  }
  player_num++;
  PeopleNum1();
  player = false;  //回放时禁止玩家按开始键和移动操作
  var time3;
  InfoMess();  //进度条
  time3 = setTimeout(LookPlayering, 100);  //延迟消息触发
  if(kk > rd.length-2) {
    clearTimeout(time3);  //清除延迟消息触发事件
    document.getElementById("td16").style.backgroundImage = "url(image/"+imgfile+"/img_16.gif)";
    kk = 0; su = 0;
    player = true;  //回放完毕,解除禁止玩家按开始键和移动操作
    player_num++;
    PeopleNum1();
    // InfoMess();  //进度条
  }
}
function MousedownRRD(e) {  //鼠标单击
  var el = e.target;
  if(player) {  //模拟人工打乱完成后才能进行这些操作
    if(el.id == "revoke") {  //撤销按钮
      if(player_num > 0 && PauseNo()) {  //当玩家有移动时才能撤销,并且在分暂停状态下才能撤销
        el.style.boxShadow = "inset 0 0 50px #00AD00";
        // alert(rd+","+rd[player_num]);
        // document.getElementById("info").innerHTML += rd+","+rd[player_num]+" ";
        if(rd[player_num] == '1') {  //如果玩家向上移动了,则撤销要向下移动
          Down1();  //向下移动
          player_num--;  //玩家步数减少1
          PeopleNum1();
        } else if(rd[player_num] == '2') {
          Up1();
          player_num--;
          PeopleNum1();
        } else if(rd[player_num] == '3') {
          Right1();
          player_num--;
          PeopleNum1();
        } else if(rd[player_num] == '4') {
          Left1();
          player_num--;
          PeopleNum1();
        }
      }
    } else if(el.id == "review") {  //当玩家完成拼图时才能浏览回顾自己的游戏
      if(MessDegree() == 15 && player_num > 0) {
        el.style.boxShadow = "inset 0 0 50px #00AD00";
        // if(su <= 1) {  //只设置1档和2档速度,点击第一下1档,点第二下2档(2档很快),未实现,实现困难
        //   su++;
        // }
        LookPlayerChu();  //首先将拼图回到玩家移动0步之前的状态
        LookPlayering();  //自定义回放玩家整个游戏过程函数
      }
    } else if(el.id == "forward") {
      if(player_num < rd.length-1 && PauseNo()) {  //当玩家移动步数小于记步骤的长度时才能撤销撤销的步骤,并且在分暂停状态下才能撤销
        el.style.boxShadow = "inset 0 0 50px #0000D8";
        if(rd[player_num+1] == '1') {  //如果玩家向上移动了,则撤销要向下移动
          Up();
        } else if(rd[player_num+1] == '2') {
          Down();
        } else if(rd[player_num+1] == '3') {
          Left();
        } else if(rd[player_num+1] == '4') {
          Right();
        }
      }
    }
  }
}
function MouseupRRD(e) {  //鼠标松开
  var el = e.target;
  if(player) {  //模拟人工打乱完成后才能进行这些操作
    if(el.id == "revoke") {  //撤销按钮
      if(player_num > 0 && PauseNo()) {
        el.style.boxShadow = "inset 0 0 20px #00AD00";
      }
    } else if(el.id == "review") {  //当玩家完成拼图时才能浏览回顾自己的游戏
      if(MessDegree() == 15 && player_num > 0) {
        el.style.boxShadow = "inset 0 0 20px #00AD00";
      }
    } else if(el.id == "forward") {
      if(player_num < rd.length-1 && PauseNo()) {
        el.style.boxShadow = "inset 0 0 20px #0000D8";
      }
    }
  }
}





window.onload = Refresh;  //页面刷新执行Refresh()函数
document.onkeydown = keyboard;  //点击键盘事触发ceshi()函数



//===========一个计时时钟================
function updateTime() {
  var myDate = new Date();  //获取当天日期时间。
  var h = myDate.getHours();  //获取小时。
  var m = myDate.getMinutes();  //获取分钟。
  var s = myDate.getSeconds();  //获取秒钟。
  if(s <= 9) {
    s = "0"+s;
  }
  if(m <= 9) {
    m = "0"+m;
  }
  if(h <= 9) {
    h = "0"+h;
  }
  document.getElementById("p1").innerHTML = "Version:Czy2016.8.9　Producer:Mr.Zhiyin　Time: "+h+":"+m+":"+s;
}
setInterval(updateTime, 1000);  //不停地调用函数,1s调用一次