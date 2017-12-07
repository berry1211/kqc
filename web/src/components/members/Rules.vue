<template>
  <div id="rules">
    <p v-html="compiledMarkdown"></p>
  </div>
</template>

<script>
export default {
  name: 'rules',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Rules',
      ourRule: 'ほげほげ'
    }
  },
  created: function () {
    let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
    axios.get(baseUrl + '/rule')
      .then(response => {
        this.ourRule = response.data.body
      })
      .catch(error => {
      })
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.ourRule, { sanitize: true })
    }
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
