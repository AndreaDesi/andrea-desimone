<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const project = await $prismic.api.getByUID("project", params.slug, {
      fetchLinks: ["category.category"],
    });

    if (project) {
      return { project: project.data };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<template>
  <div>
    <Starly />
    <div class="project grid container">
      <div class="project-testo">
        <PrismicRichText class="title redaction" :field="project.title" />
        <div class="project-info" v-for="(info, i) in project.info" :key="i">
          <PrismicRichText :field="info.row_title" />
          <PrismicRichText :field="info.row_content" />
        </div>
        <div class="descrizione">
          <PrismicRichText :field="project.description" />
        </div>
      </div>

      <div class="project-carousel">
        <Carousel>
          <img
            class="embla__slide"
            v-for="(img, index) in project.images"
            :key="index"
            :src="img.image.url"
            alt=""
          />
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style>
.project {
  min-height: 80.5vh;
  place-items: start;
  margin-top: 2vh;
}

.title h1 {
  margin-top: 0;
  margin-bottom: 0.5em;
  font-size: calc(40px + (60 - 40) * ((100vw - 576px) / (2560 - 576)));
  text-transform: uppercase;
  text-align: left;
  font-weight: 500;
}

.project-testo {
  grid-column: 1 / span 4;
}

.descrizione {
  text-align: justify;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  margin-top: 1em;
}

.project-info {
  display: grid;
  grid-template-columns: 13% 87%;
  text-align: left !important;
}

.project-carousel {
  position: relative;
  grid-column: 5 / span 8;
}

.project-info p {
  margin-bottom: 0.4em;
}

.project > figure {
  grid-column: 5 / span 6;
  width: 100%;
  max-height: 83vh;
  aspect-ratio: 16/11;
  justify-self: right;
  padding: 0 !important;
  margin: 0 !important;
}

.swiper {
  width: 100%;
}

.swiper-wrapper {
  margin-top: 0;
}

.swiper-button-next {
  color: white !important;
  width: 50% !important;
  height: 100% !important;
  top: 0 !important;
  right: 0 !important;
  opacity: 0 !important;
  margin-top: 0px !important;
  cursor: e-resize !important;
  cursor: url(https://andreadesimone.info/wp-content/uploads/2021/12/arrow-right.png),
    auto !important;
  mix-blend-mode: difference;
}

.swiper-button-prev {
  color: white !important;
  width: 50% !important;
  height: 100% !important;
  top: 0 !important;
  left: 0 !important;
  opacity: 0 !important;
  margin-top: 0px !important;
  cursor: url(https://andreadesimone.info/wp-content/uploads/2021/12/arrow-left.png),
    auto !important;
  mix-blend-mode: difference;
}

/*--------
Responsive
----------*/
@media (max-width: 992px) {
  .project {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 0;
  }

  .project.grid.container > .wp-block-group {
    grid-column: 1;
  }

  .project > figure {
    grid-column: 1;
    width: 100%;
    justify-self: center;
  }

  .title {
    margin-top: 0;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }
}
</style>
