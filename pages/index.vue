<script>
export default {
  name: "Home",
  async asyncData({ $prismic, params, error, store }) {
    const home = await $prismic.api.getSingle("homepage");

    if (home) {
      return { home };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<template>
  <div>
    <PrismicRichText :field="home.data.bio" />
    <PrismicLink :field="home.data.projects_link">Projects</PrismicLink>
  </div>
</template>
