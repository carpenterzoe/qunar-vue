<template>
  <div class="container">
    <home-header/>
    <home-swiper/>
    <home-icons/>
    <p>
      TEST
    </p>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
  data () {
    return {

    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped lang="scss">

</style>
