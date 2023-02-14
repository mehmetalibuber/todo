<template>
  <div>
    <div class="text-center">
      <strong> ToDo Listem </strong>
    </div>
    <div class="todoList">
      <div v-for="todo in Todos" :key="todo">
        <p>{{ todo.todo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayTodos",
  data() {
    return { Todos: {} };
  },

  mounted() {
    setTimeout(() => {
      this.Todos = this.$store.getters.getUserTodos;
    }, 1000);
  },
  async created() {
    await this.$store.dispatch("GET_USER_TODOS");
    setTimeout(async () => {
      this.Todos = this.$store.getters.getUserTodos;
      console.log(this.Todos);
    }, 1000);
  },
};
</script>

<style scoped>
p {
  padding: 5px 10px;
  margin: 0 5px;
  background-color: antiquewhite;
  width: max-content;
  border-radius: 4px;
}
.todoList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>