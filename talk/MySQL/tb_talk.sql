-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3308
-- 生成日期： 2018-12-10 12:40:02
-- 服务器版本： 8.0.13
-- PHP 版本： 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `zain_talk`
--

-- --------------------------------------------------------

--
-- 表的结构 `tb_talk`
--

CREATE TABLE `tb_talk` (
  `id` int(4) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `createtime` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tb_talk`
--

INSERT INTO `tb_talk` (`id`, `title`, `content`, `createtime`) VALUES
(1, '人类之子 ', 'Children of Men (2006)', '2016-10-12 01:54:34'),
(2, '皮囊之下', 'Under the Skin (2013) ', '2016-10-12 01:54:38'),
(3, '逆流的色彩', 'Upstream Color (2013) ', '2016-10-12 01:54:42'),
(4, '美丽心灵的永恒阳光', 'Eternal Sunshine of the Spotless Mind (2004)', '2016-10-12 01:54:46'),
(5, '疯狂的麦克斯：狂暴之路', 'Mad Max: Fury Road (2015) ', '2016-10-12 01:54:50'),
(6, '她', 'Her (2013) ', '2016-10-12 01:54:54'),
(7, '月球', 'Moon (2009) ', '2016-10-12 01:55:00'),
(8, '时空罪恶', 'Cronocrímenes, Los (2007) ', '2016-10-12 01:55:07'),
(9, '命运之门', 'Primer (2004) ', '2016-10-12 01:55:11'),
(10, '神圣车行', 'Holy Motors (2012) ', '2016-10-12 01:55:15'),
(11, '汉江怪物', 'The Host (2006) ', '2016-10-12 01:55:18'),
(12, '第九区', 'District 9 (2009) ', '2016-10-12 01:55:22'),
(13, '飞向太空2002', 'Solaris (2002) ', '2016-10-12 01:55:26'),
(14, '雪国列车', 'Snowpiercer (2013) ', '2016-10-12 01:55:30'),
(15, '盗梦空间', 'Inception (2010) ', '2016-10-12 01:55:34'),
(16, '街区大作战', 'Attack the Block (2011) ', '2016-10-12 01:55:46'),
(17, '地心引力', 'Gravity (2013) ', '2016-10-12 01:55:52'),
(18, '环形使者', 'Looper (2012) ', '2016-10-12 01:55:57'),
(19, '少数派报告', 'Minority Report (2002) ', '2016-10-12 01:56:01'),
(20, '盲区行者', 'A Scanner Darkly (2006) ', '2016-10-12 01:56:04'),
(21, '机械姬', 'Ex Machina (2015)', '2016-10-12 01:56:12'),
(22, '死亡幻觉', 'Donnie Darko (2001) ', '2016-10-12 01:56:18'),
(23, '机器人总动员', 'WALL·E (2008)', '2016-10-12 01:56:22'),
(24, '太阳浩劫', 'Sunshine (2007) ', '2016-10-12 01:56:28'),
(25, '克隆人返乡', 'Kurôn wa kokyô o mezasu (2009)', '2016-10-12 01:56:32'),
(26, '迷幻黑彩虹', 'Beyond the Black Rainbow (2010) ', '2016-10-12 01:59:29'),
(27, '星球大战：原力觉醒', 'Star Wars: The Force Awakens (2015) ', '2016-10-12 01:59:33'),
(28, '猩球崛起：黎明之战', 'Dawn of the Planet of the Apes (2014) ', '2016-10-12 01:59:37'),
(29, '忧郁症', 'Melancholia (2011)', '2016-10-12 01:59:41'),
(30, '大逃杀', 'Battle Royale (2000) ', '2016-10-12 01:59:47'),
(31, '明日边缘', 'Edge of Tomorrow (2014) ', '2016-10-12 02:00:26'),
(32, '星际穿越', 'Interstellar (2014) ', '2016-10-12 02:00:31'),
(33, '人工智能', 'A.I.: Artificial Intelligence (2001) ', '2016-10-12 02:00:34'),
(34, '怪兽', 'Monsters (2010) ', '2016-10-12 02:00:40'),
(35, '致命魔术', 'The Prestige (2006) ', '2016-10-12 02:00:44'),
(36, '迷雾', 'The Mist (2007) ', '2016-10-12 02:00:50'),
(37, '星际迷航', 'The Mist (2007) ', '2016-10-12 02:00:54'),
(38, '天兆', 'Signs (2002) ', '2016-10-12 02:00:59'),
(39, '上帝难为', 'Trudno byt bogom (2013) ', '2016-10-12 02:01:03'),
(40, '别让我走', 'Never Let Me Go (2010) ', '2016-10-12 02:01:10'),
(41, '火星救援', 'The Martian (2015)', '2016-10-12 04:36:02'),
(42, '科洛弗档案', 'Cloverfield (2008) ', '2016-10-12 07:39:10'),
(44, '海王', '想看', '2018-12-10 12:26:06');

--
-- 转储表的索引
--

--
-- 表的索引 `tb_talk`
--
ALTER TABLE `tb_talk`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `tb_talk`
--
ALTER TABLE `tb_talk`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
