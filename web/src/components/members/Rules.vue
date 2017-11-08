<template>
  <div id="rules">
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
  </div>
</template>

<script>
export default {
  name: 'rules',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Rules'
    }
  },
  created: function(){
    document.title = '規約 | KQC会員用'
  },

  created: function () {
    axios.get('http://127.0.0.1:8000/info')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#rules{
  height: 800px;
}
a {
  color: #42b983;
}
</style>
