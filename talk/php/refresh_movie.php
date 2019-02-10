<?php
  $conn = mysqli_connect('localhost', 'root', 'Czy19951219') or die("数据库连接错误".mysqli_error());
  mysqli_select_db($conn, "zain_talk") or die("数据库访问错误".mysqli_error());
  //mysqli_query($conn, "set names UTF-8");  //选择编码格式(添加了这条容易乱码)
  
  if(is_array($_POST)&&count($_POST) > 0) {  //判断是否为表单跳转传参(POST传值方式),href传值是get传值
    $keyword = $_POST['txt_keyword'];
  } else {
    $keyword = $_GET['txt_keyword'];
  }
  mysqli_query($conn, "truncate table tb_talk_look") or die(("[SHOW0]数据表访问错误,请检查该表是否存在".mysqli_error()));
  //mysqli_query($conn, "INSERT INTO tb_talk_look(id,nickname,content,createtime) SELECT id,nickname,content,createtime FROM tb_talk where nickname like '%$keyword%' or content like '%$keyword%' or createtime like '%$keyword%'") or die(("[SHOW1]数据表访问错误,请检查该表是否存在".mysqli_error()));
  mysqli_query($conn, "INSERT INTO tb_talk_look(id,nickname,content,createtime) SELECT id,nickname,content,createtime FROM tb_talk where nickname like '%$keyword%' or content like '%$keyword%' or createtime like '%$keyword%'") or die(("[SHOW1]数据表访问错误,请检查该表是否存在".mysqli_error()));

  $sql = mysqli_query($conn, "select * from tb_talk_look") or die("[SHOW2]数据表访问错误,请检查该表是否存在".mysqli_error());
  $row = mysqli_fetch_object($sql);  //获取结果集
  //查找出指定id修改指定数据
  $id = $_GET['id'];
  $sql_mdy = mysqli_query($conn, "select * from tb_talk where id=$id") or die("[SHOW3]数据表访问错误,请检查该表是否存在".mysqli_error());
  $row_mdy = mysqli_fetch_object($sql_mdy);
?>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Talk</title>
      <!-- home style -->
      <link href="../../home-res/css/bootstrap.css" rel="stylesheet">
      <link href="../../home-res/css/bootstrap-theme.css" rel="stylesheet">
      <link href="../../home-res/css/block_grid_bootstrap.css" rel="stylesheet">
      <link href="../../home-res/css/owl.carousel.css" rel="stylesheet">
      <link href="../../home-res/css/owl.theme.css" rel="stylesheet">
      <link href="../../home-res/css/animate.min.css" rel="stylesheet" />
      <link href="../../home-res/css/jquery.circliful.css" rel="stylesheet" />
      <link href="../../home-res/css/select2.css" rel="stylesheet">
      <link href="../../home-res/css/slicknav.css" rel="stylesheet" />
      <link href="../../home-res/css/style.css" rel="stylesheet">
      <link href="../../home-res/css/user-style.css" rel="stylesheet">
      <!-- End of home style -->
      <link rel="stylesheet" href="../style/talk.css" />
    </head>
    <body>
      <!------------------------------------------页角添加Github链接或其他链接------------------------------------------>
      <!--页面左上角-->
      <a href="https://github.com/ZainChen" title="My Github" target="_Blank" class="github-corner" aria-label="View source on Github"><svg class="github-svg" width="80" height="80" viewBox="0 0 250 250" style="fill:#FD6C6C; color:#fff; position: fixed; top: 0; border: 0; left: 0; transform: scale(-1, 1);" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-svg{z-index: 100;}.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>
      <!--页面右上角-->
      <!-- <a href="https://zainzy.com" title="我的站点" target="_Blank" class="github-corner" aria-label="View source on Github"><svg class="github-svg" width="80" height="80" viewBox="0 0 250 250" style="fill:#64CEAA; color:#fff; position: fixed; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-svg{z-index: 100;}.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style> -->

      <!-- Header-->
      <section class="menu-header top">
        <div class="row">
            <div class="col-sm-12 col-xs-12 col-md-3">
              <div class="logo">
                  <a href="../../"><img src="../../home-res/images/logo.png" alt="" />
                  </a>
              </div>
            </div>
            <div class="col-sm-12 col-xs-12 col-md-9">
              <nav id="desktop-menu">
                  <ul class="sf-menu" id="navigation">
                    <li><a href="../../">首页</a></li>
                    <li><a href="../../blogs/">博客</a></li>
                    <li><a href="../../talk/">留言板</a></li>
                    <li><a href="../../file/">云文件</a></li>
                    <li><a href="../../develop/">开发</a></li>
                  </ul>
              </nav>
            </div>
        </div>
      </section>
      <!-- End of Header-->
      <div class="menu-header-height"></div>
      
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
              <li id="add_info">添加留言</li>
              <!-- <form name="form2" method="post" action="refresh_movie.php"> -->
                <li id="refresh_info">
                  所有留言
                  <!-- <input id="Submit2" name="Submit" type="submit" value="刷新公告"> -->
                </li>
              <!-- </form> -->
            </ul>
          </div>
          <!-- <a id="title_name" class="title_name" href="../talk-dev">留言板 V1.0</a> -->
          <a id="title_name" class="title_name" href="">留言板 V1.0</a>
        </div>
      </div>
      <div id="from001">  <!-- 添加数据功能框 -->
        <form id="form1" name="form1" method="post" action="add_movie.php">
          <table id="tb1">
            <tr>
              <td id="td1">昵称:</td>
              <td id="td2"><input id="txt_title" name="txt_title" type="text"></td>
            </tr>
            <tr>
              <td id="td3">留言内容:</td>
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
              <td id="td1">昵称:</td>
              <td id="td2">
                <input id="txt_id" name="id" type="text" value="<?php echo $row_mdy->id; ?>"><input id="txt_title2" name="txt_title" type="text" value="<?php echo $row_mdy->nickname; ?>">
              </td>
            </tr>
            <tr>
              <td id="td3">留言内容:</td>
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
              <td class="tdf_title">昵称</td>
              <td class="tdf_content">留言内容</td>
              <td class="tdf_createtime">创建时间</td>
            </tr>
          </table>
          <table id="tb_content">
            <tr id="tr_hread">
              <td class="td_id_ji"></td>
              <td class="td_title_ji"></td>
              <td class="td_content_ji"></td>
              <td class="td_createtime_ji"></td>
            </tr>
<?php
          if(!$row) {
?>
            <tr>
              <td class="td_id_ji">null</td>
              <td class="td_title_ji">null</td>
              <td class="td_content_ji"><?php echo "<font color='red'>没有数据,请添加数据</font>"; ?></td>
              <td class="td_createtime_ji">null</td>
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
              <td class="td_title_ji" title="<?php echo $row->nickname; ?>"><?php echo $row->nickname; ?></td>
              <td class="td_content_ji"><?php echo $row->content; ?></td>
              <td class="td_createtime_ji"><?php echo $row->createtime; ?></td>
            </tr>
<?php
            } else {
?>
            <tr>
              <td class="td_id_ou"><?php echo $i ?></td>
              <td class="td_title_ou" title="<?php echo $row->nickname; ?>"><?php echo $row->nickname; ?></td>
              <td class="td_content_ou"><?php echo $row->content; ?></td>
              <td class="td_createtime_ou"><?php echo $row->createtime; ?></td>
            </tr>
<?php
            }
            $i++;
          } while($row = mysqli_fetch_object($sql));
?>
          </table>
        </div>
      </div>

      <!--  Footer -->
      <section>
          <!-- Copyright -->
          <div class="copyright">
            <div class="container">
                  <div class="row">
                      <div class="span12">
                        <p class="copyright">Copyright &copy; 2019.志银(ZainChen) <a href="http://www.miitbeian.gov.cn/" target="_blank" title="粤ICP备18148951号">粤ICP备18148951号</a></p>
                      </div>
                  </div>
            </div>
          </div>
          <!-- End of Copyright -->
      </section>
      <!--  End of Footer -->
      
      <!--  Go to Top-->
      <a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>
      <!--  End of Go to Top -->

      <script type="text/javascript" src="../script/talk.js"></script>
      <!-- home script -->
      <script src="../../home-res/js/jquery.min.js"></script>
      <script src="../../home-res/js/bootstrap.min.js"></script>
      <script src="../../home-res/js/hoverIntent.js"></script>
      <script src="../../home-res/js/superfish.min.js"></script>
      <script src="../../home-res/js/owl.carousel.js"></script>
      <script src="../../home-res/js/wow.min.js"></script>
      <script src="../../home-res/js/waypoints.min.js"></script>
      <script src="../../home-res/js/jquery.slicknav.min.js"></script>
      <script src="../../home-res/js/retina.min.js"></script>
      <script src="../../home-res/js/select2.js"></script>
      <script src="../../home-res/js/counterup.min.js"></script>
      <script src="../../home-res/js/waves.js"></script>
      <script src="../../home-res/js/jquery.countdown.js"></script>
      <script src="../../home-res/js/custom.js"></script>
      <script src="../../home-res/js/tctip-1.0.3.min.js"></script>  <!-- 赞助 -->
      <script src="../../home-res/js/user-script.js"></script>
      <!-- End of home script -->

    </body>
  </html>
<?php
  mysqli_free_result($sql);  //关闭结果集
  mysqli_close($conn);  //关闭数据库
?>