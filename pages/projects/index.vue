<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const projects = await $prismic.api.getSingle("projects", {
      fetchLinks: [
        "project.slug",
        "project.title",
        "project.images",
        "project.category",
        "project.date",
      ],
    });

    if (projects) {
      return { projects: projects.data.projects };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<template>
  <div>
    <div v-for="({ project }, i) in projects" :key="i">
      <nuxt-link :to="`/projects/` + project.slug">
        <PrismicRichText :field="project.data.title" />
      </nuxt-link>

      <p>{{ project.data.category }}</p>
      <p>{{ project.data.date }}</p>
      <div v-for="(img, index) in project.data.images" :key="index">
        <img v-if="index === 0" :src="img.image.url" alt="" />
      </div>
    </div>
  </div>
</template>

<style></style>
