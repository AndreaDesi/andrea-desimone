<script>
export default {
  name: "Home",
  methods: {
    playStarlySound() {
      const audio = new Audio("/starly.mp3");
      audio.play();
    },
  },
};
</script>

<template>
    <div class="home">
      <Starly />
      <div class="home__contacts">
        <p>Email: <a href="mailto:andreadesimo1998@gmail.com"><u>andreadesimo1998@gmail.com</u></a></p>
        <p>Instagram: <a href="https://www.instagram.com/desi_the_human" target="_blank"><u>@desi_the_human</u></a></p>
      </div>
      <img src="/easter-egg.gif" class="home__bird" alt="" @click="playStarlySound" />
    </div>
</template>

<style scoped>
.home {
  position: relative;
}

.home__contacts {
  position: fixed;
  bottom: 0.5rem;
  left: 0.5%;
  line-height: 1.2;
  margin-bottom: 15px;

}

.home__contacts p {
  margin: 0;
}

.home__bird {
  position: fixed;
  bottom: 0.5rem;
  right: 0.5%;
  width: 30px;
  height: auto;
  margin-bottom: 15px;
}
</style>
