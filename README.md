# OutlookWebSchedule-CopyUtilityExtension
Outlookwebで枠取った後の候補日メール作成をちょっと楽にするツール

こういうヤツ
> 以下の日程の中で1時間ほどご調整頂けますでしょうか？
> 
> 2023-04-18(火) 14:00 - 15:00
> 
> 2023-04-20(木) 09:00 - 11:00
> 
> 2023-04-20(木) 12:00 - 16:00

This Extension makes it easy for you to paste in your email text.

# Name
OutlookWebSchedule-CopyUtilityExtension

# Overview
OutlookのWebで会議体情報をデベロッパーツール(F12)のconsole.logに情報を出力することで
あなたの候補日メール作成を少し楽にします。
Chrome Extensionのお勉強で作っているのでクォリティはくれぐれも期待しないでください。

By outputting selected schedule information to chrome Developper tools (F12) console.log on the Outlook Web Page 
makes it a bit easier to create an appointment list.

# Demo

1. ↓こんな会議情報を

<img src="https://github.com/harukb/OutlookWebSchedule-CopyUtilityExtension/blob/master/images/image1.png" width="320">

2. ↓ここクリックすると

<img src="https://github.com/harukb/OutlookWebSchedule-CopyUtilityExtension/blob/master/images/image3.png" width="320">

3. ↓こんな感じでデベロッパーツール(F12クリックすると出てくるやつ)のコンソールに出力します。

<img src="https://github.com/harukb/OutlookWebSchedule-CopyUtilityExtension/blob/master/images/image2.png" width="320">

# Usage
(Install後に)

1. Outlook webを開く
2. Outlook webのドメインをURLバーで確認し、manifest.jsonの"content_scripts">"matches"のURLを適宜書き換える
3. メールではなく予定表画面を開く（↑上記1 画面参照）
4. 予定表でキーワードを入力して検索を行う
5. F12をクリックする
6. 検索結果のタイルをクリックする（↑上記2 画面参照）
7. Consoleに情報が出力される（↑上記 画面参照）
8. 必要な情報を出力したら、コピーする
9. メールソフトやテキストエディタに貼りつけて不要な情報を除去したり、整形する


# Requirement
Chrome Browser
# Install

準備
1. /OutlookWebSchedule-CopyUtilityExtensionをローカルにダウンロード
1. Chromeの右上ハンバーガーメニュー>その他のツール>拡張機能を開く or chrome://extensions/
1. 1.右側のデベロッパーモードクリック
1. パッケージング化されていない拡張機能を読み込む
1. 1のフォルダを選択
Please see the details below:

手順 2: アプリや拡張機能をテストする

https://support.google.com/chrome/a/answer/2714278?hl=ja

# Note
+ 出力されないときはページをリロードしてみてください。
+ コンソールに必要な出力情報以外に、ブラウザエラーが前後に出力され煩わしい時はコンソールの出力フィルタを情報のみに変更してください。
+ 利用は自己責任で！
+ outlookwebのドメインやdomの要素が違ってたら、セルフサービスでF12で調査してmanifest.jsonやcontent_scirpt.jsを書き換えてください。
# Author
harukb(harukb@gmail.com)
# License
# References
