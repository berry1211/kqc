<template>
  <div id="naimu">
    <div class="developer-wrapper">

      <div class="content-wrapper">
        <div id="main-content-wrapper">
          <h2>内務管理ページ</h2>

          <div class="setting-wrapper">
            <div class="setting-content">
              <p>内務パスワード</p>
              <input type="text" name="title" id="title" placeholder="パスワード"/>
            </div>

            <div class="setting-content">
              <p>一般会員パスワード</p>
              <input type="text" name="title" id="title" placeholder="パスワード"/>
            </div>
          </div>

          <div class="btn-wrapper">
            <div class="cancel-information" v-on:click="cancel">
              <p class="submit-value">キャンセル</p>
            </div>

            <div class="submit-information" v-on:click="submit">
              <p class="submit-value">保存</p>
            </div>
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
      msg_sub: 'な・い・む',
      msg_sub1: '内務管理ページ',
      this_year: '2017年'
    }
  },
  created: function(){
    document.title = 'Dear KQC members | KQC会員用'
  },
  computed: {
    introduction: function () {
      return marked(this.introductionStr, { sanitize: true })
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
    font-weight: bold;
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
  #forkongithub a{
    background:#000;
    color:#fff;
    text-decoration:none;font-family:arial,sans-serif;
    text-align:center;
    font-weight:bold;
    padding:5px 40px;
    font-size:1rem;
    line-height:2rem;
    position:relative;
    transition:0.5s;
  }
  #forkongithub a:hover{
    background:#c11;
    color:#fff;
  }
  #forkongithub a::before,#forkongithub a::after{
    content:"";
    width:100%;
    display:block;position:absolute;
    top:1px;
    left:0;
    height:1px;
    background:#fff;
  }
  #forkongithub a::after{
    bottom:1px;top:auto;
  }
  @media screen and (min-width:800px){

  }
  #naimu{
    height: auto;
  }
  h1 {
    position: absolute;
    font-size: 48px;
    top: 40%;
    left: 30%;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    display: block;
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
    min-height: 800px;
    width: 764px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    padding-top: 48px;
  }
  #main-content-wrapper{
    width: 100%;
    height: 100%;
    float: left;
    background: #fff;
    border-radius: 4px;
    border-bottom: solid 2px #E0E0E0;
    border-left: solid 1px #E0E0E0;
    border-right: solid 1px #E0E0E0;
    padding-bottom: 24px;
  }
  .developer-wrapper{
    height: 100%;
    background: #F5F5F5;
  }
  .list-wrapper{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .list-container{
    width: auto;
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 32px;
    margin-bottom: 48px;
  }
  .sub-h1{
    position: absolute;
    font-size: 16px;
    top: 60%;
    left: 44%;
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
    padding-bottom: 24px;
  }

  h3{
    font-weight: bold;
    font-size: 24px;
  }
  li{
    list-style: none;
  }
  .history-content-wrapper{
    margin-top: 16px;
    margin-left: 16px;
    display: inline-block;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .history-content-wrapper h2 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .setting-wrapper {
    width: 84%;
    margin-right: auto;
    margin-left: auto;
  }
  .setting-content {
    display: flex;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .setting-content p {
    display: inline-block;
    margin-right: 16px;
    line-height: 32px;
  }
  .setting-content input {
    width: 300px;
    border-radius: 4px;
    border: solid 1px #bdbdbd;
    color: #616161;
    padding-left: 12px;
    padding-right: 12px;
    height: 32px;
    font-size: 20px;
  }
  .title-input::-webkit-input-placeholder{
    color: #bdbdbd;
  }

  .btn-wrapper {
    display: flex;
    width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
  .cancel-information{
    display: block;
    width: 120px;
    height: 48px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    background: #E0E0E0;
    border-radius: 4px;
    color: #424242;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  .submit-information{
    display: block;
    width: 120px;
    height: 48px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    background: #2196F3;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  .submit-value{
    text-align: center;
    line-height: 48px;
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
