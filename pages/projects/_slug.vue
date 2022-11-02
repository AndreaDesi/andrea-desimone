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
    <PrismicRichText :field="project.title" />
    <PrismicLink :field="project.category">{{
      project.category.data.category
    }}</PrismicLink>
    <p>{{ project.date }}</p>
    <PrismicRichText :field="project.role" />
    <PrismicRichText :field="project.description" />
    <div v-for="(img, index) in project.images" :key="index">
      <img :src="img.image.url" alt="" />
    </div>
  </div>
</template>

<style></style>
