<?php
  $conn = mysqli_connect("localhost", "root", "Czy19951219") or die("数据库连接错误".mysqli_error());
  mysqli_select_db($conn, "zain_talk") or die("数据库访问错误".mysqli_error());
  // echo $nickname.$content;
  $id = $_GET['id'];
  $keyword1 = $_GET['txt_keyword'];
  $sql = mysqli_query($conn, "select * from tb_talk where id=$id");
  $row = mysqli_fetch_object($sql);  //获取结果集
  // echo $row->nickname;
  mysqli_query($conn, "delete from tb_talk where id=$id") or die("数据表访问错误,请检查该表是否存在".mysqli_error());
  // if($sql){echo "<script>alert('《".$row->nickname."》删除成功');</script>";} else {echo "<script>alert('删除失败');</script>";}
  // echo $keyword1;
  echo "<script>window.location.href='refresh_movie.php?id=0&txt_keyword=".$keyword1."';</script>";
  mysqli_close($conn);
?>