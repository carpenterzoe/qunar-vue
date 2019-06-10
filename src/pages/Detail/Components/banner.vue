<template>
  <div class="container">
    <div class="banner" @click="clickShowGallery">
      <img :src="bannerImg" alt="">

      <div class="banner-info">
        <span>{{ sightName }}</span>
        <span class="img-num">
          <i class="iconfont icon-sanjiaodown"></i>
          {{gallaryImgs.length}}
        </span>
      </div>
    </div>
    <common-gallery @closeGallery="closeGallery" v-show="showGallery" :gallaryImgs="gallaryImgs"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@common/gallery'
export default {
  props: ['bannerImg','sightName', 'gallaryImgs'],
  data() {
    return {
      showGallery: false
    }
  },
  methods: {
    clickShowGallery(){
      this.showGallery = true
    },
    closeGallery(){
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style scoped lang="scss">
.banner{
  position: relative;
  height: 0;
  padding-bottom: 55%;
  overflow: hidden;
  img{
    width: 100%;
  }
}
.banner-info{
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  color: #fff;
  width: 100%;
  line-height: .6rem;
  font-size: .32rem;
  padding-left: .18rem;
  box-sizing: border-box;
}
.img-num{
  display: inline-block;
  width: 1.2rem;
  background-color: rgba(0, 0, 0, 0.7);
  height: .32rem;
  line-height: .32rem;
  text-align: center;
  border-radius: .2rem;
  font-size: .2rem;
  margin-top: .15rem;
  .iconfont{
    font-size: .2rem;
  }
}
</style>