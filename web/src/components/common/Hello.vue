<template>
  <div id="hello">
    <div class="main-contents-wrapper">
      <video ref="videoRef" type="video/mov" src="../../assets/sample.mp4" muted></video>
      <p>ほげほげ</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'This is a WebSite for KQC'
    }
  },
  created: function(){
    document.title = 'KQC'
  },
  mounted: function() {
    // this.$refs.videoRef.src = "https://github.com/HALU5071/kqc/blob/feature-22/web/src/assets/sample.mov"
    // this.$refs.videoRef.play()
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
  height: 800px;
}

.video_top {
  width: 400px;
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
