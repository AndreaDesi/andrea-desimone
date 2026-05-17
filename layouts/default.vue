<template>
  <div>
    <transition
      name="page"
      mode=""
      @before-leave="beforeLeave"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
    >
      <div :key="$route.path">
        <Header />
        <Nuxt />
      </div>
    </transition>
    <Footer />
  </div>
</template>

<script>
export default {
  methods: {
    beforeLeave(el) {
      const scrollY = window.scrollY || window.pageYOffset;
      const isMobile = window.innerWidth <= 767;
      const margin = isMobile ? "2%" : "0.5%";
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = margin;
      el.style.right = margin;
      el.style.width = "";
      el.style.height = "100vh";
      el.style.overflowY = "hidden";
      el.scrollTop = scrollY;
    },
    beforeEnter(el) {
      const isMobile = window.innerWidth <= 767;
      const margin = isMobile ? "2%" : "0.5%";
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = margin;
      el.style.right = margin;
      el.style.width = "";
    },
    afterEnter(el) {
      el.style.position = "";
      el.style.top = "";
      el.style.left = "";
      el.style.right = "";
      el.style.width = "";
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
