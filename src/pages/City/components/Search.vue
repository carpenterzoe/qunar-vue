<template>
  <div class="container">
    <input class="search" type="text" placeholder="输入城市名或拼音">
    <ul class="search-list">
      <li></li>
    </ul>
    <p class="no-result">没有找到匹配项</p>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container{
  background-color: $bgColor;
  height: .72rem;
  padding: 0 .1rem .1rem;
  box-sizing: border-box;
  .search{
    width: 7.3rem;
    height: .62rem;
    border-radius: .05rem;
  }
  .no-result{
    display: none;
  }
  input::-ms-input-placeholder {
    text-align: center;
  }
  input::-webkit-input-placeholder {
    text-align: center;
  }
}
</style>
