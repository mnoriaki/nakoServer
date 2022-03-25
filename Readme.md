# なでしこで作るwebサービス
## 概要
LINE のような見た目で対話的なサービスを作るサンプルプログラムです。プログラミング言語は[なでしこ](https://nadesi.com/top/)を使っています。
自動応答(autoanswer.nako3)、チャット(chat.nako3)、診断メーカー(shindan.nako3)、クイズ(quiz.png)の4つのプログラムがあります。
<img src="autoanswer.png" alt="自動応答の例" width="300">

<img src="chat.png" alt="チャットの対話例" width="400">

<img src="shindan.png" alt="診断メーカーの例" width="300">

<img src="quiz.png" alt="クイズの対話例" width="300">

## 動作環境
Windows 10, macOS, Linux でテストしています。[コンソール版のなでしこ v3](https://nadesi.com/doc3/index.php?OS%E5%88%A5) で動作します。

### 実行に必要なプラグイン
実行には nadesiko3-websocket プラグインが必要です。プラグインのインストールは次のようにします。

#### Windows の場合
1. npm-install.vbs をダブルクリックして起動し、nadesiko3-webscoket をインストールします。
1. node_modules 内に fs-extra フォルダを作成します。
1. npm-update.vbs をダブルクリックして起動し、アップデートを実行します。

#### Linux / MacOS の場合
##### (1) ローカルにインストールする場合
プログラムのあるディレクトリ (src) で
```
npm install nadesiko3-websocket
```
を実行します。node_modules, package-lock.json,  package.json ができます。

##### (2) グローバルにインストールする場合
```
npm -g install nadesiko3-websocket
export NODE_PATH=/opt/homebrew/lib/node_modules 
```
を実行します。以下を .zprofile に追加する (zsh を使っている場合) と便利です。
```
export NODE_PATH=/opt/homebrew/lib/node_modules 
```

## LICENSE
src 内のプログラムやHTMLファイルなどは自由に使って構いません。fukidashi.css については https://jisuijisan.com/speech-bubble/ で公開されているものを使っています。ドキュメントについては <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a> <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</a>とします。
