<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      <slot />
    </div>
  </div>
</template>

<script>
// Doc -> https://www.embla-carousel.com/get-started/vue/
import emblaCarouselVue from "embla-carousel-vue";

export default {
  setup() {
    const [emblaNode] = emblaCarouselVue();
    return { emblaNode };
  },
};
</script>

<style scoped>
/* Embla (Carousel) */
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
}
</style>
