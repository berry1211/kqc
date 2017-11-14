<template>
  <div id="develper">
    <span id="forkongithub"><a href="https://github.com/HALU5071/kqc" target="_blank">Fork me on GitHub</a></span>
    <div class="developer-wrapper">
      <div class="cover-image-wrapper">
        <div class="cover-image-container">
          <img src="../../assets/developer.png" class="cover-image"/>
          <h1>{{ msg_sub }}</h1>
          <h1 class="sub-h1">{{ msg_sub1 }}</h1>
        </div>
      </div>

      <div class="content-wrapper">
        <div id="main-content-wrapper">
          <h2>お知らせ</h2>
          <div class="list-wrapper">
            <ul>
              <li v-for="item in introductionStr">
                <div class="list-container">
                  <h3>{{ item.title }}</h3>
                  <p class="date-announced">{{ item.date }}</p>
                  <div class="history-content-wrapper" v-html='item.body'></div>
                </div>
              </li>
            </ul>
            <div style="height: 32px;"></div>
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
      msg_sub: 'Dear All KQC members!!',
      msg_sub1: '開発担当よりお知らせ',
      this_year: '2017年',
      kqctimes_list: [],
      introductionStr: [{
        title: "KQCWeb α版の公開",
        body: "　KQCのサイトα版を公開しました。まだ一部不具合のある部分もありますので、これから改善していきます。",
        date: '2017年12月1日'
      }, {
        title: "KQCのサイトを新しくします",
        body: "　31期の堀井といいます。どうぞお見知りおきください。<br>この度KQCのWebサイトを新しくしようとおもいます。<br><br>いまのサイトは19期さんが作られたものですが、"
          + "それからいままでほとんど補修されることなく運用されてきたようです。Web担当の負担などを考慮して、サイトを改修しようとおもいます"
          + "<br><br>この改修で改善されるのは以下の３つです<br><br>　1. サイトの知識の少ないWeb担当でも、楽に管理ができるようにする。"
          + "<br>　2. サイトの安全性を高める<br>　3. サイトのデザインを（少しでも）高める"
          + "<br><br /> サイトに不満があるなど、「改善したい！」という提案は大歓迎です。31期堀井保徳までご連絡ください"
          + "<br><br> 31期 堀井保徳 horiiortho5@gmail.com",
        date: '2017年11月12日'
      }]
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
    #forkongithub{
      position:absolute;display:block;
      top:0;
      right:0;
      width:200px;
      overflow:hidden;
      height:200px;
      z-index:9999;
    }
    #forkongithub a{
      width:200px;
      position:absolute;
      top:60px;
      right:-60px;
      transform:rotate(45deg);
      -webkit-transform:rotate(45deg);
      -ms-transform:rotate(45deg);
      -moz-transform:rotate(45deg);
      -o-transform:rotate(45deg);
      box-shadow:4px 4px 10px rgba(0,0,0,0.8);
    }
  }
  #developer{
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
    min-height: 500px;
    width: 764px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
    margin-bottom: 32px;
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
