<template>
    <div class="add-blog">
      <button @click="returnToHome()">
        return
      </button>
      <h2>Add new blog post</h2>
        <input
            v-model="article.title"
            type="text"
            placeholder="Введите название..."
        ><br>
        <textarea
            v-model="article.content"
            placeholder="Введите текст..."
        />
        <button
            class="add"
            @click="addPost(); returnToHome()"
        >
          ADD
        </button>
    </div>
</template>

<script>
export default {
  name: 'New',
  data () {
    return{
      article:{
        title:'',
        content:'',
        id: '',
        likes: 0,
        views: 0,
      }
    }
  },
  methods: {
    returnToHome(){
      this.$router.push({
        name: 'Home',
      })
    },
    async addPost (){
      this.$store.commit('ADD_ARTICLE', this.article)
    }
  }
}

</script>

<style scoped>
.add-blog{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
h2{
  display: flex;
  background: #a4d8f5;
  justify-content: center;
  align-content: center;
  width:100%;
}
input, textarea{
  background: #f1fdfd;
  border-radius: 20px;
  height: 40px;
  width: 50%;
  font-family: 'Kufam', cursive;
  font-size: 20px;
  color: blue;
}
textarea{
  height: 300px;
  border-width: 2px;
  border-color: #4c4949;
  border-style: inset;
}
button{
  font-family: 'Kufam', cursive;
  font-size: 20px;
  background: #1d1df6;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  margin-top: 10px;
  justify-content: flex-start;
  align-self: flex-start;
  cursor: pointer;
}
.add{
  align-self: center;
}
</style>