<template>
  <div id="rules">
    <p v-html="ourRule.replace(/\n/g, '<br>')"></p>
    <p v-on:click="editRule">編集</p>
  </div>
</template>

<script>
export default {
  name: 'rules',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Rules',
      ourRule: ''
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
  },
  methods: {
    editRule: function(event) {
      if (this.$store.state.UserName === 'naimu') {
        this.$router.push({ path: '/members/rules/edit' })
      } else {
        alert('編集権限がありません')
      }
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
p {
  display: inline-block;
}
p:hover {
  cursor: pointer;
}
a {
  color: #42b983;
}
</style>
