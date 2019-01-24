REM 不显示自身命令
@echo off


REM 声明采用UTF-8编码
REM chcp 65001


REM 调整cmd窗口属性
rem mode con cols=51 lines=15
title=ZainJane
color 02



REM 清屏
cls

REM 提示窗
echo           ******************************
echo           *   Please select function:  *
echo           *   1.npm install            *
echo           *   2.npm start              *
echo           *   3.npm run build          *
echo           ******************************

set /p k="please enter: "

if "%k%" == "1" npm install
if "%k%" == "2" npm start
if "%k%" == "3" npm run build


rem pause