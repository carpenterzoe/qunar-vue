<template>
  <div class="container" >

    <router-link to="/" tag="div" class="back" v-show="!showHeader">
      <i class="iconfont icon-zuojiantou"></i>
    </router-link>

    <div class="header" v-show="showHeader" :style="opacityStyle">
      <router-link to="/" tag="span" class="header-back">
        <i class="iconfont icon-zuojiantou"></i>
      </router-link>
      景点详情
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacityStyle: {
        opacity: 0
      },
      showHeader: false
    }
  },
  components: {

  },
  methods: {
    scrollOpacity(){
      let top = document.body.scrollTop || document.documentElement.scrollTop
      if( top > 60 ) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showHeader = true
      }else{
        this.showHeader = false
      }
    }
  },
  activated(){
    window.addEventListener('scroll', this.scrollOpacity)
  },
  deactivated(){
    window.removeEventListener('scroll', this.scrollOpacity)
  }
}
</script>

<style scoped lang="scss">
.container{
  position: relative;
  .header{
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $headerHeight;
    background-color: $bgColor;
    text-align: center;
    line-height: $headerHeight;
    color: white;
  }
  .header-back{
    position: absolute;
    top: 0;
    left: 0;
  }
  .icon-zuojiantou{
    font-size: .40rem;
    font-weight: bold;
    display: inline-block;
    width: .7rem;
    height: $headerHeight;
    text-align: center;
  }
}
.back{
  position: absolute;
  top: .2rem;
  left: .2rem;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  border-radius: 50%;
  background-color: #000;
  z-index: 1;
  text-align: center;
  .icon-zuojiantou{
    color: #fff;
  }
}
</style>
