<template>
  <div id="kqctimes">
    <div id="kqctimes-container">

      <div class="content-wrapper">
        <div class="main-content-wrapper">
          <h2>{{ this_year }}</h2>

          <div class="times-model-wrapper">
            <ul>
              <li v-for="job in jobList">
                <h3>{{ job.title }}</h3>

                <div class="menu-wrapper">
                  <div class="edit-content-wrapper" v-on:click="editJob">
                    <img src="../../assets/ic_mode_edit_black_24dp.png" width="20" height="20" style="float: left;"/>
                    <p class="edit-content">編集</p>
                  </div>
                  <div class="delete-content-wrapper" v-on:click="deleteJob">
                    <img src="../../assets/ic_delete_black_24dp.png" width="20" height="20" style="float: left;"/>
                    <p class="delete-content">この投稿を削除</p>
                  </div>
                </div>
                <div class="content-summary-wrapper">
                  <p v-html="compiledMarkdown(job.body)" style="font-size: 18px;"></p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div class="sub-content-wrapper">
          <div class="title-wrapper">
            <h3 class="sub-content-title">アーカイブ</h3>
            <ul>
              <li>2017年</li>
              <li>2016年</li>
            </ul>
          </div>
        </div>

        <div id="space">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kqctimes',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'KQC Times',
      msg_sub1: '練習・合宿・コンパなどの情報をお伝えします',
      this_year: '2017年',
      id: '',
      jobList: []
    }
  },
  created: function () {
    this.getKqctimes()
  },
  methods: {
    getKqctimes: function (event) {
      let tmp = location.href.replace(/\?.*$/, '').split('/')
      // その中で、最後にくる数字を取得。これがイベントID
      var id = tmp[tmp.length - 1]
      this.id = id
      console.log(id)
      let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
      axios.get(baseUrl + '/jobs/' + id)
        .then(response => {
          console.log(response)
          this.jobList = response.data
          // for(var elem in response.data) {
          //   let key = elem.key
          //   console.log(elem[key].title);
          // }
        })
    },
    deleteJob: function(event) {
       let myPassWord = prompt("本当に就活情報を削除しますか？\nパスワードを入力してください","")
       for(var elem in this.jobList) {
         if (myPassWord === this.jobList[elem].password) {
           let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
           axios.delete(baseUrl + '/jobs/' + this.jobList[elem].id)
           this.$router.push({ path: '/members/job' })
         } else {
           alert('パスワードが間違っています')
         }
      }
    },
    editJob: function(event) {
      if (this.$store.state.UserName === 'naimu') {
        for(var elem in this.jobList) {
          let id = this.jobList[elem].id
          this.$router.push({ path: `/members/job/${id}/edit` })
        }
        return
      }
      let myPassWord = prompt("パスワードを入力してください","")
      for(var elem in this.jobList) {
        if (myPassWord === this.jobList[elem].password) {
          let jobId = this.jobList[elem].id
          this.$router.push({ path: `/members/job/${jobId}/edit` })
        } else {
          alert('パスワードが間違っています')
        }
     }
    },
    compiledMarkdown: function (text) {
      return marked(text, { sanitize: true })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 480px) {
  #kqctimes{
    height: 100%;
  }

  h1 {
    position: absolute;
    top: 32px;
    left: 396px;
    font-weight: normal;
    text-align: center;
    display: block;
  }
  .times-model-wrapper{
    width: 360px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  h3{
    font-size: 24px;
    float: left;
  }
  .sub-title{
    font-size: 20px;
    display: inline-block;
    margin-left: 32px;
    line-height: 36px;
  }
  .content-summary-wrapper{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
    clear: left;
    font-size: 14px;
  }
}

@media screen and (min-width: 480px) {
  #kqctimes{
    height: auto;
  }
  h1 {
    position: absolute;
    font-size: 48px;
    top: 40%;
    left: 40%;
    font-weight: normal;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    display: block;
  }
  .sub-h1{
    position: absolute;
    font-size: 16px;
    top: 60%;
    left: 37%;
    font-weight: normal;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    display: block;
  }
  h2 {
    font-size: 32px;
    font-weight: normal;
    margin-left: 12px;
  }
  #kqctimes-container{
    height: 100%;
    margin-top: 64px;
  }
  .cover-image-wrapper{
    width: 100%;
    height: 292px;
  }
  .cover-image-container{
    width: 100%;
    height: 292px;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
  }
  .cover-image{
    display: block;
    position: absolute;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
  }

  .content-wrapper{
    position: relative;
    height: 100%;
    min-height: 760px;
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
    margin-bottom: 32px;
  }
  .main-content-wrapper{
    height: 100%;
    float: left;
  }
  .times-model-wrapper{
    width: 780px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  ul{
    list-style: none;
  }
  h3{
    font-size: 32px;
    float: left;
    font-weight: normal;
    margin-bottom: 24px;
  }
  .sub-title{
    font-size: 20px;
    display: inline-block;
    margin-left: 32px;
    line-height: 48px;
    float: left;
  }
  .sub-status{
    font-size: 20px;
    display: inline-block;
    color: #E91E63;
    margin-left: 32px;
    line-height: 48px;
  }
  .content-summary-wrapper{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
    clear: left;
  }
  .content-summary-wrapper p{
    font-size: 16px;
  }

  .sub-content-wrapper{
    margin-left: 800px;
    margin-top: 32px;
    width: auto;
    height: 100px;
    background: #e0e0e0;
  }

  .title-wrapper{
    margin-left: 12px;
    margin-top: 12px;
  }
  .sub-content-title{
    font-size: 16px;
  }

  .menu-wrapper {
    width: 200px;
    display: flex;
    margin-right: 8px;
    margin-left: auto;
  }
  .delete-content-wrapper {
    width: 104px;
    height: 20px;
    margin-right: 8px;
    margin-left: auto;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;
    color: #424242;
    font-weight: bold;
  }
  .delete-content-wrapper :hover {
    cursor: pointer;
  }
  .delete-content {
    display: inline-block;
    font-size: 12px;
    line-height: 20px;
    margin-top: auto;
    margin-bottom: auto;
  }
  .edit-content-wrapper {
    float: left;
    width: 48px;
    height: 20px;
    margin-right: 32px;
    margin-left: auto;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;
    color: #424242;
    font-weight: bold;
  }
  .edit-content-wrapper :hover {
    cursor: pointer;
  }
  .edit-content {
    display: inline-block;
    font-size: 12px;
    line-height: 20px;
    margin-top: auto;
    margin-bottom: auto;
  }

  /*スペースのコンポーネント*/
  #space{
    width: 100%;
    height: 1px;
    clear: left;
  }
}

a {
}
a :hover{
  text-decoration: underline;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
