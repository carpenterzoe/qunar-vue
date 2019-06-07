<template>
  <div class="container">
    <city-header/>
    <city-search :cities="cities"/>
    <city-list :cityCap="cityCap" :hotCities="hotCities" :cities="cities" />
    <city-alphabet @cityFilter="cityFilter" :cities="cities"/>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      cityCap: ''
    }
  },
  methods: {
    getCityInfo(){
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res){
      if(res.data.ret && res.data.data){
        var resInfo = res.data.data
        this.hotCities = resInfo.hotCities
        this.cities = resInfo.cities
      }
    },
    cityFilter(data){
      //console.log(data)
      this.cityCap = data
    }
  },
  mounted(){
    this.getCityInfo()
  }
}
</script>

<style scoped lang="scss">


</style>