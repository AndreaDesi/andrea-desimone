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
  <div class="home container">
    <div class="me">
      <PrismicRichText :field="home.data.bio" />
      <PrismicLink :field="home.data.projects_link">↗ <u>See my projects</u></PrismicLink>
    </div>
    <div class="wp-block-table info contacts">
      <table>
        <tbody>
          <tr>
            <td>Mail:</td>
            <td><a href="mailto:andreadesimo1998@gmail.com">andreadesimo1998@gmail.com</a></td>
          </tr>
          <tr>
            <td>Tel:</td>
            <td><a href="tel:+393473198646">+39 3473198646</a> </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="info social">
      Social:
      <br>
      <a href="https://www.instagram.com/desi_the_human" data-type="URL" data-id="https://www.instagram.com/desi_the_human" target="_blank">IG</a>
      <a href="https://www.behance.net/andreadesimone98" target="_blank" data-type="URL" data-id="https://www.behance.net/andreadesimone98">Behance</a>
      <a href="https://www.linkedin.com/in/andrea-de-simone-10578b1b9/" data-type="URL" data-id="https://www.linkedin.com/in/andrea-de-simone-10578b1b9/" target="_blank">LinkedIn</a>
    </p>
  </div>
  

</template>

<style scoped>
.home {
    min-height: 90vh;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 1rem;
}


.home.container > .me {
  grid-column: 1 / span 6;
  font-size: calc(17px + (22 - 17) * ((100vw - 576px) / (2560 - 576)));
  line-height: calc(1.2em * 1.1);
  margin-top: 1em;
}

.home.container > .info {
  grid-row: 2;
}

.home.container > .info >a{
  margin-right: 0.5em;
}

.home.container > .contacts {
  grid-column: 1 / span 3;
  line-height: 1.6rem;
}

.home.container > .social {
  grid-column: 7 / span 4;
  line-height: 1.6rem;
}

.info {
  margin-top: 0px;
  align-self: center;
}
/*--------
Responsive
----------*/
@media (max-width: 767px) {
  .home {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-gap: 0rem;
  }

  .home.container > .me {
    grid-column: 1;
  }

  .home.container > .info {
    grid-row: auto;
  }

  .home.container > .social {
    grid-column: 1;
    line-height: 1.4rem;
  }

  .home.container > .contacts {
    grid-column: 1;
    line-height: 1.4rem;
  }
  }
</style>