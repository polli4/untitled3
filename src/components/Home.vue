<template>
<div class="articles_">
  <div  class="first" v-for="article in $store.state.articles " :key="article.title">
    {{ article }}
  </div>
</div>
</template>

<script>
export default {
  name: "Home",
}


</script>

<style scoped>

</style>












