<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const projects = await $prismic.api.getSingle("projects", {
      fetchLinks: [
        "project.slug",
        "project.title",
        "project.images",
        "project.category",
        "category.category",
        "project.date",
      ],
    });

    if (projects) {
      console.log(projects.data);
      return { projects: projects.data.projects };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  head() {
    return {
      title: "Projects",
      meta: [
        {
          hid: "og-title",
          name: "og:title",
          content: "Projects",
        },
        {
          name: "description",
          content: "Projects listing",
        },
        {
          hid: "og-description",
          property: "og:description",
          content: "Projects listing",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Starly />
    <div class="progetti-container">
      <div class="grid-wrapper">
        <div v-for="({ project }, i) in projects" :key="i" class="grid-item">
          <nuxt-link :to="project.url" class="project-link">
            <div class="project-info-top">
              <span class="project-name">{{ $prismic.asText(project.data.title) }}</span>
            </div>
            <div class="project-image-box">
              <div v-for="(img, index) in project.data.images" :key="index">
                <img v-if="index === 0" :src="img.image.url" :alt="img.image.alt" />
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.progetti-container {
  width: auto;
  gap: 5px;
  margin-top: 24px;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

.grid-item {
  position: relative;
}

.project-link {
  text-decoration: none;
  color: #000;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
}

.project-info-top {
  padding: 10px 0;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.5px;
  background-color: transparent;
  font-family: "Catcus Semibold", sans-serif;
}

.project-image-box {
  width: 100%;
  aspect-ratio: 3 / 2;
  background-color: #1a0f0f;
  overflow: hidden;
}

.project-image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(20%);
}

.grid-item:hover .project-image-box img {
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .grid-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>