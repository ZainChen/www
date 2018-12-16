//=====添加数据功能=========================
//判断两个输入框是否都不为空(都不为空才能存入数据库)
var btn_grey = document.getElementById("btn_grey");
btn_grey.onclick = function() {
  var form1 = document.getElementById("form1");
  if(form1.txt_title.value == "") {  //公告标题为空则弹出警告框
    alert("请输入公告标题!");
    form1.txt_title.focus();  //获得标题出入框焦点
    return false;
  }
  if(form1.txt_content.value == "") {  //公告内容为空则弹出警告框
    alert("请输入公告内容!");
    form1.txt_content.focus();  //获得公告内容框焦点
    return false;
  }
  form1.submit();  //如果各控件不为空,提交表单信息到处理页面
}
//单击调出添加信息框
var add_info = document.getElementById("add_info");
add_info.onclick = function() {
  var from001 = document.getElementById("from001");
  from001.style.height = "100%";
  setTimeout(function() {
    var form = document.getElementById("form1");
    form.txt_title.focus();  //获得标题出入框焦点
  }, 800);
  from001.style.transition = "1s";
}
//单击取消添加信息框(使其消失)
var submit3 = document.getElementById("submit3");
submit3.onclick = function() {
  var from001 = document.getElementById("from001");
  from001.style.height = "0%";
  from001.style.transition = "1s";
  var from002 = document.getElementById("from002");
  from002.style.height = "0%";
  from002.style.transition = "1s";
}
//======刷新页面功能=======================
//单击刷新按钮重新加载页面
var refresh_info = document.getElementById("refresh_info");
refresh_info.onclick = function() {
  window.location.href = 'refresh_movie.php?id=0&txt_keyword';
}
//======搜索查找数据功能==============
var btn_search = document.getElementById("btn_search");
btn_search.onclick = function() {  //验证搜索表单里的内容是否为空
  var form2 = document.getElementById("form2");
  // if(form2.txt_keyword.value == "") {
  //   alert("请输入查询关键字");
  //   form2.txt_keyword.focus();
  //   return false;
  // }
  form2.submit();
}
//====修改数据功能页面的刷新即调出修改框功能==========
window.onload = function() {
  var mdy = document.getElementById("mdy");
  var url = window.location.search;  //获取当前页面路径问号及问号以后的字符串
  // alert(url.length);
  if(url[4] != '0' && url != "") {
    var from002 = document.getElementById("from002");
    from002.style.height = "100%";
    setTimeout(function() {
      var form = document.getElementById("form1");
      form.txt_title.focus();  //获得标题出入框焦点
    }, 800);
    from002.style.transition = "1s";
  }
}