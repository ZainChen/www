-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3308
-- 生成日期： 2019-01-28 11:25:36
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
  `id` int(10) NOT NULL,
  `nickname` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text NOT NULL,
  `createtime` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tb_talk`
--

INSERT INTO `tb_talk` (`id`, `nickname`, `content`, `createtime`) VALUES
(1, '志银', '哈哈哈哈', '2019-01-28 00:58:07');

-- --------------------------------------------------------

--
-- 表的结构 `tb_talk_look`
--

CREATE TABLE `tb_talk_look` (
  `id` int(10) NOT NULL,
  `nickname` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text NOT NULL,
  `createtime` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tb_talk_look`
--

INSERT INTO `tb_talk_look` (`id`, `nickname`, `content`, `createtime`) VALUES
(1, '志银', '哈哈哈哈', '2019-01-28 00:58:07');

--
-- 转储表的索引
--

--
-- 表的索引 `tb_talk`
--
ALTER TABLE `tb_talk`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `tb_talk_look`
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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `tb_talk_look`
--
ALTER TABLE `tb_talk_look`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
