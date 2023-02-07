<template>
  <div class="container-fluid">
    <div class="logo">
      <router-link to="/" class="">ULTOF Online To Do</router-link>
    </div>
    <header class="header d-flex justify-content-center">
      <nav class="nav">
        <div>
          <ul>
            <li>
              <router-link to="/" tag="a" active-class="active"
                >Home</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      path: "",
    };
  },
  async created() {},
  methods: {},
};
</script>

 <style>
</style>