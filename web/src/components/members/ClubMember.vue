<template>
  <div id="club-members">
    <div id="members-container">
      <div class="cover-image-wrapper">
        <div class="cover-image-container">
          <img src="../../assets/members.png" class="cover-image"/>
          <h1>{{ msg_sub }}</h1>
          <h1 class="sub-h1">{{ msg_sub1 }}</h1>
        </div>
      </div>

      <div class="content-wrapper">
        <div id="main-content-wrapper">
          <ul>
            <li>
              <router-link to='/members/information' class="member-link">インフォメーション</router-link>
            </li>
            <li>
              <router-link to='/members/kqc-times' class="member-link">KQCTimes</router-link>
            </li>
            <li>
              <router-link to='/members/job' class="member-link">就活掲示板</router-link>
            </li>
            <li>
              <router-link to='/members/record' class="member-link">議事録</router-link>
            </li>
            <li>
              <router-link to='/members/rules' class="member-link">同好会規則</router-link>
            </li>
            <li>
              <router-link to='/developer' class="member-link">開発担当よりお知らせ</router-link>
            </li>
          </ul>
          <!-- <router-link to='/members/rules' class="member-link">規約</router-link> -->
          <!-- <router-link to='/members/hunting-job-list' class="member-link">就活情報</router-link> -->
        </div>
      </div>

      <div id="space">

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'For KQC Members',
      msg_sub1: 'KQC会員専用ページです'
    }
  },
  created: function(){
    document.title = '会員用 | KQC'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 480px) {
  h1, h2 {
    font-weight: normal;
    margin-left: 10px;
  }

  #club-members{
    height: 100%;
  }

  .member-link :hover{
  }
}

@media screen and (min-width: 480px) {
  #club-members{
    height: auto;
  }
  #members-container{
    height: 100%;
    background: #F5F5F5;
  }
  h1 {
    position: absolute;
    font-size: 48px;
    top: 40%;
    left: 34%;
    font-weight: normal;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    display: inline-block;
    margin-right: auto;
    margin-left: auto;
  }
  .sub-h1{
    position: absolute;
    font-size: 16px;
    top: 60%;
    left: 43%;
    font-weight: normal;
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
  .member-link :hover{
  }
  /*スペースのコンポーネント*/
  #space{
    width: 100%;
    height: 1px;
    clear: left;
  }
}
a{
  text-decoration: none;
}

</style>
