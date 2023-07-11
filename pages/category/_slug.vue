<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const category = await $prismic.api.getByUID("category", params.slug, {
      fetchLinks: [
        "project.uid",
        "project.title",
        "project.images",
        "project.category",
        "category.category",
        "project.date",
      ],
    });

    if (category) {
      return { category: category.data };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  head() {
    console.log(this.category.category);
    return {
      title: this.category.category,
      meta: [
        {
          hid: "og-title",
          name: "og:title",
          content: this.category.category,
        },
        {
          name: "description",
          content: this.category.category,
        },
        {
          hid: "og-description",
          property: "og:description",
          content: this.category.category,
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Starly />
    <div class="progetti container">
      <div class="progetti-post-container">
        <div class="progetti-post">
          <h3 class="about-title">Project</h3>
          <h3 class="about-title">Medium</h3>
          <h3 class="about-title">Year</h3>
        </div>
        <div
          class="progetti-post progetti-hover"
          v-for="({ project }, i) in category.projects"
          :key="i"
        >
          <nuxt-link class="post-title" :to="`/projects/` + project.slug">
            <p>{{ $prismic.asText(project.data.title) }}</p>
          </nuxt-link>

          <nuxt-link :to="project.data.category.url">
            <p>{{ project.data.category.data.category }}</p>
          </nuxt-link>

          <p>{{ $prismic.asText(project.data.date) }}</p>
          <div
            class="post-thumbnail"
            v-for="(img, index) in project.data.images"
            :key="index"
          >
            <img v-if="index === 0" :src="img.image.url" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.progetti {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.progetti-post-container {
  grid-column: 1 / span 6;
}

.progetti-post {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid black;
  margin-top: -1px;
  align-items: center;
  grid-gap: 1rem;
}

.post-thumbnail {
  display: none;
  position: fixed;
  width: 20%;
  bottom: 1.5%;
  right: 1.5%;
}

.progetti-hover:hover .post-thumbnail {
  display: block;
}
/*--------
Responsive
----------*/
@media (max-width: 992px) {
  .progetti {
    grid-template-columns: repeat(1, 1fr);
  }
  .progetti-post-container {
    grid-column: 1;
  }
  .post-title:hover ~ .post-thumbnail {
    display: none;
  }
}
</style>
