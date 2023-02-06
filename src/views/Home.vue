<template>
  <div class="general">
    <img
      v-scroll-reveal="{
        desktop: true,
        mobile: false,
        origin: 'bottom',
        distance: '200px',
        reset: true,
        duration: 6000,
      }"
      src="/blogging.svg"
      class="homeStart"
    />
    <div class="container-fluid">
      <div class="col-md-6 col-sm-12 homeDesc">
        <h2
          contenteditable
          spellcheck="false"
          class="homeDescH2"
          v-scroll-reveal="{
            desktop: true,
            mobile: false,
            origin: 'top',
            distance: '160px',
            reset: true,
            duration: 2000,
          }"
        >
          I am a Front-end web developer
        </h2>
      </div>
      <div
        class="social-links col-md-8 col-sm-12"
        v-scroll-reveal="{
          desktop: true,
          mobile: false,
          origin: 'bottom',
          distance: '160px',
          reset: true,
          duration: 2000,
        }"
      >
        <a href="https://www.facebook.com/mehmetali.buber.3/" class="facebook"
        target="_blank"
          ><i class="bi bi-facebook"></i
        ></a>
        <a href="https://www.instagram.com/mehmetali_buber/" class="instagram"
        target="_blank"
          ><i class="bi bi-instagram"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/mehmet-ali-buber-245060193/"
          class="linkedin"
          target="_blank"
          ><i class="bi bi-linkedin"></i
        ></a>
        <a href="https://github.com/mehmetalibuber" class="github"
        target="_blank"
          ><i class="bi bi-github"></i
        ></a>
      </div>

      <div class="container-fluid pt-4">
       <a href="https://api.whatsapp.com/send?phone=+905318362146" target="_blank"> <img class="wp-icon"
          v-scroll-reveal="{
          desktop: true,
          mobile: false,
          origin: 'bottom',
          distance: '160px',
          reset: true,
          duration: 2000,
        }" src="/assets/img/Whatsapp.png" /></a>
      </div>
      <!-- <div class="mt-5 container-fluid">
        <router-link to="blog" style="text-decoration: none;"><img class="homeBlogIcon" src="/assets/img/virus.png"/>
        <a class="homeBlogTitle">Visit My Blog Page</a></router-link>
      </div> -->
    </div>
    <!-- <section id="services" class="services">
    <div class="container">

      <div class="section-title">
        <h2>Services</h2>
        <p>My Services</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div class="icon-box">
            <div class="icon"><i class="bx bxl-dribbble"></i></div>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-file"></i></div>
            <h4><a href="">Sed ut perspiciatis</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-tachometer"></i></div>
            <h4><a href="">Magni Dolores</a></h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-world"></i></div>
            <h4><a href="">Nemo Enim</a></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-slideshow"></i></div>
            <h4><a href="">Dele cardo</a></h4>
            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-arch"></i></div>
            <h4><a href="">Divera don</a></h4>
            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
          </div>
        </div>

      </div>

    </div>
  </section> 
 -->
  </div>
</template>
<script>
//import VueScrollReveal from 'vue-scroll-reveal'

// import Header from '../components/Header.vue'
export default {
  name: "Home",
  components: {
    // Header,
  },
  created() {
    // let a = document.getElementById("a");
    // console.log(a);
  },
  methods: {},
};
</script>
<style>
</style>