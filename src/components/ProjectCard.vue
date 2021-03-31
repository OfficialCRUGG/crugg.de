<template>
  <div :id="`project-${id}`" class="bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md w-full shadow-sm cursor-pointer">
    <img v-if="image" :src="image" class="rounded-t-md">
    <div class="p-2">
      <h1 class="font-bold text-2xl">{{ title }}</h1>
      <p class="font-semibold text-lg">{{ description }}</p>
      <p>{{ position }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String,
    url: String,
    image: [String, Boolean],
    position: String
  },
  mounted() {
    document.querySelector("#project-" + this.id).addEventListener("click", () => {
      window.open(this.url, '_blank');
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
