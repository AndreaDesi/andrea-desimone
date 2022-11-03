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
  <div class="about container">
    <div>
      <h2 class="about-title">WORK EXPERIENCE:</h2>
      <div v-for="(el, i) in about.data.work_experience" :key="i">
        <PrismicRichText :field="el.content" />
      </div>
    </div>
    <div>
      <h2 class="about-title">EDUCATION:</h2>
      <div v-for="(el, i) in about.data.education" :key="i">
        <PrismicRichText :field="el.content" />
      </div>
    </div>
    <div>
      <h2 class="about-title">LANGUAGES:</h2>
      <div v-for="(el, i) in about.data.languages" :key="i">
        <PrismicRichText :field="el.content" />
      </div>
      <br>
      <h2 class="about-title">SKILLS:</h2>
      <div v-for="(el, i) in about.data.skills" :key="i">
        <PrismicRichText :field="el.content" />
      </div>
    </div>
    <p class="cv"><u><a href="https://andreadesimone.info/wp-content/uploads/2021/12/Andrea-De-Simone_CV.pdf" target="_blank" data-type="URL" data-id="https://andreadesimone.info/wp-content/uploads/2021/12/Andrea-De-Simone_CV.pdf" rel="noreferrer noopener">Download CV</a></u></p>
  </div>
</template>

<style>
.about {
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 2rem;
}

.about-title {
  font-family: 'Redaction 10';
  font-style: italic;
  font-weight: 500;
  text-transform: uppercase;
}

.cv {
  grid-column: 3;
    text-align: right;
}

@media (max-width: 992px) {
  .about {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-gap: 1.5rem;
  }
	
  .cv {
	grid-column: auto;
	grid-row: auto;
}
  }

</style>
