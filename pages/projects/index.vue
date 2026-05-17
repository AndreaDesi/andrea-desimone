<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const projects = await $prismic.api.getSingle("projects", {
      fetchLinks: [
        "project.slug",
        "project.title",
        "project.preview_image",
        "project.hover_image",
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
              <img
                v-if="project.data.preview_image && project.data.preview_image.url"
                class="img-default"
                :src="project.data.preview_image.url"
                :alt="project.data.preview_image.alt"
              />
              <img
                v-if="project.data.hover_image && project.data.hover_image.url"
                class="img-hover"
                :src="project.data.hover_image.url"
                :alt="project.data.hover_image.alt"
              />
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
  margin-bottom: 10px;
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
  padding-bottom: 15px;
  text-transform: uppercase;
  background-color: transparent;
}

.project-image-box {
  width: 100%;
  aspect-ratio: 3 / 2;
  background-color: #1a0f0f;
  overflow: hidden;
  position: relative;
}

.img-default,
.img-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(20%);
}

.img-hover {
  display: none;
}

.grid-item:hover .img-hover {
  display: block;
}

.grid-item:hover .img-default {
  display: none;
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
