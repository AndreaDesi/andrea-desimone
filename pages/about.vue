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
    <Starly />
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
        <br />
        <h2 class="about-title">SKILLS:</h2>
        <div class="skills" v-for="(skill, i) in about.data.skills" :key="i">
          <PrismicRichText :field="skill.skill_sx" />
          <PrismicRichText :field="skill.skill_dx" />
        </div>
      </div>

      <PrismicLink class="cv" :field="about.data.cv_link"
        >Download CV</PrismicLink
      >
    </div>
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

.about a{
  text-decoration: underline;
}

.about-title {
  font-family: "Redaction 10";
  font-style: italic;
  font-weight: 500;
  text-transform: uppercase;
}

.skills {
  display: grid;
  grid-template-columns: 35% 35%;
}

.skills p{
  margin-top: 0;
  margin-bottom: 3px;
}

.cv {
  grid-column: 3;
  text-align: right;
  text-decoration: underline;
}

@media (max-width: 992px) {
  .about {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 1.5rem;
  }

  .skills {
    grid-template-columns: 50% 50%;
}

  .cv {
    grid-column: auto;
    grid-row: auto;
    margin-top: 0.83em;
    margin-bottom: 2em;
  }
}
</style>
