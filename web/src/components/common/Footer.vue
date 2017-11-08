<template>
  <div id="footer">
    <div class="content-wrapper">
      <div class="copy-right-container">
        <p class="copy-right">
          Copyright (c) 2017 HALU5071 ( Yasunori Horii ). All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
@media screen and (max-width : 480px) {
  #footer{
    height: 80px;
    width: 100%;
    background: #424242;
  }

  .copy-right-wrapper{
    width: 375px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
  }
  .copy-right{
    padding-top: 36px;
    color: #ffffff;
    font-size: 10px;
    text-align: center;
    display: inline-block;
  }

}

@media screen and (min-width:765px) {
  #footer{
    height: 120px;
    width: 100%;
    background: #424242;
  }

  .content-wrapper{
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .copy-right-container{
    width: auto;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .copy-right{
    display: block;
    width: auto;
    margin-top: 48px;
    color: #ffffff;
    font-size: 14px;
    display: inline-block;
  }
}

a {
  color: #42b983;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
