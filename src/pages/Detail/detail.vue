<template>
  <div class="container">
    <detail-header />
    <detail-banner 
    :bannerImg="bannerImg"
    :sightName="sightName"
    :gallaryImgs="gallaryImgs" />
    <detail-list :list="list" />
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './Components/banner'
import DetailList from './Components/list'
import DetailHeader from './Components/header'
import axios from 'axios'

export default {
  data() {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      list: []
    }
  },
  components: {
    DetailBanner,
    DetailList,
    DetailHeader
  },
  mounted(){
    this.getDetail()
  },
  methods: {
    getDetail(){
      axios.get('api/detail.json').then((res)=>{
        if(res.data.ret && res.data.data){
          let resInfo = res.data.data
          this.bannerImg = resInfo.bannerImg
          this.sightName = resInfo.sightName
          this.gallaryImgs = resInfo.gallaryImgs
          this.list = resInfo.categoryList
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  height: 30rem;
}

</style>