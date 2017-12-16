<template>
  <div id="edit-information">
    <div id="edit-wrapper">
      <h1>{{ message }}</h1>
      <form accept-charset="UTF-8">
        <input type="text" name="title" id="title" placeholder="タイトル" class="title-input"/>
        <input type="text" name="sub_title" id="sub_title" placeholder="サブタイトル" class="sub-title-input"/>
        <input type="text" name="publisher" id="publisher" placeholder="投稿者名" class="publisher-input"/>
        <input type="password" name="password" id="password" placeholder="パスワード" class="publisher-input"/>
        <textarea name="content" id="content" class="content-textarea"></textarea>
      </form>
    </div>

    <div class="submit-information" v-on:click="submit">
      <p class="submit-value">投稿</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'edit-kqctimes',
  data () {
    return {
      'message': 'Informationを編集'
    }
  },
  created: function(){
    document.title = 'インフォメーションを作成 | KQC会員用'
  },
  methods: {
    submit: function (event){
      var content = document.getElementById('content').value;
      var params = [
        {
          "title": title,
          "sub_title": sub_title,
          "content": content,
          "password": password,
          "year": year,
          "month": month
        }
      ];
      console.log(params);
      axios({
        method: 'patch',
        url: 'https://api-kqc.herokuapp.com/info',
        data: params
      }).then(function (response){
        console.log(response.data);
      }).catch(function (error){
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
.submit-information :hover{
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
a {
  color: #42b983;
}
</style>
