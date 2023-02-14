<template>
  <div>
    <form @submit="SEND_TODO" class="mt-2">
      <div class="form">
        <input type="text" v-model="todo" />
        <button class="btn btn-primary" type="submit">EKLE</button>
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
        this.$store.dispatch("ADD_TODO", todo);
      }
    },
  },
};
</script>

<style>
</style>