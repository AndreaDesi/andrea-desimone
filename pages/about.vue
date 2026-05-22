<script>
export default {
  async asyncData({ $prismic, error }) {
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
    if (window.innerWidth > 992) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
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

      <div class="about-bottom">
        <div>
          <h2 class="about-title">WORK EXPERIENCE:</h2>
          <div v-for="(el, i) in about.data.work_experience" :key="i">
            <PrismicRichText :field="el.content || []" />
          </div>
        </div>
        <div>
          <h2 class="about-title">SERVICES:</h2>
          <div v-for="(el, i) in about.data.education" :key="i">
            <PrismicRichText :field="el.content || []" />
          </div>
        </div>
        <div>
          <h2 class="about-title">SELECTED CLIENTS:</h2>
          <div v-for="(el, i) in (about.data.clients_collaborations || [])" :key="'client-' + i">
            <PrismicRichText :field="el.content || []" />
          </div>
        </div>
        <div class="about-contacts">
          <h2 class="about-title">CONTACTS</h2>
          <p>Email: <a href="mailto:andreadesimo1998@gmail.com">andreadesimo1998@gmail.com</a></p>
          <p>Instagram: <a href="https://www.instagram.com/desi_the_human" target="_blank">@desi_the_human</a></p>
          <p>CV: <PrismicLink :field="about.data.cv_link">Download</PrismicLink></p>
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
  grid-template-rows: auto 1fr auto;
  column-gap: 1.5rem;
  row-gap: 0;
  padding-top: 24px;
  padding-bottom: 80px;
}

.about-bio {
  grid-column: 1 / span 6;
  grid-row: 1;
  align-self: start;
  padding-bottom: 60px;
  line-height: 1.2;
}

.about-bio p {
  margin: 0;
}

.about-bio a {
  text-decoration: underline;
}

.about-contacts {
  margin-bottom: 0;
  grid-column: span 3;
}

.about-contacts p {
  margin: 0;
  line-height: 1.2;
}

.about-contacts a {
  text-decoration: underline;
}

.about-bottom {
  grid-column: 1 / span 6;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  row-gap: 0;
}

.about-title {
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0 0 1.2em 0;
}

.about-bottom a {
  text-decoration: underline;
}

.about-bottom p {
  margin: 0;
  line-height: 1.2;
}

.about-bottom > div > div {
  margin-bottom: 1.2em;
}

.about-bottom > div > div:last-child {
  margin-bottom: 40px;
}

@media (max-width: 992px) {
  .about {
    height: auto;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
  }

  .about-bio {
    grid-column: 1;
    grid-row: auto;
  }

  .about-bottom {
    grid-column: 1;
    grid-row: auto;
    grid-template-columns: repeat(1, 1fr);
  }

  .about-contacts {
    grid-column: 1;
  }
}
</style>
