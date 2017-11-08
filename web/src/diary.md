# 開発日記
これは、kqc-webとkqc-apiの開発記録である。
基本的にはcommitログを見れば一目瞭然だが、開発途中に考えていたことをメモ

## 2017 / 8 / 5

## 2017 / 7 / 7
13:12  
  kqc-timesのリクエストに  
  747ms
  197ms

## 2017 / 7 / 6
Informationの基礎部分の開発は終了。  
ここから細かい修正を加えていく。  
しかし、POST部分が上手くいかない問題が一つ。これはAccess-Control-Allow-Headerの問題。  
あとは、個別につけるリンクから、どうやって個別のページに遷移するのかがわからない。

13:12  
 infoのリクエストに  
      215ms  
      199ms  
      788ms  
      198ms  
      198ms  

 kqc-timesのリクエストに  
      197ms  
      704ms  
      177ms  
      179ms  
      198ms  
      764ms  

 一般企業のAPIは約60ms以下。
 うちの規模なら100ms以下なら問題ないだろう。  
 HerokuのプランをHobbyに変える必要があるかも  

 HerokuのCollaboratorに追加すれば、料金をKQCアカウントに任せたまま開発が出来る

 Localでは上手く動作するがHerokuにデプロイした段階でApplicationErrorになる

## 2017 / 7 / 4
axiosを使ったGETがうまくいった。


## 2017 / 7 / 1
axiosのGETが上手く動作しない
