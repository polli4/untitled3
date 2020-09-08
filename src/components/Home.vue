<template>
  <div class="articles_">
    <div
        class="first"
        v-for="(article, index) in $store.state.articles"
        :key="article.title"
    >
      #{{ index + 1 }}) {{ article }}
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












