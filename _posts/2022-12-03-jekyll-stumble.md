---
layout: post
title: "Jekyllで躓いたこと"
---

このサイト、実はリニューアルオープンしてから数週間ほどの間、Jekyllの機能の一つであるブログ機能が使えない状態でした。この記事ではJekyllのブログ機能が機能しないことの解決した話をします。

# 原因

結局のところ`_config.yml`の`collections_dir:.`のせいでした。`collections_dir:.`を消したらあっさり直りました。

設定の仕方がいまいちよくわからなかったので[ここ](https://jekyllrb-ja.github.io/docs/configuration/default/)の設定をそのままコピペしました。すべての元凶はこれです。

`colections_dir`オプションについてもリファレンスサイトにはまったく記述がないです。謎。

以上！