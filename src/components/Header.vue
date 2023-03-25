<template>
  <div class="header">
    <i class="fa fa-bars" @click="SHOW_NAV_MODAL"></i>
    <header class="nav-modal" v-if="show_nav_modal == true">
      <i class="fa fa-close" @click="HIDE_NAV_MODAL"></i>
      <nav>
        <ul>
          <li><a href="">ANASAYFA</a></li>
          <li><a href="">HAKKIMIZDA</a></li>
          <li><a href="">BLOG</a></li>
          <li><a href="">İLETİŞİM</a></li>
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
      show_nav_modal: false,
    };
  },
  async created() {},
  methods: {
    SHOW_NAV_MODAL() {
      this.show_nav_modal = true;
      let bars = document.querySelector(".fa-bars");
      bars.style.display = "none";
    },
    HIDE_NAV_MODAL() {
      this.show_nav_modal = false;
      let bars = document.querySelector(".fa-bars");
      bars.style.display = "block";
    },
  },
};
</script>

 <style>
.nav-modal {
  position: absolute;
  z-index: 999;
  width: 450px;
  height: 100%;
  background-color: #000;
}
.header .fa-bars {
  position: absolute;
  color: #fff;
  font-size: 2em;
  top: 20px;
  left: 20px;
  z-index: 999;
  cursor: pointer;
}
.header .nav-modal .fa-close {
  position: absolute;
  color: #fff;
  font-size: 2em;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.header nav ul {
  margin-top: calc(50%);
  padding: 0;
}
.header nav ul li {
  list-style: none;
  cursor: pointer;
  padding: 15px 0;
  text-align: center;
}
.header nav ul li a {
  text-decoration: none;
  color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2em;
}
</style>