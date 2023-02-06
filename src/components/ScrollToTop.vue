<template>
  <div class="container-fluid pt-5 text-right scroll">
    <button
      @click="scrollToTop"
      class="btn btn-outline-danger scrollBtn"
    >
      <i class="bi bi-chevron-double-up"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: 'scrollToTop',
  created() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 6);
      function frame() {
        if (0 > currentScroll) clearInterval(int);
        // else if(currentScroll == 0){
        //     let doc = document.getElementsByClassName('scroll');
        //     doc.style.display = "none";
        // }
        else {
          currentScroll = currentScroll - 12;
          document.documentElement.scrollTop = currentScroll;
          // console.log(currentScroll)
        } 
      }
    },
  },
};
</script>
<style>

/* .scrollBtn{
  background: #D0F0C0;
  cursor: pointer;
}
.scrollBtn:hover{
  background: #00674b;
}
.scrollBtn:hover i{
  color:#fff;
} */

</style>
