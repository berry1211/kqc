<template>
  <div id="kqctimes">
    <div id="kqctimes-container">

      <div class="content-wrapper">
        <div class="main-content-wrapper">
          <h2>{{ this_year }}</h2>

          <div class="times-model-wrapper">
            <h3>{{ kqctimes.title }}</h3>
            <p class="sub-title">〜{{ kqctimes.sub_title }}〜</p>
            <div class="content-summary-wrapper">
              <p>{{ kqctimes.content }}</p>
            </div>
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
      kqctimes: []
    }
  },
  created: function(){
    document.title = 'KQCTimes | KQC会員用'
  },
  created: function (){
    var href = window.location.href;
    var idNum;
    if (href.indexOf("!") >= 0) {
      idNum = href.substring(href.indexOf("!")+1, href.length)
    }
    console.log(idNum);
    axios.get('https://api-kqc.herokuapp.com/kqc-times/'+idNum)
      .then(response => {
        this.kqctimes = response.data
        console.log(response.data);
        console.log('List:', kqctimes);
      })
      .catch(error => {
        console.log(error);
      });
  },
  watch: {
    $route: function() {
        window.scrollTo(0,0);
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
    width: 700px;
    margin-left: 8px;
    margin-right: auto;
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
    margin-left: 740px;
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
