<template>
  <div class="container">
    <swiper class="swipe-wrap" :options="swiperOption">
      <swiper-slide v-for="(pageIndex, index) in pages" :key="index">
        <div class="icons-wrap" v-for="item in pageIndex" :key="item.id">
          <div class="icon-desc">
            <img class="icon-img" :src="item.imgUrl" alt="">
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  props: ['iconList'],
  data() {
    return {
      swiperOption:{
        autoplay: false
      },
    }
  },
  computed: {
    pages(){

      var pages = []

      this.iconList.forEach((item, index) => {
        var pageIndex = Math.floor(index / 8)

        if(!pages[pageIndex]) {
          pages[pageIndex] = []
        }
        pages[pageIndex].push(item)
      })
      return pages
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  height: 3.6rem;
  .swipe-wrap{
    height: 100%;
    padding: .09rem 0;
    .icons-wrap{
      width: 100%;
      .icon-desc{
        float: left;
        width: 1.875rem;
        text-align: center;
        padding: .05rem 0;
        box-sizing: border-box;
      }
      .icon-img{
        width: 1.2rem;
      }
    }
  }
}
</style>
