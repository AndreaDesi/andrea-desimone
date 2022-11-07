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

    <div v-for="({ project }, i) in category.projects" :key="i">
      <nuxt-link :to="`/projects/` + project.slug">
        <PrismicRichText :field="project.data.title" />
        <p>{{ project.data.date }}</p>
      </nuxt-link>
      <div v-for="(img, index) in project.data.images" :key="index">
        <img v-if="index === 0" :src="img.image.url" alt="" />
      </div>
    </div>
  </div>
</template>

<style></style>
