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
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = "0";
      el.style.width = "100%";
      el.style.height = "100vh";
      el.style.overflowY = "hidden";
      el.scrollTop = scrollY;
    },
    beforeEnter(el) {
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = "0";
      el.style.width = "100%";
    },
    afterEnter(el) {
      el.style.position = "";
      el.style.top = "";
      el.style.left = "";
      el.style.width = "";
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
