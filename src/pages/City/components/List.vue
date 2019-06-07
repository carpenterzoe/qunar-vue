<template>
  <div class="container" ref="wrapper">
    <div>
      <div class="my-city">
        <p class="city-title border-bottom">当前城市</p>
        <div class="button-wrap border-bottom">
          <span class="active-city">{{ this.city }}</span>
        </div>
      </div>

      <div class="hot-cities">
        <p class="city-title border-bottom">热门城市</p>
        <div class="button-wrap border-bottom">
          <span @click="changeCity" v-for="item in hotCities" 
          :key="item.id">{{ item.name }}</span>
        </div>
      </div>

      <div class="all-cities">
        <div :ref="name" v-for="(value, name) in cities" :key="name"  class="cities-wrap">
          <p class="city-title border-bottom">{{ name }}</p>
          <ul v-for="item in value" :key="item.id">
            <li @click="changeCity" 
            class="city-list border-bottom">{{ item.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  props: ['hotCities', 'cities', 'cityCap'],
  data() {
    return {
    }
  },
  methods: {
    changeCity(e){
      let cityName = e.target.innerText
      this.$store.commit('changeCity', cityName)
      this.$router.push('/')
    }
  },
  components: {

  },
  mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper,{
          click: true
      })
  },
  watch: {
    cityCap(){
      let element = this.$refs[this.cityCap][0]
      this.scroll.scrollToElement(element)
    }
  },
  computed: {
    ...mapState(['city'])    
  }
}
</script>

<style scoped lang="scss">
.container{
  //color: #666;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.city-title{
  line-height: .54rem;
  padding-left: .2rem;
  background-color: #eee;
}
.button-wrap{
  padding: .1rem .6rem .1rem .1rem;
  box-sizing: border-box;
  span{
    display: inline-block;
    border-radius: .06rem;
    width: 1.95rem;
    line-height: .5rem;
    border: .02rem solid #ccc;
    text-align: center;
    margin: .1rem;
  }
}
.city-list{
  padding: .2rem;
  line-height: .37rem;
}
.button-wrap .active-city{
  border: .02rem solid #00bcd4;
  color: #00bcd4;
}
</style>
