<template>
  <div id="nav" class="bg-gray-100 dark:bg-gray-900 border-blue-500 border-b-4 mt-24 py-4 absolute bottom-0 w-full">
    <div class="flex flex-row justify-between dynamic-padding items-center">
      <div class="flex flex-row space-x-4">
        <img src="img/transparent_logo.png" alt="C" class="h-6 crugg-logo">
        <p class="opacity-50">©️ 2021 Dennis "CRUGG" Paulus</p>
      </div>
      <div class="flex flex-row space-x-4">
        <!-- <router-link to="/imprint">Imprint</router-link> -->
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
a
  @apply text-black dark:text-white opacity-50 transition-all
  transition-duration: 250ms
  &.router-link-exact-active
    @apply opacity-100
</style>
