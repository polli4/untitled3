<template>
    <div class="add-blog">
      <h2>Add new blog post</h2>
      <form>
        <label>Blog title: </label>
        <input type="text" v-model.lazy='articles.title' placeholder="Название блога">
        <label>Blog content: </label>
        <textarea v-model.lazy="articles.content"></textarea>
      </form>

    <div id="preview">
        <p>Blog title: {{ articles.title}}</p>
        <p>Blog content: {{ articles.content}}</p>
    </div>
    </div>
</template>

<script>
export default {
  name: "new"
}
</script>

<style scoped>
.add-blog{
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  flex-flow: column;
  font-family: 'Kufam', cursive;
}
</style>