<template>
  <div id="information">
    <div id="information-container">
      <div class="cover-image-wrapper">
        <div class="cover-image-container">
          <img src="../../assets/information.png" class="cover-image"/>
          <h1>{{ msg_sub }}</h1>
          <h1 class="sub-h1">{{ msg_sub1 }}</h1>
        </div>
      </div>

      <div class="content-wrapper">
        <div id="main-content-wrapper">
          <h2>{{ this_year }}</h2>

          <ul>
            <li v-for="info of information_list">
              <div class="info-model-wrapper">
                <router-link :to="{ name: 'info-detail', params: { id: info.id }}" class="info-link"><h3>{{ info.title }}</h3></router-link>
                <p>by {{ info.publisher }}</p>
                <div class="content-summary-wrapper">
                  <p v-html="info.body.replace(/\n/g, '<br>')"></p>
                </div>
              </div>
            </li>
          </ul>

        </div>

        <div class="post-information-wrapper">
          <router-link to="/members/information/create" class="button-post">Informationを投稿</router-link>
        </div>
        <div class="sub-content-wrapper">
          <div class="title-wrapper">
            <h3 class="sub-content-title">アーカイブ</h3>
            <ul>
              <li class="list-year">2017年</li>
              <li class="list-year">2016年</li>
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
  name: 'information',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Information',
      msg_sub1: 'お知らせですよおぉぉぉぉｘ',
      this_year: '2017年',
      information_list: [],
      errors: []
    }
  },
  created: function(){
    document.title = 'インフォメーション | 会員用'
  },
  created: function(){
    var baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
    axios.get(baseUrl + '/information')
    .then(response => {
      this.information_list = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#information{
  height: auto;
}

#information-container{
  height: 100%;
  background: #F5F5F5;
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
  left: 42%;
  font-weight: normal;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  display: block;
}
h2 {
  font-size: 32px;
  font-weight: normal;
  margin-left: 32px;
  padding-top: 24px;
  margin-right: 32px;
  padding-bottom: 24px;
}
h3{
  font-size: 26px;
  font-weight: bold;
}
.info-link{
  display: inline-block;
  text-decoration: none;
  color: #2c3e50;
}
.info-link :hover {
  text-decoration: underline;
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
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  margin-bottom: 32px;
}
#main-content-wrapper{
  height: 100%;
  float: left;
  background: #fff;
  border-bottom: solid 2px #E0E0E0;
  border-left: solid 1px #E0E0E0;
  border-right: solid 1px #E0E0E0;
}
.info-model-wrapper{
  width: 748px;
  margin-left: 32px;
  margin-right: auto;
  margin-top: 32px;
  margin-bottom: 64px;
}
.content-summary-wrapper{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  clear: left;
  height: 120px;
  overflow: hidden;
}
.content-summary-wrapper p{
  font-size: 16px;
}
ul{
  list-style: none;
}
.post-information-wrapper{
  margin-left: 800px;
  margin-top: 32px;
  width: auto;
  height: auto;
  background: #e0e0e0;
}
.button-post{
  display: block;
  width: 100%;
  text-decoration: none;
  background: #2196F3;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
}
.button-post :hover{
  display: block;
  width: 100%;
  text-decoration: none;
  background: #1E88E5;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
}
.sub-content-wrapper{
  margin-left: 800px;
  margin-top: 16px;
  width: auto;
  height: 600px;
  background: #fff;
  border-bottom: solid 2px #E0E0E0;
  border-left: solid 1px #E0E0E0;
  border-right: solid 1px #E0E0E0;
  border-radius: 4px;
}
.sub-content-title{
  font-size: 18px;
  text-align: center;
  margin-bottom: 16px;
}

.title-wrapper{
  margin-left: auto;
  margin-right: auto;
  padding-top: 12px;
  height: 32px;
  width: 90px;
}
.list-year{
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
}
/*スペースのコンポーネント*/
#space{
  width: 100%;
  height: 1px;
  clear: left;
}

a {
  color: #ffffff;
}
</style>
