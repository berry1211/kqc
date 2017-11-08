<template>
  <div id="intro">

  </div>
</template>

<script>
export default {
  name: 'introduction',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Introduction'
    }
  },
  created: function(){
    document.title = '紹介 | KQC'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#intro{
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
