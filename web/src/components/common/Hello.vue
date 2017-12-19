<template>
  <div id="hello">
    <div class="main-contents-wrapper">
      <p class="title">KQC</p>
      <p class="sub_title">慶應義塾大学唯一の弓道サークル</p>
      <video ref="videoRef" class="video_top" type="video/mp4" muted autoplay loop></video>
      <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
    </div>
  </div>
</template>

<script>
import Storage from '../../js/storage-manager'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'This is a WebSite for KQC'
    }
  },
  created: function(){
    document.title = 'KQC',
    this.checkLoginStatus()
  },
  mounted: function() {
    this.$refs.videoRef.src = "https://firebasestorage.googleapis.com/v0/b/kqc-web-staging.appspot.com/o/VID_20171209_150547.mp4?alt=media&token=fb2feb95-ff8c-45ea-8d9d-18794af45362"
    this.$refs.videoRef.play()
  },
  methods: {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#hello{
  width: 100%;
}

.title {
  width: 100%;
  color: #fff;
  font-size: 800%;
  font-weight: bold;
  position: absolute;
  text-align: center;
  top: 200px;
  z-index: 1;
}
.sub_title {
  width: 100%;
  color: #fff;
  font-size: 115%;
  font-weight: bold;
  position: absolute;
  text-align: center;
  top: 340px;
  z-index: 1;
}
.video_top {
  width: 100%;
  height: auto;
}

.main-contents-wrapper{
  width: 100%;
  height: 100%;
}
a {
  color: #424242;
}
</style>
