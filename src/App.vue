<template>
  <div :class="dark ? 'dark' : 'light'" id="themeWrapper">
    <div class="bg-white dark:bg-gray-800 text-black dark:text-white relative pb-28" id="app" style="min-height: 100vh;">
      <Navigation />
      <transition name="router-anim" mode="out-in" enter-active-class="animate__animated animate__ultrafast animate__fadeIn" leave-active-class="animate__animated animate__ultrafast animate__fadeOut">
        <router-view/>
      </transition>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      dark: this.getTheme(),
    }
  },
  methods: {
    getTheme() {
      let dark = localStorage.getItem("crugg.de_dark");
      if(dark === "true" || dark === "false") {
        return dark === "true" ? true : false;
      } else {
        localStorage.setItem("crugg.de_dark", "false");
        return false;
      }
    }
  },
  watch: {
    dark: {
      handler() {
        localStorage.setItem("crugg.de_dark", this.dark ? "true" : "false")
      }
    }
  }
}
</script>


<style lang="sass">
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"

.animate__ultrafast
  --animate-duration: 400ms

.dynamic-padding
  @apply w-11/12 mx-auto sm:w-9/12 md:w-7/12

.dark .crugg-logo
  -webkit-filter: brightness(200%) contrast(174%) saturate(167%)
  filter: brightness(200%) contrast(174%) saturate(167%)

#app
  transition-duration: 250ms
</style>
