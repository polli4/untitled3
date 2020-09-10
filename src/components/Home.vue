<script src="../store/index.js"></script>
<template>
  <div class="all">
    <div class="search_input">
      <input type="text" v-model="search" placeholder="Поиск...">
    </div>
    <router-link to="/New">
      <button
      >
        Add new post
      </button>
    </router-link>
    <div class="articles">
      <div
          class="first"
          v-for="articles in filtedBlogs"
          :key="articles.title"
          @click='isShow=!isShow'
      >
         Blog title: {{ articles.title }}
         ❤{{ articles.likes}}
         👁{{ articles.views}}
        <div
            class="showing"
            v-if="isShow"
        >
          Blog content: {{ articles.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Home",
  data(){
    return{
      search: '',
      isShow: false,
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
      },
    },
    methods:{

    }
  }

</script>

<style scoped>
.articles{
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-around;
}
.first{
  display: flex;
  background: #45b3f8;
  font-family: 'Kufam', cursive;
  color: white;
  border-width: 10px;
  border-radius: 10px;
  width: 40%;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  flex-flow: column;

}
.first:hover{
  background: darkcyan;
  width: 42%;
  height: 110px;
}
input, textarea{
  display: flex;
  height: 30px;
  width: 40%;
  align-items: center;
  background: #f2fafa;
  border-radius: 20px;
  font-family: 'Kufam', cursive;
  color: blue;
  font-size: 20px;
  margin-bottom: 20px;
}
.showing{
  color: mistyrose;
}
button{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a4d8f5;
  font-family: 'Kufam', cursive;
  color: white;
  font-size: 25px;
  height: 40px;
  width: 40%;
  border-radius: 10px;
  text-decoration: white;
  margin-bottom: 10px;

}

</style>












