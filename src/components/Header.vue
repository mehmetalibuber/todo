<template>
  <div>
    <header class="header">
      <nav class="nav">
        <div class="logo">
          <router-link to="/" class="logoH1"
            >ULTOF Online To Do<span style="color: #b8d610">(</span
            ><span style="color: #b8d610">)</span></router-link
          >
        </div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="bi bi-phone"></i>
        </label>
        <ul>
          <li>
            <router-link to="/" tag="a" active-class="active">Home</router-link>
          </li>
        </ul>
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