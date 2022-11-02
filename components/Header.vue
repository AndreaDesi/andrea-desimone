<template>
  <nav>
    <div class="menu-nav-container">
      <ul id="menu-nav" class="menu">
        <li
          id="menu-item-77"
          class="catcus menu-item-77"
        >
          <nuxt-link to="/">✨︎</nuxt-link>
        </li>
        <li
          id="menu-item-78"
          class="menu-item-78"
        >
        <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
        <li
          id="menu-item-79"
          class="menu-item-79"
        >
        <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  height: 8.5vh;
  align-items: center;
  display: grid;
  align-content: stretch;
}

.menu-nav-container {
}

#menu-nav {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 1rem;
  margin: 0px 0px 0px 0px;
  align-items: center;
}

#menu-item-77 {
  grid-column: 1;
  font-size: calc(1.1em * 1.2);
}

#menu-item-78 {
  grid-column: 9;
  text-align: right;
  text-transform: uppercase;
}

#menu-item-79 {
  grid-column: 10;
  text-align: right;
  text-transform: uppercase;
}
</style>
