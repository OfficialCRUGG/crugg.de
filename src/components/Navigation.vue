<template>
  <div id="nav" class="bg-gray-100 dark:bg-gray-900 border-blue-500 border-t-4 py-2">
    <div class="flex flex-row justify-between dynamic-padding items-center">
      <img src="img/transparent_logo.png" alt="C" class="h-8 crugg-logo">
      <div class="flex flex-row space-x-4 items-center">
        <router-link to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <div class="border-2 border-gray-200 dark:border-gray-800 rounded-md flex">
          <div :class="`p-2 border-r border-gray-200 dark:border-gray-800 cursor-pointer ${ !$parent.dark ? 'active' : '' }`" @click="$parent.dark = false">
            <svg class="h-4 w-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />
            </svg>
          </div>
          <div :class="`p-2 border-l border-gray-200 dark:border-gray-800 cursor-pointer  ${ $parent.dark ? 'active' : '' }`" @click="$parent.dark = true">
            <svg class="h-4 w-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z" />
            </svg>
          </div>
        </div>
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

.active
  @apply bg-gray-200 dark:bg-gray-800
</style>
