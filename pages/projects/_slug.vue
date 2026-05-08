<script>
export default {
  methods: {
    getColSpan(columns) {
      const map = { '1': 12, '2': 6, '3': 4, '4': 3 };
      return map[columns] || 6;
    }
  },
  async asyncData({ $prismic, params, error }) {
    try {
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
        return { 
          project: project.data, 
          prevProject, 
          nextProject 
        };
      }
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  data() {
    return {
      project: {
        title: [],
        info: [],
        description: [],
        images: []
      }
    };
  },
  head() {
    if (!this.project || !this.project.title[0]) return {};
    return {
      title: this.project.title[0].text,
      meta: [
        { hid: "og-title", name: "og:title", content: this.project.title[0].text },
        { name: "description", content: this.project.description[0] ? this.project.description[0].text : "" }
      ],
    };
  },
};
</script>

<template>
  <div v-if="project">
    <Starly />
    <div class="project container">
      
      <div class="project-header-row">
        <div class="title-col">
          <PrismicRichText class="title redaction" :field="project.title" />
        </div>
        
        <div class="info-col">
          <div class="project-info" v-for="(info, i) in project.info" :key="i">
            <PrismicRichText class="info-label" :field="info.row_title" />
            <PrismicRichText class="info-value" :field="info.row_content" />
          </div>
        </div>

        <div class="desc-col">
          <div class="descrizione">
            <PrismicRichText :field="project.description" />
          </div>
        </div>
      </div>

      <div class="project-gallery-grid">
        <div
          class="gallery-item"
          v-for="(img, index) in project.images"
          :key="index"
          :style="{ gridColumn: `span ${getColSpan(img.columns)}` }"
        >
          <img :src="img.image.url" :alt="img.image.alt || ''" />
        </div>
      </div>

    </div>

    <div class="grid container footer">
      <nuxt-link class="indietro" v-if="prevProject" :to="prevProject.url">
        <p>← Previous project</p>
      </nuxt-link>
      <nuxt-link class="avanti" v-if="nextProject" :to="nextProject.url">
        <p>Next project →</p>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.project-header-row {
  display: grid;
  grid-template-columns: 2fr 3fr 7fr; 
  grid-gap: 2rem;
  align-items: start;
  margin-bottom: 4rem;
  margin-top: 2rem;
}

.title :deep(h1) {
  margin-top: 0;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.1;
}

.project-info {
  display: grid;
  grid-template-columns: 90px 1fr;
  margin-bottom: 0.3rem;
  font-size: 0.85rem;
}

.info-label :deep(p) { margin: 0; text-transform: uppercase; font-weight: bold; }
.info-value :deep(p) { margin: 0; }
.descrizione { font-size: 0.95rem; line-height: 1.4; }

.project-gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  padding-bottom: 3rem;
}

/*--------
Responsive
----------*/
@media (max-width: 992px) {
  .project-header-row { grid-template-columns: 1fr; }
  .gallery-item { grid-column: span 12 !important; }
}

</style>