<template>
  <div id="header">
    <div class="header-content-wrapper">
      <div class="logo-wrapper">
        <router-link to="/"><img src="../../assets/kqc.png" height="30px"/></router-link>
        <p class="version-code">ver.α</p>
      </div>


      <div class="global-bar-wrapper">
        <div class="global-bar-container">
          <router-link to="/" class="bar-content"><p>紹介</p></router-link>
          <router-link to="/schedule" class="bar-content"><p>予定</p></router-link>
          <router-link to="/contest-result" class="bar-content"><p>試合結果</p></router-link>
          <router-link to="/links" class="bar-content"><p>リンク</p></router-link>
        </div>
      </div>

      <div class="login-button-wrapper">
        <div class="header-login" v-on:click="checkCredential"><p>会員専用</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import Storage from '../../js/storage-manager'
export default {
  name: 'header',
  data () {
    return {
    }
  },
  beforeMount: function() {
    this.checkLoginStatus()
  },
  methods: {
    checkCredential: function (event){
      // ここでユーザーのチェック
      let userName = this.$store.state.UserName
      console.log(userName);
      if (userName === 'common' || userName === 'naimu') {
        this.$router.push({ path: '/members' })
        return
      }
      let password = prompt("パスワードを入力してください", "")
      let param = {
        "password": password
      }
      let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
      axios.post(baseUrl + '/login', param)
        .then(response => {
          console.log('Logged in');
          this.$store.commit('login', response.data.password)
          this.$store.commit('setName', response.data.name)
          Storage.setPassword(response.data.password)
          this.$router.push({ path: '/members' })
        })
        .catch(error => {
          console.log('Reject Logged in');
          this.$router.push({ path: '/oops' })
        })
    },
    checkLoginStatus: function(event) {
      this.$store.commit('resetAll')
      let password = Storage.getPassword()
      console.log('Password: ' + password);
      if (password === undefined) {
        // ユーザーのログインステータスをFalseに。
        this.$store.commit('logout')
        console.log(this.$store.state.LoginStatus);
        return
      }
      let baseUrl = 'https://us-central1-kqc-web-staging.cloudfunctions.net'
      let param = {
        "password": password
      }
      axios.post(baseUrl + '/login', param)
        .then(response => {
          this.$store.commit('login', response.data.password)
          this.$store.commit('setName', response.data.name)
          Storage.setPassword(response.data.password)
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  created: function (){
    // パスワードを取得しておく
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
    color: #fff;
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
    height: auto;
    line-height: 60px;
    text-decoration: none;
    display: inline-block;
    float: left;
    color: #fff;
    text-align: center;
  }
  .header-login :hover{
    background: #212121;
  }
  .header-login p{
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 24px;
    padding-right: 24px;
    font-weight: bold;
  }
  .login-button-wrapper{
    width: 118px;
    margin-left: auto;
    line-height: 60px;
    cursor: pointer;
  }
  .for-members{
    font-size: 20px;
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
