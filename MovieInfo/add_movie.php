<?php
/*
数据表创建代码:
create table tb_movie(
  id int(4) not null auto_increment primary key,
  title varchar(200) not null,
  content text not null,
  createtime datetime not null
) engine = myisam;
*/
  $conn = mysqli_connect("localhost", "root", "Czy19951219") or die("数据库连接错误".mysqli_error());
  mysqli_select_db($conn, "db_czy") or die("数据库访问错误".mysqli_error());
  // mysqli_query($conn, "set names gb2312");  //选择编码格式(添加了这条容易乱码)
  $title = $_POST['txt_title'];  //获取公告标题信息
  $content = $_POST['txt_content'];  //获取公告内容
  $createtime = date("Y-m-d H:i:s");  //获取系统当前时间,H代表24小时制,需大写
  /*********应用mysql_query()函数执行insert...into语句发送到服务器***********/
  $sql = mysqli_query($conn, "insert into tb_movie(title,content,createtime)values('$title','$content','$createtime')") or die("数据表访问错误,请检查该表是否存在".mysqli_error());
  echo "<script>window.location.href='refresh_movie.php?id=0&txt_keyword';</script>";
  // alert('公告信息添加成功!');
  //mysqli_free_result($sql);  //关闭结果集
  //补充说明: 一般进行数据读取时，返回的是读取的资源，需要释放，而数据写输入时，返回的是一个写入是否成功的标识，是bool型的，不需要释放资源,多以这里不用释放资源
  mysqli_close($conn);  //关闭MySQL服务器
?>