<?php
  $conn = mysqli_connect("localhost", "root", "Czy19951219") or die("数据库连接错误".mysqli_error());
  mysqli_select_db($conn, "zain_talk") or die("数据库访问错误".mysqli_error());
  $nickname = $_POST['txt_title'];
  $content = $_POST['txt_content'];
  // echo $nickname.$content;
  $id = $_POST['id'];
  $keyword1 = $_POST['txt_keyword1'];
  $sql = mysqli_query($conn, "update tb_talk set nickname='$nickname', content='$content' where id=$id") or die("数据表访问错误,请检查该表是否存在".mysqli_error());
  // if($sql){echo "<script>alert('修改成功');</script>";} else {echo "<script>alert('修改失败');</script>";}
  // echo $keyword1;
  echo "<script>window.location.href='refresh_movie.php?id=0&txt_keyword=".$keyword1."';</script>";
  mysqli_close($conn);
?>