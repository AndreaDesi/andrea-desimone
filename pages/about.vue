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

  head() {
    return {
      title: "About",
      meta: [
        {
          hid: "og-title",
          name: "og:title",
          content: "About",
        },
      ],
    };
  },

  mounted() {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  },

  beforeDestroy() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  },
};
</script>

<template>
  <div>
    <Starly />
    <div v-if="about" class="about container">

      <div class="about-bio">
        <PrismicRichText :field="about.data.bio || []" />
      </div>

      <div class="about-contacts">
        <h2 class="about-title">CONTACTS</h2>
        <p>Email: <a href="mailto:andreadesimo1998@gmail.com">andreadesimo1998@gmail.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/desi_the_human" target="_blank">@desi_the_human</a></p>
        <p>CV: <PrismicLink :field="about.data.cv_link">Download</PrismicLink></p>
      </div>

      <div class="about-bottom">
        <div>
          <h2 class="about-title">WORK EXPERIENCE:</h2>
          <div v-for="(el, i) in about.data.work_experience" :key="i">
            <PrismicRichText :field="el.content || []" />
          </div>
        </div>
        <div>
          <h2 class="about-title">EDUCATION:</h2>
          <div v-for="(el, i) in about.data.education" :key="i">
            <PrismicRichText :field="el.content || []" />
          </div>
        </div>
        <div>
          <h2 class="about-title">AWARDS</h2>
          <div v-for="(el, i) in (about.data.awards || [])" :key="'award-' + i">
            <PrismicRichText :field="el.content || []" />
          </div>
        </div>
        <div>
          <h2 class="about-title">CLIENTS &amp; COLLABORATIONS</h2>
          <div v-for="(el, i) in (about.data.clients_collaborations || [])" :key="'client-' + i">
            <PrismicRichText :field="el.content || []" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
.about {
  height: 96vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto auto 1fr auto;
  grid-gap: 1.5rem;
  padding-top: 24px;
  font-family: "Catcus Semibold", sans-serif;
}

.about-bio {
  grid-column: 1 / span 6;
  grid-row: 1;
  font-size: calc(22px + (36 - 22) * ((100vw - 576px) / (2560 - 576)));
  line-height: 1.2;
  font-family: "Catcus Semibold", sans-serif;
}

.about-bio p {
  margin: 0;
}

.about-bio a {
  text-decoration: underline;
}

.about-contacts {
  grid-column: 1 / span 4;
  grid-row: 2;
}

.about-contacts p {
  margin: 0;
  line-height: 1.6;
}

.about-contacts a {
  text-decoration: underline;
}

.about-bottom {
  grid-column: 1 / span 10;
  grid-row: 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  align-self: end;
}

.about-title {
  font-family: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: inherit;
  text-transform: uppercase;
  margin: 0 0 0.3em 0;
}

.about-bottom a {
  text-decoration: underline;
}

.about-bottom p {
  margin: 0;
  line-height: 1.5;
}

.about-bottom > div > div {
  margin-bottom: 1.2em;
}

.about-bottom > div > div:last-child {
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .about {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
  }

  .about-bio {
    grid-column: 1;
    grid-row: auto;
    font-size: calc(18px + (26 - 18) * ((100vw - 320px) / (992 - 320)));
  }

  .about-contacts {
    grid-column: 1;
    grid-row: auto;
  }

  .about-bottom {
    grid-column: 1;
    grid-row: auto;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
