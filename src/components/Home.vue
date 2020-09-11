<template>
    <div class="articles">
      <button
          @onclick="isShow=''"
          class="close"
      >
        ❌
      </button>
      <div class="search_input">
        <input type="text" v-model="search" placeholder="Поиск...">
      </div>
      <div class="btn">
        <router-link to="new">
          <button>
            Add new post
          </button>
        </router-link>
      </div>
      <div
          v-for="articles in filteredArticles"
          :key="articles.title"
          class="first"
          @click="isShow = articles.title"
      >
         Blog title: {{ articles.title }}
         ❤{{ articles.likes}}
         👁{{ articles.views}}
        <div
            v-if="isShow === articles.title"
            class="showing"
        >
          Blog content: {{ articles.content }}
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data () {
      return{
        search: '',
        isShow: '',
      }
    },
    computed: {
      filteredArticles() {
        return this.$store.state.articles.filter((articles) =>{
        return articles.title.match(this.search);
      })
    },
  },
    methods: {

    }
  }

</script>

<style scoped>

.articles{
  display: flex;
  flex-flow: column;
  align-items: center;
}

.first{
  display: flex;
  background: #45b3f8;
  font-family: 'Kufam', cursive;
  color: white;
  border-width: 10px;
  border-radius: 10px;
  width: 520px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
}
.first:hover{
  background: darkcyan;
  width: 540px;
  height: 110px;
  align-items: center;
  justify-content: center;
}
input{
  display: flex;
  justify-content: center;
  align-self: center;
  height: 30px;
  width: 520px;
  background: #f2fafa;
  border-radius: 20px;
  font-family: 'Kufam', cursive;
  color: blue;
  font-size: 20px;
  margin-bottom: 10px;
}
.showing{
  display: flex;
  color: mistyrose;
  align-self: flex-end;
  margin-bottom: 10px;
}
button{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #a4d8f5;
  font-family: 'Kufam', cursive;
  color: white;
  font-size: 25px;
  height: 40px;
  width: 520px;
  border-radius: 10px;
  text-decoration: white;
  margin-bottom: 10px;
  cursor: pointer;
}
.close{
  display: flex;
  width: 40px;
  height: 40px;
  color: white;
}
</style>












