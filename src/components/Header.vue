<template>
  <div>
    <header class="header">
      <nav class="nav">
        <div class="logo">
          <router-link to="/" class="logoH1"
            >mehmetalibuber.com<span style="color: #b8d610">(</span
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
          <li>
            <router-link to="/about-me" tag="a" active-class="active"
              >About Me</router-link
            >
          </li>
          <li>
            <router-link to="/portfolio" tag="a" active-class="active"
              >Portfolio</router-link
            >
          </li>
          <li>
            <router-link to="/workspace" tag="a" active-class="active"
              >Workspace</router-link
            >
          </li>
          <li>
            <router-link to="/contact" tag="a" active-class="active"
              >Contact</router-link
            >
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