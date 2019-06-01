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
  data() {
    return {
      swiperOption:{
        autoplay: false
      },
      iconList: [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        "desc": "景点门票"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png",
        "desc": "本地玩乐"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
        "desc": "夏日玩水"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
        "desc": "一日游"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
        "desc": "游乐场"
      }, {
        "id": "0006",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
        "desc": "演出"
      }, {
        "id": "0007",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
        "desc": "南昌必游"
      }, {
        "id": "0008",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/ec/0e1e0238e24ba02.png",
        "desc": "婺源"
      }, {
        "id": "0009",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
        "desc": "万达乐园"
      }],
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
  height: 3.36rem;
  .swipe-wrap{
    height: 100%;
    .icons-wrap{
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
