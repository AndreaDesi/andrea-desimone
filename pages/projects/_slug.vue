<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const project = await $prismic.api.getByUID("project", params.slug);

    const prevProject = (
      await $prismic.api.query(
        $prismic.predicates.at("document.type", "project"),
        {
          pageSize: 1,
          after: `${project.id}`,
          orderings: "[document.first_publication_date desc]",
        }
      )
    ).results[0];

    const nextProject = (
      await $prismic.api.query(
        $prismic.predicates.at("document.type", "project"),
        {
          pageSize: 1,
          after: `${project.id}`,
          orderings: "[document.first_publication_date]",
        }
      )
    ).results[0];

    if (project) {
      return { project: project.data, prevProject, nextProject };
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
          <div class="embla__slide w-full h-0 pb-[68.75%] relative"
              v-for="(img, index) in project.images"
              :key="index">
            <img class="absolute top-0 left-0 w-full h-full cover"
              :src="img.image.url"
              alt=""
            />
          </div>
          
        </Carousel>
      </div>
    </div>
    <div class="grid container footer">
        <nuxt-link class="indietro" v-if="prevProject !== undefined" :to="prevProject.url">
          <p>← Previous project</p>
        </nuxt-link>
        <nuxt-link class="avanti" v-if="nextProject !== undefined" :to="nextProject.url">
          <p>Next project →</p>
        </nuxt-link>
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

.project-info p{
 margin-top: 0;
}

.project-info a{
  text-decoration: underline;
}

.project-info p {
  margin-bottom: 0.4em;
}

.project > .project-carousel {
  grid-column: 5 / span 6;
  width: 100%;
  max-height: 83vh;
  aspect-ratio: 16/11;
  justify-self: right;
  padding: 0 !important;
  margin: 0 !important;
}

.footer {
  height: 9vh;
  align-items: center;
}

.indietro {
  grid-column: 1 / span 5;
}

.avanti {
  grid-column: 6 / span 5;
  text-align: right;
}

/*--------
Responsive
----------*/
@media (max-width: 992px) {
  .project {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 0;
  }

  .project.grid.container {
    grid-column: 1;
  }

  .project > .project-testo {
    grid-column: 1;
  }

  .project > .project-carousel {
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
