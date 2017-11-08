<!--
ここではサイトの全体要素を決定しています。

router-viewタグで記述される要素には、index.jsで決定されるcomponentが挿入されます。
また、router-viewは以下のルールに従います

========== RULES ==========

- router-viewタグ内に、name要素がない場合
name要素は自動的に name="default" が挿入され、index.jsのルーティングの際にdefaultで指定したコンポーネントが挿入されます。

- router-viewタグ内に、name要素が存在する場合
index.jsのルーティングの際に、ここでname要素が指定したコンポーネントが挿入されます。

===========================
-->

<template>
  <div id="app">
    <div id="header">
      <router-view name="header"></router-view>
    </div>
    <div id="main_contents">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@media screen and (max-width: 480px) {
  #main_contents{
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width:480px) {

  #main_contents{
    width: 100%;
    height: auto;
    min-height: 840px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
