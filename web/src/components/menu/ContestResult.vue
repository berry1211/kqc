<template>
  <div id="links">
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
  </div>
</template>

<script>
export default {
  name: 'contest-result',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Contest Result'
    }
  },
  created: function(){
    document.title = '試合結果 | KQC'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#links{
  height: 800px;
  width: 960px;
  margin-left: auto;
  margin-right: auto;
}

a {
  color: #424242;
}

body{
  margin: 0px;
  padding: 0px;
}
</style>
