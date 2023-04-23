<template>
  <div>
    <div class="text-center">
      <strong> ToDo Listem </strong>
    </div>
    <div class="todoList">
      <div v-for="todo in Todos" :key="todo">
        <p @click="DELETE_TODO(todo)">{{ todo.todo }}</p>
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
    setInterval(() => {
      this.Todos = this.$store.getters.getUserTodos;
    }, 1000);
    
  },
  async created() {
    await this.$store.dispatch("GET_USER_TODOS");
  },
  methods: {
    async DELETE_TODO(todo) {
     // let id = todo.todoId;
       await this.$store.dispatch("DELETE_TODO", todo);
    }
  }
};
</script>

<style scoped>
p {
  padding: 5px 10px;
  margin: 5px 5px;
  background-color: antiquewhite;
  width: max-content;
  border-radius: 4px;
  cursor: pointer;
}
.todoList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>