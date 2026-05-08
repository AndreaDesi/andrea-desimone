<template>
  <nav>
    <div class="menu-nav-container">
      <ul id="menu-nav" class="menu">
        <li id="menu-item-77" class="catcus menu-item-77">
          <nuxt-link to="/">Andrea De Simone✨︎</nuxt-link>
        </li>
        <li id="menu-item-78" class="menu-item-78">
          <nuxt-link to="/projects">Work</nuxt-link>
        </li>
        <li id="menu-item-79" class="menu-item-79">
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
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: white;
  height: 3.5vh;
  align-items: center;
  display: grid;
  align-content: stretch;
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
  white-space: nowrap;
}

#menu-item-78 {
  grid-column: 3;
}

#menu-item-79 {
  grid-column: 4;
}
</style>