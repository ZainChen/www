<?php
  $conn = mysqli_connect('localhost', 'root', 'Czy19951219') or die("数据库连接错误".mysqli_error());
  mysqli_select_db($conn, "db_czy") or die("数据库访问错误".mysqli_error());
  //mysqli_query($conn, "set names UTF-8");  //选择编码格式(添加了这条容易乱码)
  
  if(is_array($_POST)&&count($_POST) > 0) {  //判断是否为表单跳转传参(POST传值方式),href传值是get传值
    $keyword = $_POST['txt_keyword'];
  } else {
    $keyword = $_GET['txt_keyword'];
  }
  mysqli_query($conn, "truncate table tb_movielook") or die(("[SHOW0]数据表访问错误,请检查该表是否存在".mysqli_error()));
  //mysqli_query($conn, "INSERT INTO tb_movielook(id,title,content,createtime) SELECT id,title,content,createtime FROM tb_movie where title like '%$keyword%' or content like '%$keyword%' or createtime like '%keyword%'") or die(("[SHOW1]数据表访问错误,请检查该表是否存在".mysqli_error()));
  mysqli_query($conn, "INSERT INTO tb_movielook(id,title,content,createtime) SELECT id,title,content,createtime FROM tb_movie where title like '%$keyword%' or content like '%$keyword%' or createtime like '%$keyword%'") or die(("[SHOW1]数据表访问错误,请检查该表是否存在".mysqli_error()));

  $sql = mysqli_query($conn, "select * from tb_movielook") or die("[SHOW2]数据表访问错误,请检查该表是否存在".mysqli_error());
  $row = mysqli_fetch_object($sql);  //获取结果集
  //查找出指定id修改指定数据
  $id = $_GET['id'];
  $sql_mdy = mysqli_query($conn, "select * from tb_movie where id=$id") or die("[SHOW3]数据表访问错误,请检查该表是否存在".mysqli_error());
  $row_mdy = mysqli_fetch_object($sql_mdy);
?>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Movie</title>
      <link rel="stylesheet" href="./movie.css" />
    </head>
    <body>
      <div id="head0">
        <div id="head1">
          <div id="operations">
            <ul id="infos">
              <form id="form2" name="form2" method="post" action="refresh_movie.php?id=0">
                <li id="query_info">
                  <input id="txt_keyword" name="txt_keyword" type="text" value="<?php echo $keyword ?>"/>
                  <input id="btn_search" name="Submit2" type="submit" value="搜索">
                </li>
              </form>
              <li id="add_info">添加电影</li>
              <!-- <form name="form2" method="post" action="refresh_movie.php"> -->
                <li id="refresh_info">
                  所有电影
                  <!-- <input id="Submit2" name="Submit" type="submit" value="刷新公告"> -->
                </li>
              <!-- </form> -->
            </ul>
          </div>
          <div id="title_name">电影信息</div>
        </div>
      </div>
      <div id="from001">  <!-- 添加数据功能框 -->
        <form id="form1" name="form1" method="post" action="add_movie.php">
          <table id="tb1">
            <tr>
              <td id="td1">电影主题:</td>
              <td id="td2"><input id="txt_title" name="txt_title" type="text"></td>
            </tr>
            <tr>
              <td id="td3">电影内容:</td>
              <td id="td4"><textarea id="txt_content" name="txt_content"></textarea></td>
            </tr>
            <tr>
              <td id="td5"></td>
              <td id="td6">
                <input id="btn_grey" class="btn_grey" name="Submit" type="submit" value="保存">
                <input class="submit2" name="submit2" type="reset" value="重置">
                <input id="submit3" class="submit3" name="submit3" type="reset" value="取消">
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div id="from002">  <!-- 修改数据功能框 -->
        <form id="form1" name="form1" method="post" action="modify_movie.php">
          <table id="tb1">
            <tr>
              <td id="td1">电影主题:</td>
              <td id="td2">
                <input id="txt_id" name="id" type="text" value="<?php echo $row_mdy->id; ?>"><input id="txt_title2" name="txt_title" type="text" value="<?php echo $row_mdy->title; ?>">
              </td>
            </tr>
            <tr>
              <td id="td3">电影内容:</td>
              <td id="td4"><textarea id="txt_content" name="txt_content"><?php echo $row_mdy->content; ?></textarea></td>
            </tr>
            <tr>
              <td id="td5"></td>
              <td id="td6">
                <input type="hidden" name="txt_keyword1" value="<?php echo $keyword ?>" />
                <input id="btn_grey" class="btn_grey" name="Submit" type="submit" value="修改">
                <input class="submit2" name="submit2" type="reset" value="重置">
                <a class="submit_a" href="refresh_movie.php?id=0&txt_keyword=<?php echo $keyword ?>"><input id="submit4" class="submit4" name="submit4" type="button" value="取消" /></a>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div id="look_all">
        <div id="head2"></div>
        <div id="info_content">
          <table id="tb_head_fixed">
            <tr id="tr_hread">
              <td class="tdf_id">NO</td>
              <td class="tdf_title">电影标题</td>
              <td class="tdf_content">电影内容</td>
              <td class="tdf_createtime">创建时间</td>
              <td class="tdf_revise">修改内容</td>
            </tr>
          </table>
          <table id="tb_content">
            <tr id="tr_hread">
              <td class="td_id_ji"></td>
              <td class="td_title_ji"></td>
              <td class="td_content_ji"></td>
              <td class="td_createtime_ji"></td>
              <td class="td_revise_ji"></td>
            </tr>
<?php
          if(!$row) {
?>
            <tr>
              <td class="td_id_ji">null</td>
              <td class="td_title_ji">null</td>
              <td class="td_content_ji"><?php echo "<font color='red'>没有数据,请添加数据</font>"; ?></td>
              <td class="td_createtime_ji">null</td>
              <td class="td_revise_ji">null</td>
            </tr>
<?php
          }
          $i = 1;
          do {
            if(!$row) break;
            if($i%2 != 0) {  //隔行变色
?>
            <tr>
              <td class="td_id_ji"><?php echo $i ?></td>
              <td class="td_title_ji" title="<?php echo $row->title; ?>"><?php echo $row->title; ?></td>
              <td class="td_content_ji"><?php echo $row->content; ?></td>
              <td class="td_createtime_ji"><?php echo $row->createtime; ?></td>
              <td class="td_revise_ji"><a id="mdy" class="mdy" href="?id=<?php echo $row->id; ?>&txt_keyword=<?php echo $keyword ?>">修改</a>|<a id="dely" class="del" href="del_movie.php?id=<?php echo $row->id; ?>&txt_keyword=<?php echo $keyword ?>">删除</a></td>
            </tr>
<?php
            } else {
?>
            <tr>
              <td class="td_id_ou"><?php echo $i ?></td>
              <td class="td_title_ou" title="<?php echo $row->title; ?>"><?php echo $row->title; ?></td>
              <td class="td_content_ou"><?php echo $row->content; ?></td>
              <td class="td_createtime_ou"><?php echo $row->createtime; ?></td>
              <td class="td_revise_ou"><a id="mdy" class="mdy" href="?id=<?php echo $row->id; ?>&txt_keyword=<?php echo $keyword ?>">修改</a>|<a id="dely" class="del" href="del_movie.php?id=<?php echo $row->id; ?>&txt_keyword=<?php echo $keyword ?>">删除</a></td>
            </tr>
<?php
            }
            $i++;
          } while($row = mysqli_fetch_object($sql));
?>
          </table>
        </div>
      </div>
    </body>
    <script type="text/javascript" src="./movie.js"></script>
  </html>
<?php
  mysqli_free_result($sql);  //关闭结果集
  mysqli_close($conn);  //关闭数据库
?>