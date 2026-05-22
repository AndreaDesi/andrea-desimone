<script>
export default {
  methods: {
    getColSpan(columns) {
      const map = { '1': 12, '2': 6, '3': 4, '4': 3 };
      return map[columns] || 6;
    },
    getVideoUrl(url) {
      if (!url) return null;
      const cloudName = 'dfr4bd44p';
      return `https://res.cloudinary.com/${cloudName}/video/fetch/f_auto,q_auto,vc_auto/${encodeURIComponent(url)}`;
    },
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const project = await $prismic.api.getByUID("project", params.slug);

      const projectsList = await $prismic.api.getSingle("projects", {
        fetchLinks: ["project.slug", "project.title"],
      });

      const validProjects = projectsList.data.projects.filter(
        ({ project }) => project && !project.isBroken && project.data,
      );
      const currentIndex = validProjects.findIndex(
        ({ project: p }) => p.id === project.id,
      );
      const prevProject =
      currentIndex < validProjects.length - 1
      ? validProjects[currentIndex + 1].project
      : null;
      const nextProject =
      currentIndex > 0 ? validProjects[currentIndex - 1].project : null;

      // const prevProject = (
      //   await $prismic.api.query(
      //     $prismic.predicates.at("document.type", "project"),
      //     {
      //       pageSize: 1,
      //       after: `${project.id}`,
      //       orderings: "[document.first_publication_date desc]",
      //     }
      //   )
      // ).results[0];

      // const nextProject = (
      //   await $prismic.api.query(
      //     $prismic.predicates.at("document.type", "project"),
      //     {
      //       pageSize: 1,
      //       after: `${project.id}`,
      //       orderings: "[document.first_publication_date]",
      //     }
      //   )
      // ).results[0];

      if (project) {
        return {
          project: project.data,
          prevProject,
          nextProject,
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
        images: [],
      },
      failedVideos: {},
    };
  },
  head() {
    if (!this.project || !this.project.title[0]) return {};
    return {
      title: this.project.title[0].text,
      meta: [
        {
          hid: "og-title",
          name: "og:title",
          content: this.project.title[0].text,
        },
        {
          name: "description",
          content: this.project.description[0]
            ? this.project.description[0].text
            : "",
        },
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
          {{ $prismic.asText(project.title) }}
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
          <video
            v-if="img.video && img.video.url && !failedVideos[index]"
            :src="getVideoUrl(img.video.url)"
            :poster="img.image && img.image.url ? img.image.url : undefined"
            autoplay
            muted
            loop
            playsinline
            @error="$set(failedVideos, index, true)"
          />
          <img v-else :src="img.image.url" :alt="img.image.alt || ''" />
        </div>
      </div>
    </div>

    <div class="grid container footer">
      <nuxt-link class="indietro" v-if="prevProject" :to="prevProject.url">
        <p>← Prev</p>
      </nuxt-link>
      <nuxt-link class="avanti" v-if="nextProject" :to="nextProject.url">
        <p>Next →</p>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.project-header-row {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 1rem;
  align-items: start;
  margin-bottom: 4rem;
  margin-top: 2rem;
}

.title-col {
  grid-column: 1 / 3;
  text-transform: uppercase;
  line-height: 1.2;
}

.info-col {
  grid-column: 3 / 6;
}

.desc-col {
  grid-column: 6 / 11;
}

.info-col {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 15px;
}

.project-info {
  display: contents;
}

.info-label :deep(p) {
  margin: 0;
  text-transform: uppercase;
}
.info-value :deep(p) {
  margin: 0;
}
.info-value :deep(a) {
  text-decoration: underline;
}
.descrizione {
  line-height: 1.2;
}
.descrizione :deep(p) {
  margin-top: 0;
  margin-bottom: 2px;
}

.project-gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 5px;
  width: 100%;
}

.gallery-item img,
.gallery-item video {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding-bottom: 10px;
}

.avanti {
  margin-left: auto;
}

/*--------
Responsive
----------*/
@media (max-width: 992px) {
  .project-header-row {
    grid-template-columns: 1fr;
    margin-bottom: 15px;
  }
  .title-col,
  .info-col,
  .desc-col {
    grid-column: 1;
  }
  .gallery-item {
    grid-column: span 12 !important;
  }
  .info-col {
    margin-top: 15px;
    margin-bottom: 15px;
    row-gap: 0.1rem;
  }
  .descrizione :deep(p) {
    margin-top: 15px;
    margin-bottom: 15px !important;
  }
}
</style>
