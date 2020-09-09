<script src="../store/index.js"></script>
<template>
  <div class="all">
    <div class="search_input">
      <input type="text" v-model="search" placeholder="Поиск...">
      <button
          class="searching"
          type="submit"
      >
        search
      </button>
    </div>
    <div class="articles">
      <div
          class="first"
          v-for="(articles, index) in filtedBlogs"
          :key="articles.title"
      >
        <router-link to="/"> {{ index + 1 }}.{{ articles.title }}</router-link> ❤{{ articles.likes}} 👁{{ articles.views}}
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Home",
  data(){
    return{
      search: ''
    }
  },
    computed: {
      articles() {
        return this.$store.state.articles
      },
      filtedBlogs: function (){
        return this.$store.state.articles.filter((articles) =>{
          return articles.title.match(this.search);
        })
      }
    },
    methods:{

    }
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
  width: 75%;
  align-items: center;
  background: #f2fafa;
  border-radius: 20px;
  font-family: 'Kufam', cursive;
  color: blue;
  font-size: 20px;
}
.searching{
  display: flex;
  background: lightskyblue;
  border-radius: 20px;
  width: 100px;
  height: 40px;
  font-family: 'Kufam', cursive;
  color: white;
  font-size: 17px;
  justify-content: center;
  align-items: center;
}
</style>












