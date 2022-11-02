<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const about = await $prismic.api.getSingle("about");

    if (about) {
      return { about };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<template>
  <div>
    <div>
      <p>WORK EXPERIENCE:</p>
      <div v-for="(el, i) in about.data.work_experience" :key="i">
        <PrismicRichText :field="el.content" />
      </div>
    </div>
    <div>
      <p>EDUCATION:</p>
      <div v-for="(el, i) in about.data.education" :key="i">
        <PrismicRichText :field="el.content" />
      </div>
    </div>
    <div>
      <p>LANGUAGES:</p>
      <div v-for="(el, i) in about.data.languages" :key="i">
        <PrismicRichText :field="el.content" />
      </div>
    </div>
    <div>
      <p>SKILLS:</p>
      <div v-for="(el, i) in about.data.skills" :key="i">
        <PrismicRichText :field="el.content" />
      </div>
    </div>
  </div>
</template>

<style></style>
