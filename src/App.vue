<template>
  <div id="app">
    <NavBar />
    <div id="main">
      <div class="d-flex flex-column wrapper h-100">
        <Header />
        <div class="container">
          <router-view></router-view>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

#app {
  font-family: 'Inconsolata', sans-serif;

  #main {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    height: 100vh;
    width: 85vw;
    background-color: #348f6c;

    .wrapper {
      background-color: #f7f6f1;
      border: 1vmin solid #348f6c;
      border-radius: 2.5em;

      .container {
        overflow-y: scroll;
      }

      .container::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

.container,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  max-width: 1500px;
}
</style>
