-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2019-01-28 18:36:51
-- 服务器版本： 5.7.24-0ubuntu0.16.04.1
-- PHP Version: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zain_talk`
--

-- --------------------------------------------------------

--
-- 表的结构 `tb_talk`
--

CREATE TABLE `tb_talk` (
  `id` int(10) NOT NULL,
  `nickname` text COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin NOT NULL,
  `createtime` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `tb_talk`
--

INSERT INTO `tb_talk` (`id`, `nickname`, `content`, `createtime`) VALUES
(7, 'Jane', '我是Jane（周娟娟），我爱志银（陈志振），今后我会成为他的妻子，携手一生，白头到老', '2019-01-28 18:22:44'),
(8, '志银', '@jane\r\n我是志银（陈志振），我爱jane宝贝（周娟娟），今后我会成为宝贝的丈夫，永远在一起，老婆我爱你>_<', '2019-01-28 18:25:52');

-- --------------------------------------------------------

--
-- 表的结构 `tb_talk_look`
--

CREATE TABLE `tb_talk_look` (
  `id` int(10) NOT NULL,
  `nickname` text COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin NOT NULL,
  `createtime` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `tb_talk_look`
--

INSERT INTO `tb_talk_look` (`id`, `nickname`, `content`, `createtime`) VALUES
(7, 'Jane', '我是Jane（周娟娟），我爱志银（陈志振），今后我会成为他的妻子，携手一生，白头到老', '2019-01-28 18:22:44'),
(8, '志银', '@jane\r\n我是志银（陈志振），我爱jane宝贝（周娟娟），今后我会成为宝贝的丈夫，永远在一起，老婆我爱你>_<', '2019-01-28 18:25:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_talk`
--
ALTER TABLE `tb_talk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_talk_look`
--
ALTER TABLE `tb_talk_look`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `tb_talk`
--
ALTER TABLE `tb_talk`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `tb_talk_look`
--
ALTER TABLE `tb_talk_look`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
