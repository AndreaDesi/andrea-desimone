<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const category = await $prismic.api.getByUID("category", params.slug, {
      fetchLinks: [
        "project.uid",
        "project.title",
        "project.images",
        "project.category",
        "project.date",
      ],
    });

    if (category) {
      return { category: category.data };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
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
          <div class="post-title" v-for="({ project }, i) in category.projects" :key="i">
            <nuxt-link :to="`/projects/` + project.slug">
              <PrismicRichText :field="project.data.title" />
              <p>{{ project.data.date }}</p>
            </nuxt-link>
            <div class="post-thumbnail" v-for="(img, index) in project.data.images" :key="index">
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
  width: 15%;
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
