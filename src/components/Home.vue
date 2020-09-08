<template>
  <div class="articles">
    <div class="search">
      <input>
    </div>
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
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}
.first{
  display: flex;
  background: lightskyblue;
  font-family: 'Kufam', cursive;
  color: white;
  border-width: 10px;
  border-radius: 10px;
  width: 40%;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.first:hover{
  background: darkcyan;
  width: 42%;
  height: 110px;
}
input{
  display: flex;
  height: 30px;
  margin-bottom: 20px;
  width: 520px;
  background: #f2fafa;
  border-radius: 20px;
  font-family: 'Kufam', cursive;
  color: blue;
  font-size: 20px;
}
</style>












