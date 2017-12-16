<template>
  <div id="edit_job">
    <div id="edit_job_container">
      <textarea :value="jobBody" @input="update" class="editting-area" id="body"></textarea>
      <div class="marked" v-html="compiledMarkdown"></div>
    </div>
    <div id="space">

    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-job',
  data () {
    return {
      job: '',
      jobBody: ''
    }
  },
  created: function () {
    this.getJobs()
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.jobBody, { sanitize: true })
    }
  },
  methods: {
    getJobs: function (event) {
      let tmp = location.href.replace(/\?.*$/, '').split('/')
      // その中で、最後にくる数字を取得。これがイベントID
      var id = tmp[tmp.length - 2]
      this.id = id
      let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
      axios.get(baseUrl + '/jobs/' + id)
        .then(response => {
          console.log(response)
          for(var elem in response.data) {
            this.job = response.data[elem]
          }
          this.jobBody = this.job.body
        })
    },
    patchJobs: function(event) {
      const body = document.getElementById('body').value
      const baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
      let requestBody = {
        "body": body
      }
      axios.patch(baseUrl + '/jobs')
    },
    update: function(event) {
      this.jobBody = event.target.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#edit_job {
  width: 100%;
  min-height: 900px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Helvetica Neue'
}
#edit_job_container {
  min-height: 900px;
  height: 100%;
  display: flex;
}
.editting-area {
  width: 50%;
  float: left;
  min-height: 900px;
  height: 100%;
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  font-size: 16px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  color: #333;
}
.marked {
  width: 50%;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  color: #333;
  vertical-align: top;
}
a {
}
a :hover{
  text-decoration: underline;
}
/*スペースのコンポーネント*/
#space{
  width: 100%;
  height: 1px;
  clear: left;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
