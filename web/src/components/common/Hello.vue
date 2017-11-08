<template>
  <div id="hello">
    <div class="main-contents-wrapper">
      <h1>{{ msg }}</h1>
      <h2>{{ msg_sub }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'This is a WebSite for KQC'
    }
  },
  created: function(){
    document.title = 'KQC'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#hello{
  height: 800px;
}

.main-contents-wrapper{
}
a {
  color: #424242;
}
</style>
