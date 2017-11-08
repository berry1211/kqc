<template>
  <div id="hunting-job-list">
  <div class="cover-image-wrapper">
    <div class="cover-image-container">
      <img src="../../assets/job.png" class="cover-image"/>
      <h1>{{ msg_sub }}</h1>
      <h1 class="sub-h1">{{ msg_sub1 }}</h1>
    </div>
  </div>
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
    <router-link to="/members/hunting-job-detail">詳細</router-link>
  </div>
</template>

<script>
export default {
  name: 'huntingjob',
  data () {
    return {
      msg_sub: 'Hunting Job',
      msg_sub1: '就活情報を配信します'
    }
  },
  created: function(){
    document.title = '就活情報 | KQC会員用'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

@media screen and (max-width: 480px) {
  #hunting-job-list{
    height: 800px;
  }
}

@media screen and (min-width: 480px) {
  h1 {
    position: absolute;
    font-size: 48px;
    top: 40%;
    left: 38%;
    font-weight: normal;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    display: block;
  }
  .sub-h1{
    position: absolute;
    font-size: 16px;
    top: 64%;
    left: 42%;
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
}
#hunting-job-list{
  height: 800px;
}
a {
  color: #42b983;
}
</style>
