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
  <div class="progetti grid container">
    <div class="progetti-testo">
      <h1 class="title redaction"><PrismicRichText :field="project.title" /></h1>
      <PrismicLink :field="project.category">{{
      project.category.data.category
      }}</PrismicLink>
      <p>{{ project.date }}</p>
      <PrismicRichText :field="project.role" />
      <div class="descrizione">
        <PrismicRichText :field="project.description" />
      </div>
     
    </div>
    <div v-for="(img, index) in project.images" :key="index">
      <img :src="img.image.url" alt="" />
    </div>
  </div>
</template>

<style>
.progetti {
  min-height: 80.5vh;
  place-items: start;
  margin-top: 2vh;
}

.title {
  margin-top: 0;
	margin-bottom: 0.5em;
  font-size: calc(40px + (60 - 40) * ((100vw - 576px) / (2560 - 576)));
  text-transform: uppercase;
  text-align: left;
}

.progetti-testo {
  grid-column: 1 / span 4;
}

.descrizione{
  text-align: justify;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

.project-info {
	line-height: 150%;
	text-align: left !important;
}


.progetti > figure {
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

.swiper-button-next{
  color: white !important;
  width: 50% !important;
  height: 100% !important;
  top: 0 !important;
  right: 0 !important;
  opacity: 0 !important;
  margin-top: 0px !important;
  cursor: e-resize !important;
  cursor: url(https://andreadesimone.info/wp-content/uploads/2021/12/arrow-right.png), auto !important;
  mix-blend-mode: difference;
}

.swiper-button-prev{
  color: white !important;
  width: 50% !important;
  height: 100% !important;
  top: 0 !important;
  left: 0 !important;
  opacity: 0 !important;
  margin-top: 0px !important;
  cursor: url(https://andreadesimone.info/wp-content/uploads/2021/12/arrow-left.png), auto !important;
  mix-blend-mode: difference;
}

img{
  max-width: 100%;
  width: 100%;
  height: auto;
}
</style>
