---
layout: post
title: "ストフラ二十二話追加"
---

ロスト・フラグメント第二十二話を追加しました。何かが動き始めます。

# 実は最近プルリク駆動で更新しています

最近、サイトの更新にプルリクエストを使い始めました（遅い）。

具体的には、

1. 新話を追加するたびにブランチを切って
2. その新話と新話に関連する作業をそのブランチでやったら
3. プルリクエストを発行して
4. 作者に確認をもらってからマージする

という流れです。

作者等にコードを読ませるのは少々苦しいところはありますが、作者が読むファイルはそこまでHTMLが濃くないファイルなので、多分なんとかなっていると思います。一回、作者さんに聞かねば…！

実はこのワークフローを始めたのがストフラ21話からで、結構気に入っています。作者に素のコードを全部確認できると安心感があります。個性派文庫のサイトのリポジトリを見ているようなマニアックなファンなら（そんな人がいるとは思っていないけど…）気づいているかもしれませんが、結構いたるところで誤字って、修正のコミットをしています。大体僕の誤字です。ううう…。

# DiscordとGitHubの連携をしてみた

大学のサークルが、GitHubのリポジトリでの活動がDiscordに通知される仕組みを導入していました。上記のプルリク駆動の導入で、作者に通知を遅れたら便利だなぁとか思ったので、導入してみました。

サークルではリポジトリ単位で通知していましたが、Organizationでもできるみたいだったのでそっちに。通知するイベントを特に制限しなかったので、現在、定時ビルドのたびに通知が飛んできています。ちょっとうるさすぎるので、それとは別にプルリク専用の通知チャンネルを作って、そっちに通知するようにしました。となるとやっぱり定時ビルドの通知は切ってもいいかもしれないですね。

これを導入したので、作者に仕事しているアピールができるので、結構嬉しいですね。
