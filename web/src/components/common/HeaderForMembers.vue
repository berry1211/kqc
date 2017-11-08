<template>
  <div id="header">
    <div class="header-content-wrapper">
      <div class="logo-wrapper">
        <router-link to="/"><img src="../../assets/kqc.png" height="30px"/></router-link>
        <p class="version-code">ver.α</p>
      </div>


      <div class="global-bar-wrapper">
        <div class="global-bar-container">
          <router-link to="/intro" class="bar-content"><p>紹介</p></router-link>
          <router-link to="/schedule" class="bar-content"><p>予定</p></router-link>
          <router-link to="/contest-result" class="bar-content"><p>試合結果</p></router-link>
          <router-link to="/links" class="bar-content"><p>リンク</p></router-link>
        </div>
      </div>
      <div class="login-button-wrapper" v-on:click="toMembersTop">
        <div class="credential-container" >
          <img src="../../assets/ic_person_white_24dp.png" class="member-image" />
          <p>Members</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-for-members',
  data () {
    return {
    }
  },
  methods: {
    toMembersTop: function (event){
      this.$router.push({ path: '/members' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

@media screen and (max-width: 480px) {
  .header-login{
    width: 100px;
    margin-right: 0px;
    margin-left: auto;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }
  .header-content-wrapper{
  }
  .login-button-wrapper{
    width: 80px;
    height: inherit;
    margin-left: auto;
    margin-right: 0px;
    line-height: 60px;
  }
  #header{
    height: 60px;
    width: 100%;
    background: #424242;
  }
}

@media screen and (min-width: 480px) {
  .header-content-wrapper{
    width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
  .global-bar-wrapper{
    display: block;
    width: 400px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .global-bar-container{
    height: auto;
  }
  .bar-content{
    height: auto;
    line-height: 60px;
    text-decoration: none;
    display: inline-block;
    float: left;
    text-align: center;
  }
  .bar-content :hover{
    background: #212121;
  }

  .logo-wrapper{
    line-height: 36px;
    padding-top: 15px;
    float: left;
  }
  .version-code{
    display: inline-block;
    color: #fff;
  }
  .bar-content p{
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 24px;
    padding-right: 24px;
    font-weight: bold;
  }
  .header-login{
    width: 120px;
    margin-right: 0px;
    margin-left: auto;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }
  .login-button-wrapper{
    width: 120px;
    height: 60px;
    margin-left: auto;
    line-height: 60px;
  }
  .credential-container p{
    display: inline-block;
    line-height: 60px;
    padding-top: 2px;
    font-weight: bold;
    margin-left: 4px;
    color: #fff;
  }
  .member-image{
    display: block;
    width: 30px;
    height: 30px;
    padding-top: 16px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    float: left;
  }
  #header{
    height: 60px;
    width: 100%;
    background: #424242;
  }
}
#header{
  height: 60px;
  width: 100%;
  background: #424242;
}

a {
  color: #e0e0e0;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
