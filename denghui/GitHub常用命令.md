# 连接GitHub账号
ssh-keygen -t rsa -C "2384439266@qq.com"  //生成SSH Key
后面的 2384439266@qq.com 改为你在 github 上注册的邮箱，之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。成功的话会在~/下生成.ssh文件夹，进去，打开 id_rsa.pub，复制里面的 key。
到 github 上，进入 Account => Settings（账户配置）。添加SSH keys。
验证是否成功：
ssh -T git@github.com
Hi ZainChen! You've successfully authenticated, but GitHub does not provide shell access.


# Git 创建仓库(初始化 Git 仓库)
git init  //当前目录作为Git仓库
git init zain //指定目录作为Git仓库(在 zain 目录下会出现一个名为 .git 的目录)。
git add *.c  //告诉 Git 开始对这些文件进行跟踪(文件纳入版本控制，需要先用 git add 命令告诉 Git 开始对这些文件进行跟踪，然后提交)
git add README
git commit -m '初始化项目版本'
(以上命令将目录下以 .c 结尾及 README 文件提交到仓库中。)


# 克隆仓库
git clone <repo>  // 从现有 Git 仓库中拷贝项目到当前目录
git clone <repo> <directory> // 从现有 Git 仓库中拷贝项目到指定目录
(参数说明：repo:Git 仓库;directory:本地目录)
例：
比如，要克隆 Ruby 语言的 Git 代码仓库 Grit，可以用下面的命令：
$ git clone git://github.com/schacon/grit.git
执行该命令后，会在当前目录下创建一个名为grit的目录，其中包含一个 .git 的目录，用于保存下载下来的所有版本记录。
如果要自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：
$ git clone git://github.com/schacon/grit.git mygrit

## 各种写法
git clone 时，可以所用不同的协议，包括 ssh, git, https 等，其中最常用的是 ssh，因为速度较快，还可以配置公钥免输入密码。各种写法如下：
git clone git@github.com:fsliurujie/test.git         --SSH协议
git clone git://github.com/fsliurujie/test.git          --GIT协议
git clone https://github.com/fsliurujie/test.git      --HTTPS协议


# 实践
## 初始化本地项目上传到GitHub指定项目中
git init  //当前目录作为Git仓库
echo "# zain" >> README.md  //创建README.md文件，写入相关内容
git add * //将项目中的所有文件添加到仓库中
git add README.md  //指定文件添加到仓库中
git status  //修改相应文件后查看当前的git仓库状态(查看仓库中哪些文件被改动)
git commit -m "first commit"  //提交到仓库
git remote add origin https://github.com/ZainChen/zain.git  //将本地的仓库关联到GitHub，后面的https改成刚刚自己的地址(HTTPS和SSH都可以)(origin是本地默认的一个名称，可自定义)
git pull origin master  //上传github之前pull一下，拉取当前分支最新代码(主分支)
git push -u origin master  //上传代码到GitHub远程仓库(上传到主分支)

## 克隆GitHub指定项目到本地修改并提交
git clone git@github.com:ZainChen/LeidaMovie.git  //克隆GitHub指定项目到本地
cd LeidaMovie  //进入工程目录
git checkout gh-pages  //切换分支(gh-pages为目标切换分支)
git checkout master  //切换到主分支
git status  //修改相应文件后查看当前的git仓库状态(查看仓库中哪些文件被改动)
git add *  //将项目中的所有文件添加到仓库中
git commit -m "add all file"  //将暂存区里的改动给提交到本地版本库
git pull  //拉取当前分支最新代码
git push origin master  //push到远程master分支上

## 分支操作
### 新建分支
git checkout -b zain  //新建zain分支
git branch -a  //查看当前所有的分支(结果显示带*号的，而且颜色是绿色的即为我们当前所在的分支)
git checkout zain  //切换到zain分支
git branch  //查看分支
git pull origin zain  //拉取当前分支最新代码(origin是本地默认的一个名称，自己在新建本地仓库的时候是可以改名。平常使用的git pull都是默认从master分支上拉去代码。这里是从zain分支上拉取代码)
git push origin zain  //提交本地代码到zain分支
### 合并分支(方法1)
1.zain 合并到 master
git checkout master  //切换到主分支master
git merge zain  //zain 合并到 master
git pull origin master
git push origin master
2.master 合并到 zain
git checkout zain  //切换到分支zain
git merge master  //master 合并到 zain
git pull origin zain
git push origin zain
### 合并分支(方法2)
1.zain 合并到 master
git checkout zain  //切换到分支zain
git rebase master    //zain 合并到  master
git checkout master  //切换到主分支master
git pull origin master
git push origin master
2.master 合并到 zain
git checkout master  //切换到分支master
git rebase zain    //master 合并到 zain
git checkout zain  //切换到分支zain
git pull origin zain
git push origin zain
### 删除分支
git checkout master  //切换到分支master
git branch -d zain  //删除zain分支(删除本地分支)
git push origin :zain  //删除zain分支(删除远程分支)


# 查看修改前后具体变化
(注：以下命令可以不指定 (filename)，则对全部文件操作。 以下命令涉及和 Git仓库 对比的，均可指定 commit 的版本。)
## 工作目录 vs 暂存区
git diff (filename)  //工作目录 vs 暂存区
注：查看文件在工作目录与暂存区的差别。如果还没 add 进暂存区，则查看文件自身修改前后的差别。也可查看和另一分支的区别。
git diff (branch) (filename)  //工作目录 vs 暂存区(指定分支(branch))
## 暂存区 vs Git仓库
git diff --cached (filename)  //暂存区 vs Git仓库
注：表示查看已经 add 进暂存区但是尚未 commit 的内容同最新一次 commit 时的内容的差异。 也可以指定仓库版本：
git diff --cached (commit) (filename)  //暂存区 vs Git仓库(指定仓库(commit))
## 工作目录 vs Git仓库
git diff (commit) (filename)  //工作目录 vs Git仓库
注：查看工作目录同Git仓库指定 commit 的内容的差异。 (commit)=HEAD 时：查看工作目录同最近一次 commit 的内容的差异。
## Git仓库 vs Git仓库
git diff (commit) (commit)  //Git仓库 vs Git仓库
意义：Git仓库任意两次 commit 之间的差别。
例：
git log  //查看git仓库版本id
git diff 4c543967f205baca240a1505cc8bec6b54324c3a 34025e8330903e813cfdf0382869bfbb6d18141b > ./diff.txt  //对比结果写入到文件diff.txt中
## HEAD说明
HEAD 最近一次 commit
HEAD^  上次提交
HEAD~100 上100次提交
每次提交产生的哈希值


# 查看两个分支差异
假设有两个分支：master, zain
git log zain ^master  //查看 zain 有，而 master 中没有的
git log master ^zain  //查看 master 有，而 zain 中没有的
git log master..zain  //查看 zain 中比 master 中多提交了哪些内容(列出来的是两个点后边分支(此处即zain)多提交的内容)
git log zain..master  //查看 master 中比 zain 中多提交了哪些内容
git log zain...master  //查看 master 与 zain 的差异
git log --left-right dev...master  //查看 master 与 zain 的差异且显示每个提交是在哪个分支上(左箭头 < 表示是 dev 的，右箭头 > 表示是 master)


# Git 查看提交历史
git log  //列出所有历史提交记录
git log --oneline  //查看历史记录的简洁的版本
git log --oneline --graph  //查看历史中什么时候出现了分支、合并
git log --reverse --oneline  //逆向显示所有日志
git log --author=zain --oneline -5  //查找指定用户的提交日志
指定日期，可以执行几个选项：--since 和 --before，但是你也可以用 --until 和 --after。
例:
git log --oneline --before={3.weeks.ago} --after={2010-04-18} --no-merges  //看 Git 项目中三周前且在四月十八日之后的所有提交(--no-merges 选项，隐藏合并提交)
