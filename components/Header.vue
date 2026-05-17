<template>
  <nav>
    <div class="menu-nav-container">
      <ul id="menu-nav" class="menu">
        <li id="menu-item-77" class="catcus menu-item-77">
          <nuxt-link to="/">
            <span class="name-text" :class="{ hidden: scrolled }">Andrea De Simone</span>✨︎
          </nuxt-link>
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
export default {
  data() {
    return { scrolled: false };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 30;
    },
  },
};
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
  border: none;
  outline: none;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
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

.name-text {
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: bottom;
  transition: max-width 0.6s cubic-bezier(0.8,0,0.2,1);
}

.name-text.hidden {
  max-width: 0;
}

a:hover .name-text.hidden{
  max-width: 200px;
}

@media (max-width: 767px) {
  #menu-item-78 {
    grid-column: 5;
  }

  #menu-item-79 {
    grid-column: 9;
  }
}
</style>
