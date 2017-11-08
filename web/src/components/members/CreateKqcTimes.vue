<template>
  <div id="create-kqctimes">
    <div id="create-wrapper">
      <h1>{{ message }}</h1>
      <form accept-charset="UTF-8">
        <input type="text" name="title" id="title" placeholder="タイトルを入力してください" class="title-input"/>
        <input type="text" name="sub_title" id="sub_title" placeholder="サブタイトルを入力してください" class="sub-title-input"/>
        <textarea name="content" id="content" class="content-textarea"></textarea>
      </form>
    </div>

    <div class="submit-kqctimes" v-on:click="submit">
      <p class="submit-value">投稿</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'create-kqctimes',
  data () {
    return {
      'message': 'KQC Timesを作成'
    }
  },
  created: function(){
    document.title = 'KQC Timsを作成 | KQC会員用'
  },
  methods: {
    submit: function (event){
      var title = document.getElementById('title').value;
      var sub_title = document.getElementById('sub_title').value;
      var content = document.getElementById('content').value;
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var params = [
        {
          "title": title,
          "sub_title": sub_title,
          "content": content,
          "year": year,
          "month": month
        }
      ];
      console.log(params);
      axios({
        method: 'post',
        url: 'https://api-kqc.herokuapp.com/kqc-times/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: params
      }).then(response => {
        console.log(response.data);
      }).catch(error =>{
        console.log(error.status);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#create-kqctimes{
  height: 100%;
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
}
#create-wrapper{
  margin-top: 32px;
}
.title-input{
  width: 800px;
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
  width: 400px;
  height: 36px;
  font-size: 20px;
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
.submit-kqctimes{
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
.submit-kqctimes :hover{
  width: 200px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  background: #1E88E5;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.submit-value:hover{
  text-align: center;
  line-height: 48px;
}
a {
  color: #42b983;
}
</style>
