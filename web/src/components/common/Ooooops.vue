<!-- このテンプレートは、パスワード認証が不正である場合に表示します -->
<template>
  <div id="ooops">
    <div class="main-contents-wrapper">
      <div class="container">
        <h1>{{ msg }}</h1>
        <h2>{{ msg_sub }}</h2>
        <img src="../../assets/kqc.png" class="logo"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Oooooops!!!',
      msg_sub: 'Invalid Credential'
    }
  },
  created: function(){
    document.title = 'KQC'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: auto;
  margin-bottom: auto;
  font-weight: normal;
  font-size: 100px;
  text-align: center;
  color: #fff;
}
h2{
  margin-top: auto;
  margin-bottom: auto;
  font-weight: normal;
  font-size: 30px;
  text-align: center;
  color: #fff;
}

#ooops{
  height: 1020px;
  width: 100%;
  background: #424242;
}

.logo{
  display: block;
  width: 100px;
  margin-top: 250px;
  margin-left: auto;
  margin-right: auto;
}

.container{
  width: 550px;
  margin-left: auto;
  margin-right: auto;
}
.main-contents-wrapper{
  height: 300px;
  padding-top: 248px;
}
a {
  color: #424242;
}
</style>
