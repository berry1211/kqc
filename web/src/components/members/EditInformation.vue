<template>
  <div id="edit-information">
    <div id="edit-wrapper">
      <h1>{{ message }}</h1>
      <form accept-charset="UTF-8">
        <input type="text" name="title" id="title" placeholder="タイトル" class="title-input" :value="information.title"/>
        <input type="text" name="publisher" id="publisher" placeholder="投稿者名" class="publisher-input" :value="information.publisher"/>
        <textarea name="content" id="body" class="content-textarea" :value="information.body"></textarea>
      </form>
    </div>

    <div style="display: flex">
      <div class="cancel-information" v-on:click="cancel">
        <p class="submit-value">キャンセル</p>
      </div>

      <div class="submit-information" v-on:click="submit">
        <p class="submit-value">変更を投稿する</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'edit-kqctimes',
  data () {
    return {
      'message': 'Informationを編集',
      information: ''
    }
  },
  created: function(){
    document.title = 'インフォメーションを作成 | KQC会員用'
    this.getInformation()
  },
  methods: {
    submit: function (event){
      let id = this.information.id
      let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
      let body = document.getElementById('body').value;
      let params = {
        "body": body
      }
      axios.patch(baseUrl + '/information/' + id, params)
        .then(response => {
          this.$router.push({ path: '/members/information' })
        })
    },
    cancel: function (event){
      this.$router.push({ path: '/members/information' })
    },
    getInformation: function(event) {
      let tmp = location.href.replace(/\?.*$/, '').split('/')
      // その中で、最後にくる数字を取得。これがイベントID
      var id = tmp[tmp.length - 2]
      console.log(id)
      let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
      axios.get(baseUrl + '/information/' + id)
        .then(response => {
          let data = response.data
          for(let elem in data) {
            this.information = data[elem]
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#edit-information{
  height: 100%;
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
}
#edit-wrapper{
  margin-top: 32px;
}
.title-input{
  width: 936px;
  height: 48px;
  font-size: 32px;
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  color: #616161;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 24px;
  margin-bottom: 4px;
}
.title-input::-webkit-input-placeholder{
  color: #bdbdbd;
}
.sub-title-input{
  width: 936px;
  height: 30px;
  font-size: 16px;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  clear: left;
}
.sub-title-input::-webkit-input-placeholder{
  color: #bdbdbd;
}
.publisher-input{
  width: 936px;
  height: 30px;
  font-size: 16px;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  clear: left;
}
.publisher-input::-webkit-input-placeholder{
  color: #bdbdbd;
}
.cancel-information{
  display: block;
  width: 200px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  background: #E0E0E0;
  border-radius: 4px;
  color: #424242;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.submit-information{
  display: block;
  width: 200px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  background: #2196F3;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.content-textarea{
  width: 944px;
  height: 600px;
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  font-size: 16px;
  margin-top: 4px;
  padding: 8px;
}
.submit-value{
  text-align: center;
  line-height: 48px;
}
a {
  color: #42b983;
}
</style>
