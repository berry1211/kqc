<template>
  <div id="edit-rule">
    <div id="edit-wrapper">
      <h1>{{ message }}</h1>
      <form accept-charset="UTF-8">
        <textarea name="content" id="body" class="content-textarea" :value="this.rule.body"></textarea>
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
  name: 'edit-rule',
  data () {
    return {
      'message': '同好会規則を編集',
      rule: ''
    }
  },
  created: function(){
    document.title = '同好会規則を編集 | KQC会員用'
    this.getRule()
  },
  methods: {
    submit: function (event){
      let id = this.rule.id
      let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
      let body = document.getElementById('body').value;
      let params = {
        "body": body
      }
      console.log(params);
      axios.patch(baseUrl + '/rule')
        .then(response => {
          this.$router.push({ path: '/members/rules' })
        })
        .catch(error => {
          console.log(error);
        })
    },
    cancel: function (event){
      this.$router.push({ path: '/members/information' })
    },
    getRule: function(event) {
      let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
      axios.get(baseUrl + '/rule')
        .then(response => {
          let data = response.data
          this.rule = data
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

#edit-rule{
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
