<template>
  <div class="articles">
    <div
        class="first"
        v-for="(article, index) in $store.state.articles"
        :key="article.title"
    >
      {{ index + 1 }}. {{ article.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}


</script>

<style scoped>
.articles{
  display: flex;
  background: lightskyblue;
  flex-flow: column;
  font-family: 'Kufam', cursive;
  color: white;
  border-width: 10px;
  border-radius: 10px;
  width: 10%;
  align-items: center;
}
</style>












