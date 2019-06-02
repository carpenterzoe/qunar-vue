<template>
  <div class="container">
    <swiper class="swipe-wrap" :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['swiperList'],
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: 2500,
        pagination: '.swiper-pagination'
      },
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container /deep/ .swiper-pagination-bullet-active{
  background-color: #fff;
}
.container{
  width: 100%;
  height: 2rem;
  .swipe-wrap{
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
