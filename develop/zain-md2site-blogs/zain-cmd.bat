REM ����ʾ��������
@echo off


REM ��������UTF-8����
REM chcp 65001


REM ����cmd��������
rem mode con cols=51 lines=15
title=ZainJane
color 02



REM ����
cls

REM ��ʾ��
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