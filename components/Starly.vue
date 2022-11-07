<template>
  <div class="starly"></div>
</template>

<script>
export default {
  data() {
    return {
      timeOut: null,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.timeOut = setInterval(() => {
      // Spawn Starly
    }, 10000);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  destroyed() {
    clearInterval(this.timeOut);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
};
</script>

<style></style>
