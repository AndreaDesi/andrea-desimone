<script>
// Doc -> https://www.embla-carousel.com/get-started/vue/
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted } from "vue";

export default {
  setup() {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      draggable: true,
      loop: true,
    });

    onMounted(() => {
      const prevBtn = emblaNode.value.querySelector(".embla__button--prev");
      const nextBtn = emblaNode.value.querySelector(".embla__button--next");

      const disablePrevAndNextBtns = disablePrevNextBtns(
        prevBtn,
        nextBtn,
        emblaApi.value
      );
      setupPrevNextBtns(prevBtn, nextBtn, emblaApi.value);
      emblaApi.value.on("select", disablePrevAndNextBtns);
      emblaApi.value.on("init", disablePrevAndNextBtns);
    });

    const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
      prevBtn.addEventListener("click", embla.scrollPrev, false);
      nextBtn.addEventListener("click", embla.scrollNext, false);
    };

    const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
      return () => {
        if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
        else prevBtn.setAttribute("disabled", "disabled");

        if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
        else nextBtn.setAttribute("disabled", "disabled");
      };
    };

    const buttonLeave = (el) => {
      el.target.classList.add("hidden");
    };

    const moveArrow = (evt, dir) => {
      evt.target.classList.remove("hidden");

      const prevArrow = document.querySelector(".js-prev-arrow");
      const nextArrow = document.querySelector(".js-next-arrow");

      const carousel = document.querySelector(".embla");
      const carouselInfo = carousel.getBoundingClientRect();

      let x = evt.clientX - carouselInfo.left;
      let y = evt.clientY - carouselInfo.top;

      let norm_x = mapEl(x, 0, carouselInfo.width, 0, carouselInfo.width);
      let norm_y = mapEl(y, 0, carouselInfo.height, 0, carouselInfo.height);

      if (dir === "prev") {
        prevArrow.style.transform = `translate(${norm_x}px, ${norm_y}px)`;
      } else {
        nextArrow.style.transform = `translate(${
          norm_x - carouselInfo.width
        }px, ${norm_y}px)`;
      }
    };

    const mapEl = (axis, rawStart, rawEnd, normalizedStart, normalizedEnd) => {
      return (
        normalizedStart +
        ((normalizedEnd - normalizedStart) * (axis - rawStart)) /
          (rawEnd - rawStart)
      );
    };

    return { buttonLeave, moveArrow, emblaNode };
  },
};
</script>

<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      <slot />
    </div>

    <button
      @mouseleave="buttonLeave"
      @mousemove="(e) => moveArrow(e, 'prev')"
      class="hidden embla__button embla__button--prev"
      type="button"
    >
      <span class="js-prev-arrow"><img src="/arrow-left.png" alt="" /></span>
    </button>
    <button
      @mouseleave="buttonLeave"
      @mousemove="(e) => moveArrow(e, 'next')"
      class="hidden embla__button embla__button--next"
      type="button"
    >
      <span class="js-next-arrow"><img src="/arrow-right.png" alt="" /></span>
    </button>
  </div>
</template>

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
.embla__button {
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 45px;
  height: 46px;

  /* @apply w-[45px]  h-[46px] md:w-[60px] md:h-[60px] lg:w-[86px] lg:h-[86px] hidden lg:block; */
}

.embla__button--prev {
  left: 0;
  width: 50%;
  height: 100%;

  /* @apply left-[20px] md:left-[40px]; */
}

.embla__button--prev span {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
}

.embla__button--next {
  right: 0;
  width: 50%;
  height: 100%;
  /* @apply right-[20px] md:right-[20px]; */
}

.embla__button--next span {
  z-index: 2;
  position: absolute;
  right: 0;
  top: 0;
}

.hidden {
  opacity: 0;
}
</style>
