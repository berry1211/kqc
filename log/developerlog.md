# 1206
吉田さんと話し合い。重要事項は以下の通り。

- 3年生（30期）は就活に差し掛かり、「就活掲示板」が重要になってくる。
- 引き継ぎがうまくいくことを気にしている。
- 移行のメリットを提示することが求められている。
- 基本機能をすべて引き継ぐことが求められている。

## 整理 -- 新規移行の目的 --
- 今のサイトは19期が作ったもの
- セキュリティも甘く、エラーの発生も増した
- Web担当の負担が大きくなっている

以上を踏まえ、
- Web担当の知識が少なくても管理できるように、
- またデザインを一新し、
- スマホにも対応させる。  

ことが目的

## 条件
僕は12月23日までに基本実装を終わらせ、翌年2018年3月31日までの追加開発・全データ引き継ぎ・サポートをする。  
ただし、それ移行の追加機能開発は行わず、32期へのマニュアル引き継ぎだけ行う。

なので、追加機能開発の要望は、2018年2月28日までで締め切る。

## 優先順位

1. 基本セキュリティ
2. デザイン（スマホ対応を含む）
3. 就活掲示板
4. インフォ
5. KQC Times
6. データ引き継ぎ
7. 同好会規則
8. 試合結果
9. 応用セキュリティ

## 各項目詳細
### 基本セキュリティ
#### 要件

1. 会員と内務アカウントを分けること
2. Informationおよび就活掲示板については、項目内部にPasswordををもたせ、作成者が編集・削除することを可能に。
3. ただし、内務アカウントは神アカウント。すべての項目のCRUDを行える。

#### 実装要素
1. 会員と内務アカウントを分けるのは問題ない。
2. 項目内部にPasswordを持たせて判定するもの問題ない。
3. 各アカウントでトークンを発行する。JSONで記述されてBase64エンコードされたトークンとして発行し、クライアントで判定する。（この機能は追加実装とし、Security Update Milestoneにて実装）
  JSONの内容は以下の通り
  ```
  for commons
  {
    "login": "commons",
    "name": "kqc2017",
    "password": "yosaki71",
    "limit": 1522508399
  }

  or

  for 内務
  {
    "login": "naimu",
    "name": "naimu",
    "password": "yoshida",
    "limit": 1522508399
  }
  ```

### デザイン
#### 要件
1. スマホのデザインは必須。
2. 動画デザインの検討

#### 実装要素
1. トップにて動画の実装。絵コンテは準備済み

### 就活掲示板
#### 要件
1. 出来る限りデータは残したい。（めんどい）

#### 実装要素
1. 親要素と子要素の追加。コメントできるように
2. Passwordを付けて、本人だけが編集できるように
3. ただし内務アカウントは神アカウント。なんでも編集できる

### インフォ
就活掲示板とほぼおなじなので省略

### KQC Times
就活掲示板とほぼおなじなので省略

### 同好会規則
基本的には静的サイトだが、後から簡単に編集できるようにしたいのでAPI作る。（めんどい）
