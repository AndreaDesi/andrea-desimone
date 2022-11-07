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
    window.addEventListener("click", this.removeStarly);
    this.timeOut = setInterval(() => {
      this.spawnStarly();
    }, 20000);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("click", this.removeStarly);
  },
  destroyed() {
    clearInterval(this.timeOut);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.removeStarly();
    },
    spawnStarly() {
      const starlyWrapper = document.querySelector(".starly");
      const starly = document.createElement("img");
      starly.src = "/easter-egg.gif";
      starly.classList.add("starly__el");
      starly.style.left = Math.random() * this.width + "px";
      starly.style.top = Math.random() * this.height + "px";
      starlyWrapper.appendChild(starly);
    },
    removeStarly() {
      const starlyList = document.querySelectorAll(".starly__el");
      starlyList.forEach((starly) => {
        starly.remove();
      });
    },
  },
};
</script>

<style lang="postcss">
.starly__el {
  position: absolute;
  z-index: 1000;
  width: 30px;
}
</style>
