<template>
  <div id="hunting-job-detail">
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
  </div>
</template>

<script>
export default {
  name: 'huntingjobdetail',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Hunting Job Detail'
    }
  },
  created: function(){
    document.title = '就活情報詳細 | KQC会員用'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

@media screen and (max-width: 480px) {
  #hunting-job-detail{
    height: 800px;
  }
}
#hunting-job-detail{
  height: 800px;
}
a {
  color: #42b983;
}
</style>
