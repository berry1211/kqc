<template>
  <div id="kqctimes">
    <div id="kqctimes-container">
      <div class="cover-image-wrapper">
        <div class="cover-image-container">
          <img src="../../assets/newspaper.png" class="cover-image"/>
          <h1>{{ msg_sub }}</h1>
          <h1 class="sub-h1">{{ msg_sub1 }}</h1>
        </div>
      </div>

      <div class="content-wrapper">
        <div id="main-content-wrapper">
          <h2>{{ this_year }}</h2>

          <ul>
            <li v-for="kqctimes of kqctimeslist">
              <div class="times-model-wrapper">
                <router-link :to="{ name: 'kqctimes-detail', params: { id: '!'+kqctimes.id }}" class="kqctimes-link"><h3>{{ kqctimes.title }}</h3></router-link>
                <p class="sub-title">〜{{ kqctimes.sub_title }}〜</p>
                <div class="content-summary-wrapper">
                  <p>{{ kqctimes.content }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="post-kqctimes-wrapper">
          <router-link to="/members/create-kqctimes" class="button-post">KQC Timesを投稿<br />（Web担）</router-link>
        </div>
        <div class="sub-content-wrapper">
          <div class="title-wrapper">
            <h3 class="sub-content-title">アーカイブ</h3>
            <ul>
              <li class="list-year">まだリンクはありません</li>
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
import Vue from 'vue';

export default {
  name: 'kqctimes',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'KQC Times',
      msg_sub1: '練習・合宿・コンパなどの情報をお伝えします',
      this_year: '',
      kqctimeslist: [],
      errors: []
    }
  },
  created: function(){
    document.title = 'KQCTimes | KQC会員用'
  },

  created: function (){
    var date = new Date();
    var year = date.getFullYear();
    this.this_year = year + '年'
    var baseUrl = 'https://api-kqc.herokuapp.com/kqc-times/'
    var paramOpe = '?year='
    axios.get(baseUrl + paramOpe + year)
      .then(response => {
        this.kqctimeslist = response.data
        console.log(response.data);
      })
      .catch(e => {
        this.errors.push(e)
      })
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
    margin-left: 32px;
    padding-top: 24px;
    margin-right: 32px;
    padding-bottom: 24px;
  }
  #kqctimes-container{
    height: 100%;
    background: #F5F5F5;
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
  .times-model-wrapper{
    width: 748px;
    margin-left: 32px;
    margin-right: auto;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  .kqctimes-list-item{
    color: inherit;
  }
  ul{
    list-style: none;
  }
  h3{
    font-size: 32px;
    float: left;
    font-weight: normal;
  }
  .kqctimes-link{
    text-decoration: none;
    color: #2c3e50;
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
    float: left;
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

  .post-kqctimes-wrapper{
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
    border-bottom: solid 2px #E0E0E0;
    border-left: solid 1px #E0E0E0;
    border-right: solid 1px #E0E0E0;
    border-radius: 4px;
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
    border-bottom: solid 2px #E0E0E0;
    border-left: solid 1px #E0E0E0;
    border-right: solid 1px #E0E0E0;
    border-radius: 4px;
  }


  /*サブコンテンツのCSS*/
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
    font-weight: bold;
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
