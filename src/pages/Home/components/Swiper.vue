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
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: 2500,
        pagination: '.swiper-pagination'
      },
      swiperList: [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/b6/38ea2abdaafa0f02.jpg_750x200_f47f3b0a.jpg"
      },{
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg"
      },{
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg"
      },{
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg"
      },{
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1610/f3/f39d9de1e92deb02.jpg_750x200_8cbc3f9b.jpg"
      }],
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
      height: 100%;
    }
  }
}
</style>
