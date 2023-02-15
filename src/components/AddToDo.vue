<template>
  <div class="container-fluid">
    <form class="mt-3">
      <div class="row">
        <div class="col">
          <input class="form-control" type="text" v-model="todo" />
        </div>
        <div class="col">
          <button class="btn btn-primary" @click.prevent="SEND_TODO">
            EKLE
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddToDo",
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    async SEND_TODO() {
      let todo = this.todo;
      if (todo == "") {
        alert("Lütfen todo girin!");
      } else {
        let todoId = Date.now().toString();
        let todoData = {
          todo,
          done: false,
          todoId,
        };
        await this.$store.dispatch("ADD_TODO", todoData);
        this.todo = "";
        setTimeout(async () => {
          await this.$store.dispatch("GET_USER_TODOS");
        }, 1500);
      }
    },
  },
};
</script>

<style>
</style>