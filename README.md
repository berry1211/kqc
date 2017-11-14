# KQC
## Description
This is a web site for KQC(Keio Qudo Club), had been developed since 2017.
Author is HALU5071 (Yasunori Horii)

## For KQC Developer
This website is built on Single Page Application using `vue.js`

### API Information
This web site use `Cloud Functions for Firebase`.
see `api` directory.

### Build on local environment
`npm install`  
`npm run dev`  

### 本番環境へのデプロイ
本番環境へデプロイする際には、  
`npm run build`  
を実行した後に、生成される/distフォルダをpushしてください。その際には、`git subtree`コマンドを使用してください。  
以下のサイトを参考にすると良いです  
http://heimusu.hatenablog.com/entry/2017/02/27/220000

## Dependencies of Packages
このNode.jsプロジェクトでは、以下のPackagesを利用しています。

- vue >= 2.3.3
- vue-router >= 2.3.1
- axios

- node >= 8.1.2
- npm >= 5.0.3

# License
This web site is created by HALU5071(Yasunori Horii).  
Copyright (c) 2017 HALU5071. All Rights Reserved.
