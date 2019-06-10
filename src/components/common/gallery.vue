<template>
  <div class="container" @click="close">
    <swiper class="wrap" :options="Option">
      <swiper-slide v-for="item in gallaryImgs" :key="item">
        <img class="swipe-img" :src="item" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['gallaryImgs'],
  data() {
    return {
      Option: {
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    close(){
      this.$emit('closeGallery')
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container /deep/ .swiper-container{
  overflow: visible;
}
.container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrap{
  width: 100%;
}
.swipe-img{
  width: 100%;
}
.swiper-pagination{
  color: #fff;
  bottom: -1rem;
}
</style>
