<template>
  <div :id="`technology-${id}`" class="bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md w-full shadow-sm cursor-pointer flex items-center space-x-2 p-2">
    <img :src="`img/technologies/${id}.png`" class="flex-shrink-0 h-10">
    <h1 class="font-semibold text-lg">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    url: String,
  },
  mounted() {
    document.querySelector("#technology-" + this.id).addEventListener("click", () => {
      window.open(this.url, '_blank');
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
